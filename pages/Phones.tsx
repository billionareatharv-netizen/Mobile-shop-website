import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import ProductCard from '../components/ProductCard';
import { Filter } from 'lucide-react';

const Phones: React.FC = () => {
  const { products } = useStore();
  const [activeBrand, setActiveBrand] = useState('All');

  // Filter only phones
  const allPhones = products.filter(p => p.category === 'phone');

  const brands = ['All', ...Array.from(new Set(allPhones.map(p => p.brand)))];

  const filteredPhones = activeBrand === 'All' 
    ? allPhones 
    : allPhones.filter(p => p.brand === activeBrand);

  return (
    <div className="bg-slate-50 min-h-screen py-10 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Latest Smartphones</h1>
            <p className="text-slate-500 mt-1 text-sm md:text-base">Find your perfect device from top brands</p>
          </div>
          
          {/* Simple Filter UI */}
          <div className="flex items-center bg-white p-1 rounded-lg border border-slate-200 overflow-x-auto max-w-full no-scrollbar shadow-sm">
             <div className="px-3 text-slate-400">
                <Filter size={16} />
             </div>
             {brands.map(brand => (
               <button
                 key={brand}
                 onClick={() => setActiveBrand(brand)}
                 className={`px-4 py-1.5 rounded-md text-sm font-medium whitespace-nowrap transition-all ${
                   activeBrand === brand 
                     ? 'bg-primary text-white shadow-md' 
                     : 'text-slate-600 hover:bg-slate-100'
                 }`}
               >
                 {brand}
               </button>
             ))}
          </div>
        </div>

        {filteredPhones.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhones.map(phone => (
              <ProductCard key={phone.id} product={phone} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
             <p className="text-slate-500 text-lg">No phones found for this category.</p>
             <button onClick={() => setActiveBrand('All')} className="mt-4 text-primary font-medium hover:underline">Clear Filters</button>
          </div>
        )}

        {/* SEO/Content Section */}
        <div className="mt-16 bg-white p-8 rounded-2xl border border-slate-100">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Why Buy Smartphones from Us?</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-600 leading-relaxed">
            <p>
              At Smart Mobile Store, we ensure that every smartphone sold is 100% original and comes with a valid brand warranty. We understand that buying a phone is an investment, which is why we offer live demos and unbiased advice to help you choose the best phone for your budget.
            </p>
            <p>
              We also offer the best exchange prices in the market. Upgrade to the latest iPhone, Samsung S-Series, or OnePlus device by trading in your old smartphone. Zero downpayment EMI options are available for eligible credit and debit cards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phones;