import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Phones from './pages/Phones';
import Accessories from './pages/Accessories';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import AdminProductForm from './pages/AdminProductForm';
import { MessageCircle, Phone } from 'lucide-react';
import { SHOP_INFO } from './constants';
import { useStore } from './context/StoreContext';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAdmin } = useStore();
  if (!isAdmin) return <Navigate to="/login" replace />;
  return <>{children}</>;
};

const App: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/phones" element={<Phones />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin/add" element={
            <ProtectedRoute>
              <AdminProductForm />
            </ProtectedRoute>
          } />
          <Route path="/admin/edit/:id" element={
            <ProtectedRoute>
              <AdminProductForm />
            </ProtectedRoute>
          } />
        </Routes>
      </main>
      
      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40">
        <a 
          href={`tel:${SHOP_INFO.phone}`} 
          className="bg-blue-600 text-white p-3.5 rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-110 flex items-center justify-center"
          title="Call Now"
        >
          <Phone size={24} />
        </a>
        <a 
          href={`https://wa.me/${SHOP_INFO.whatsapp}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-green-500 text-white p-3.5 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 flex items-center justify-center"
          title="Chat on WhatsApp"
        >
          <MessageCircle size={24} />
        </a>
      </div>
    </div>
  );
};

export default App;