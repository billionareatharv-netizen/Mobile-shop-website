import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, ShieldCheck, Banknote, Star } from 'lucide-react';
import { SHOP_INFO } from '../constants';
import { useStore } from '../context/StoreContext';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const { products } = useStore();
  // Get latest 3 phones
  const featuredPhones = products
    .filter(p => p.category === 'phone')
    .slice(0, 3);

  return (
    <div className="overflow-hidden">
      
      {/* Premium Hero Section */}
      <section className="relative min-h-[90vh] bg-dark text-white flex items-center pt-24 pb-12 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-medium text-slate-300">New Stock Available</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
              Future Tech. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Best Deals.</span>
            </h1>
            
            <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
              Experience the latest smartphones with full warranty. 
              We offer the best exchange rates and 0% EMI options in the city.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                to="/phones" 
                className="px-8 py-4 bg-white text-dark rounded-xl font-bold hover:bg-slate-100 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                Shop Phones <ArrowRight size={20} />
              </Link>
              <a 
                href={`https://wa.me/${SHOP_INFO.whatsapp}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/10 text-white border border-white/10 rounded-xl font-bold hover:bg-white/20 transition-all backdrop-blur-md flex items-center gap-2"
              >
                <MessageCircle size={20} />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Hero Image - Fixed visibility */}
          <div className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center order-1 lg:order-2">
            {/* Abstract geometric shapes behind phone */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-transparent rounded-[3rem] transform rotate-6 border border-white/5 scale-90 lg:scale-100"></div>
            
            {/* Main Image Container */}
            <div className="relative w-full max-w-xs lg:max-w-sm aspect-[3/5] bg-dark rounded-[2.5rem] border border-white/10 backdrop-blur-xl flex items-center justify-center overflow-hidden transform -rotate-3 hover:rotate-0 transition-transform duration-700 shadow-2xl shadow-blue-900/20">
               <img 
                 src="https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=800" 
                 alt="Premium Smartphone" 
                 className="w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-1000"
               />
               <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark via-dark/80 to-transparent">
                 <div className="text-white text-xl font-bold">iPhone 15 Pro Max</div>
                 <div className="text-slate-400 text-sm">Titanium Design</div>
               </div>
            </div>
            
            {/* Floating Elements - Visible only on larger screens to avoid clutter */}
            <div className="absolute top-10 -right-4 lg:-right-10 bg-white p-4 rounded-2xl shadow-2xl animate-float hidden sm:block">
                <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-lg text-green-600">
                        <Banknote size={24} />
                    </div>
                    <div>
                        <div className="text-xs text-slate-500 font-bold uppercase">Best Value</div>
                        <div className="font-bold text-dark">Exchange Offer</div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories / Marquee - Made Responsive */}
      <div className="bg-dark border-y border-white/5 py-8 overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center md:justify-around items-center gap-x-8 gap-y-4 text-slate-400 font-medium opacity-50 uppercase tracking-widest text-sm md:text-base">
            <span>Apple</span>
            <span>Samsung</span>
            <span>OnePlus</span>
            <span>Xiaomi</span>
            <span>Vivo</span>
         </div>
      </div>

      {/* Bento Grid Features */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-dark mb-4">Why we are different</h2>
            <p className="text-slate-500">We don't just sell phones; we build relationships. Here is why thousands of locals trust us.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow relative overflow-hidden group">
                <div className="relative z-10">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6">
                        <ShieldCheck size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-dark mb-2">100% Genuine Products</h3>
                    <p className="text-slate-500 max-w-sm">Every device comes with an official brand warranty. We are authorized retailers for major brands ensuring you get authentic tech.</p>
                </div>
                <div className="absolute right-0 bottom-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
            </div>

            <div className="bg-dark text-white p-8 rounded-3xl shadow-lg relative overflow-hidden group">
                <div className="relative z-10">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white mb-6 backdrop-blur-md">
                        <Banknote size={28} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Best Exchange</h3>
                    <p className="text-slate-300">Get the highest market value for your old device instantly.</p>
                </div>
                <div className="absolute -right-4 -top-4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow">
                 <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 mb-6">
                    <Star size={28} />
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">Premium Service</h3>
                <p className="text-slate-500 text-sm">Free data transfer and setup with every purchase.</p>
            </div>

            <div className="md:col-span-2 bg-gradient-to-r from-primary to-blue-600 text-white p-8 rounded-3xl shadow-lg relative overflow-hidden flex items-center justify-between">
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-2">Easy EMI Available</h3>
                    <p className="text-blue-100 mb-6 max-w-md">Take home your dream phone today with 0% interest EMI options on leading credit cards.</p>
                    <Link to="/contact" className="px-6 py-2 bg-white text-primary rounded-lg font-bold text-sm hover:bg-blue-50 transition-colors">Check Eligibility</Link>
                </div>
                <div className="hidden sm:block opacity-20 transform rotate-12">
                   <Banknote size={120} />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Responsive Header Fix: items-start on mobile, items-end on desktop */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
               <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">New Arrivals</span>
               <h2 className="text-3xl md:text-4xl font-bold text-dark">Trending Devices</h2>
            </div>
            <Link to="/phones" className="group flex items-center gap-2 text-slate-500 hover:text-primary font-medium transition-colors">
              View all smartphones 
              <span className="bg-slate-100 p-2 rounded-full group-hover:bg-primary group-hover:text-white transition-all"><ArrowRight size={16} /></span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPhones.map(phone => (
              <ProductCard key={phone.id} product={phone} />
            ))}
          </div>
        </div>
      </section>

      {/* Big CTA */}
      <section className="py-24 bg-surface">
         <div className="max-w-5xl mx-auto px-4">
            <div className="bg-dark rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
               {/* Decorative Background */}
               <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
                  <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]"></div>
               </div>
               
               <div className="relative z-10">
                 <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to upgrade?</h2>
                 <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
                   Visit our store to experience the devices hands-on. We guarantee the best price match in the market.
                 </p>
                 <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link to="/contact" className="px-8 py-4 bg-white text-dark rounded-xl font-bold hover:scale-105 transition-transform">
                      Get Store Directions
                    </Link>
                    <a href={`tel:${SHOP_INFO.phone}`} className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-xl font-bold hover:bg-white/10 transition-colors">
                      Call {SHOP_INFO.phone}
                    </a>
                 </div>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default Home;