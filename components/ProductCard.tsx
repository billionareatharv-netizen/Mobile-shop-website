import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Star } from 'lucide-react';
import { Product } from '../types';
import { SHOP_INFO } from '../constants';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const whatsappMessage = encodeURIComponent(
    `Hi, I saw the ${product.name} on your website. Is it available?`
  );
  const whatsappLink = `https://wa.me/${SHOP_INFO.whatsapp}?text=${whatsappMessage}`;

  return (
    <div className="group relative bg-white rounded-3xl p-4 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-slate-100/50 hover:border-blue-100 flex flex-col h-full">
      
      {/* Clickable Area for Product Details */}
      <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface mb-4 cursor-pointer">
        <div className="absolute inset-0 bg-slate-100 animate-pulse group-hover:hidden"></div>
        <img 
          src={product.image} 
          alt={product.name} 
          className="relative z-10 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 z-20 flex flex-col gap-2">
            {product.isNew && (
            <span className="bg-dark text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md">
                New
            </span>
            )}
            {product.isBestSeller && (
            <span className="bg-white/90 text-gold text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm border border-gold/20">
                Hot
            </span>
            )}
        </div>
      </Link>

      {/* Details */}
      <div className="px-2 pb-2 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-1">
            <div className="text-xs font-bold text-primary uppercase tracking-widest">{product.brand}</div>
            {product.rating && (
                <div className="flex items-center gap-1 bg-green-50 px-1.5 py-0.5 rounded text-[10px] font-bold text-green-700">
                    <span>{product.rating}</span>
                    <Star size={10} fill="currentColor" />
                </div>
            )}
        </div>
        
        <Link to={`/product/${product.id}`} className="block">
            <h3 className="text-lg font-bold text-slate-900 leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {product.name}
            </h3>
        </Link>
        
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-xl font-bold text-slate-900">{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-slate-400 line-through decoration-slate-300">{product.originalPrice}</span>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity mb-4">
          {product.specs.slice(0, 2).map((spec, index) => (
            <span key={index} className="inline-block text-[10px] bg-slate-100 text-slate-600 px-2 py-1 rounded-md font-medium">
              {spec}
            </span>
          ))}
        </div>
        
        <div className="mt-auto pt-2 flex gap-2">
             <Link 
                to={`/product/${product.id}`} 
                className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-2.5 rounded-xl text-sm flex items-center justify-center transition-colors"
             >
                View Details
             </Link>
             <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white p-2.5 rounded-xl transition-colors flex items-center justify-center"
                title="Enquire on WhatsApp"
             >
                <ArrowUpRight size={20} />
             </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;