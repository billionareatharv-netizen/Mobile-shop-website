import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { SHOP_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 3000);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900 text-center mb-10">Contact Us</h1>

        <div className="grid lg:grid-cols-2 gap-10">
          
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-xl font-bold text-slate-800 mb-6">Store Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-full text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Address</h3>
                    <p className="text-slate-600">{SHOP_INFO.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-full text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Phone</h3>
                    <p className="text-slate-600">{SHOP_INFO.phone}</p>
                    <p className="text-sm text-slate-400">Available during working hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-full text-primary">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Opening Hours</h3>
                    <p className="text-slate-600">{SHOP_INFO.hours}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href={`https://wa.me/${SHOP_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-colors"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Dummy Map */}
            <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-100 h-64 overflow-hidden relative">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.792562867208!2d72.8776563149026!3d19.07609098708792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1645523456789!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy"
                title="Store Location"
                className="rounded-xl"
               ></iframe>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Send us a Message</h2>
            <p className="text-slate-500 mb-6">Have a specific requirement? Fill the form below.</p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea 
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="I am interested in..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-secondary text-white py-3.5 rounded-lg font-bold hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Enquiry
              </button>

              {formStatus === 'success' && (
                <div className="p-3 bg-green-50 text-green-700 text-center rounded-lg text-sm font-medium animate-fade-in">
                  Message sent successfully! We will contact you soon.
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;