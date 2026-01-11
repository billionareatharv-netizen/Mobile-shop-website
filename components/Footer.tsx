import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { SHOP_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-slate-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Column 1: About */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">{SHOP_INFO.name}</h3>
            <p className="text-sm leading-relaxed mb-4 text-slate-400">
              Your trusted partner for the latest smartphones and genuine accessories. 
              We provide the best deals, exchange offers, and after-sales support in town.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/phones" className="hover:text-primary transition-colors">Smartphones</Link></li>
              <li><Link to="/accessories" className="hover:text-primary transition-colors">Accessories</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Visit Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5" />
                <span>{SHOP_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <a href={`tel:${SHOP_INFO.phone}`} className="hover:text-white">{SHOP_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <a href={`mailto:${SHOP_INFO.email}`} className="hover:text-white">{SHOP_INFO.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-primary" />
                <span>{SHOP_INFO.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-6 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} {SHOP_INFO.name}. All rights reserved. Designed for excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;