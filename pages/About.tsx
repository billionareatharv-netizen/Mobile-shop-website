import React from 'react';
import { Users, Award, ThumbsUp, Quote } from 'lucide-react';
import { SHOP_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-surface pt-20">
      
      {/* Brand Header */}
      <div className="bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
             <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Since 2018</span>
             <h1 className="text-5xl md:text-6xl font-bold text-dark mb-6 tracking-tight">
               Your Local Tech <br/><span className="text-slate-400">Expert Partner.</span>
             </h1>
             <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
               We bridge the gap between premium technology and honest, local service. 
               Experience the difference of buying from people who care.
             </p>
          </div>
      </div>

      {/* Image + Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
           <div className="relative">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                 <img 
                   src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
                   alt="Store interior" 
                   className="w-full h-full object-cover"
                 />
              </div>
              {/* Floating Stat Card */}
              <div className="absolute -bottom-10 -right-4 md:-right-10 bg-white p-8 rounded-3xl shadow-xl max-w-[280px]">
                 <div className="text-primary mb-4"><Quote size={32} /></div>
                 <p className="text-dark font-medium italic mb-4">"Our goal is not just to make a sale, but to make a customer for life."</p>
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                    <div>
                        <div className="text-sm font-bold text-dark">Rajesh Kumar</div>
                        <div className="text-xs text-slate-500">Founder</div>
                    </div>
                 </div>
              </div>
           </div>

           <div className="lg:pl-10 mt-10 lg:mt-0">
              <h2 className="text-3xl font-bold text-dark mb-6">Our Journey</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                 <p>
                    Welcome to <strong>{SHOP_INFO.name}</strong>. What started as a small repair counter has grown into the city's most trusted mobile retailer. Our success is built on a simple principle: transparency.
                 </p>
                 <p>
                    In a market flooded with options, we stand out by curating only the best devices. We don't push products; we listen to your needs and recommend what's truly right for you.
                 </p>
                 <p>
                    Whether you need the latest iPhone, a budget-friendly Android, or a quick screen repair, our expert team is here to help. We handle the technical stuff—data transfer, setup, warranty registration—so you can enjoy your new phone immediately.
                 </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-slate-200">
                  <div>
                      <div className="text-3xl font-bold text-dark mb-1">5k+</div>
                      <div className="text-xs uppercase tracking-wider text-slate-500">Devices Sold</div>
                  </div>
                  <div>
                      <div className="text-3xl font-bold text-dark mb-1">100%</div>
                      <div className="text-xs uppercase tracking-wider text-slate-500">Original</div>
                  </div>
                  <div>
                      <div className="text-3xl font-bold text-dark mb-1">4.9</div>
                      <div className="text-xs uppercase tracking-wider text-slate-500">Google Rating</div>
                  </div>
              </div>
           </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-dark text-white py-24">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-10">
               <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                  <Award className="text-primary mb-6" size={40} />
                  <h3 className="text-xl font-bold mb-3">Authorized Retailer</h3>
                  <p className="text-slate-400">We deal only in 100% original products with valid Indian warranty. No grey market goods.</p>
               </div>
               <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                  <ThumbsUp className="text-green-500 mb-6" size={40} />
                  <h3 className="text-xl font-bold mb-3">Honest Pricing</h3>
                  <p className="text-slate-400">We match online prices and often beat them with our exclusive in-store bundle offers.</p>
               </div>
               <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                  <Users className="text-amber-500 mb-6" size={40} />
                  <h3 className="text-xl font-bold mb-3">Lifetime Support</h3>
                  <p className="text-slate-400">Facing an issue? Just walk in. We help with software updates and troubleshooting for free.</p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default About;