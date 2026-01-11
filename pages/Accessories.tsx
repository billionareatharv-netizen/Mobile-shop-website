import React from 'react';
import { useStore } from '../context/StoreContext';
import ProductCard from '../components/ProductCard';
import { Headphones, BatteryCharging, Shield, Zap } from 'lucide-react';

const Accessories: React.FC = () => {
  const { products } = useStore();
  const accessories = products.filter(p => p.category === 'accessory');

  return (
    <div className="bg-slate-50 min-h-screen pt-16">
      
      {/* Page Header */}
      <div className="bg-white border-b border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Premium Accessories</h1>
           <p className="text-slate-600 max-w-2xl mx-auto">
             Enhance your mobile experience with our range of high-quality chargers, audio gear, and protection accessories.
           </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Categories Pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white p-4 rounded-xl border border-slate-100 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <Headphones className="text-primary mb-2" size={28} />
                <span className="font-semibold text-slate-800">Audio</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-100 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <Zap className="text-accent mb-2" size={28} />
                <span className="font-semibold text-slate-800">Chargers</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-100 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <Shield className="text-green-600 mb-2" size={28} />
                <span className="font-semibold text-slate-800">Covers & Guards</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-100 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <BatteryCharging className="text-purple-600 mb-2" size={28} />
                <span className="font-semibold text-slate-800">Power Banks</span>
            </div>
        </div>

        <div className="flex items-center mb-6">
            <h2 className="text-2xl font-bold text-slate-800">All Products</h2>
            <div className="h-px bg-slate-200 flex-grow ml-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessories.map(acc => (
              <ProductCard key={acc.id} product={acc} />
            ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-blue-100">
            <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Can't find what you need?</h3>
                <p className="text-blue-700">We can arrange specific accessories on demand. Just let us know!</p>
            </div>
            <a 
              href="https://wa.me/919876543210?text=I%20am%20looking%20for%20a%20specific%20accessory..." 
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
                Request Item
            </a>
        </div>
      </div>
    </div>
  );
};

export default Accessories;