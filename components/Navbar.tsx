import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Smartphone, User, LogOut, LayoutDashboard } from 'lucide-react';
import { SHOP_INFO } from '../constants';
import { useStore } from '../context/StoreContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAdmin, currentUser, logout } = useStore();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Phones', path: '/phones' },
    { label: 'Accessories', path: '/accessories' },
    { label: 'Our Story', path: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Dynamic text color based on scroll and page
  const textColorClass = isHome && !scrolled ? 'text-white' : 'text-slate-900';
  const subTextColorClass = isHome && !scrolled ? 'text-slate-300' : 'text-slate-500';
  const iconBgClass = isHome && !scrolled ? 'bg-white/10 text-white' : 'bg-dark text-white';
  const mobileMenuButtonClass = isHome && !scrolled ? 'text-white hover:bg-white/10' : 'text-slate-800 hover:bg-slate-100';

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group relative z-50" onClick={() => setIsOpen(false)}>
            <div className={`p-2.5 rounded-xl group-hover:bg-primary transition-colors duration-300 ${iconBgClass}`}>
              <Smartphone size={24} />
            </div>
            <div>
              <h1 className={`text-xl font-bold tracking-tight leading-none group-hover:text-primary transition-colors ${textColorClass}`}>
                {SHOP_INFO.name.split(' ')[0]}<span className="text-primary">.</span>
              </h1>
              <p className={`text-[10px] uppercase tracking-[0.2em] font-semibold ${subTextColorClass}`}>Store</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <div className={`flex gap-1 p-1 rounded-full border backdrop-blur-sm ${isHome && !scrolled ? 'bg-white/10 border-white/10' : 'bg-white/50 border-white/20'}`}>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? 'bg-dark text-white shadow-lg'
                      : isHome && !scrolled 
                        ? 'text-slate-200 hover:text-white hover:bg-white/10' 
                        : 'text-slate-600 hover:text-dark hover:bg-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className={`flex items-center gap-3 pl-4 border-l ${isHome && !scrolled ? 'border-white/20' : 'border-slate-200'}`}>
              {currentUser ? (
                <>
                  {isAdmin ? (
                    <Link 
                      to="/admin" 
                      className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-blue-500"
                    >
                      <LayoutDashboard size={18} />
                      Admin
                    </Link>
                  ) : (
                    <div className={`text-sm font-semibold ${isHome && !scrolled ? 'text-white' : 'text-slate-700'}`}>
                      Hi, {currentUser.name.split(' ')[0]}
                    </div>
                  )}
                  
                  <button 
                    onClick={handleLogout}
                    className={`p-2 rounded-full transition-colors ${isHome && !scrolled ? 'text-white hover:bg-white/10' : 'text-slate-500 hover:text-red-500 hover:bg-red-50'}`}
                    title="Logout"
                  >
                    <LogOut size={20} />
                  </button>
                </>
              ) : (
                <Link 
                  to="/login"
                  className={`p-2 rounded-full transition-colors ${isHome && !scrolled ? 'text-white hover:bg-white/10' : 'text-slate-500 hover:text-primary hover:bg-blue-50'}`}
                  title="Login"
                >
                  <User size={20} />
                </Link>
              )}
              
              <Link 
                to="/contact"
                className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button - Visible when menu is closed */}
          <div className="md:hidden relative z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${mobileMenuButtonClass}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} className="text-slate-800" /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay - Full Screen with proper alignment */}
      <div 
        className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out md:hidden h-[100dvh] flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header Spacer to align Close button with Hamburger */}
        <div className={`flex justify-end items-center px-4 sm:px-6 lg:px-8 ${scrolled ? 'py-3' : 'py-5'}`}>
            {/* Invisible placeholder to push content down correctly if needed, but here we just use the space */}
            <div className="h-10"></div> 
        </div>

        <div className="flex-1 flex flex-col items-center gap-8 mt-4 overflow-y-auto px-6 pb-12">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-bold ${
                  isActive(item.path) ? 'text-primary' : 'text-slate-800'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="w-20 h-px bg-slate-100 my-2"></div>
            
            {currentUser ? (
               <>
                 {isAdmin ? (
                    <Link to="/admin" onClick={() => setIsOpen(false)} className="text-xl font-medium text-primary flex items-center gap-2">
                        <LayoutDashboard size={24} /> Dashboard
                    </Link>
                 ) : (
                    <div className="text-xl font-bold text-slate-800">Hi, {currentUser.name}</div>
                 )}
                 <button onClick={() => { handleLogout(); setIsOpen(false); }} className="text-xl font-medium text-red-500 flex items-center gap-2">
                    <LogOut size={24} /> Logout
                 </button>
               </>
            ) : (
               <Link to="/login" onClick={() => setIsOpen(false)} className="text-xl font-medium text-slate-600">
                  Login / Sign Up
               </Link>
            )}

            <Link 
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full text-center px-8 py-4 bg-dark text-white font-bold rounded-xl text-lg shadow-xl"
            >
              Visit Store
            </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;