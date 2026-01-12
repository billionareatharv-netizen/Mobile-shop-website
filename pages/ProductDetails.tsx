import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Share2, ShieldCheck, Truck, RotateCcw, Star, CheckCircle2, ShoppingBag, Check } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { products } = useStore();
  const { addToCart } = useCart();
  
  // Find match in dynamic list
  const product = products.find(p => p.id === id);
  const relatedProducts = products.filter(p => p.category === product?.category && p.id !== product?.id).slice(0, 3);
  
  const [activeImage, setActiveImage] = useState<string>('');
  const [showCopied, setShowCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) {
      setActiveImage(product.image);
    }
  }, [id, product]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Product Not Found</h2>
        <Link to="/phones" className="text-primary hover:underline">Browse all phones</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleBuyNow = () => {
    addToCart(product);
  };

  const handleShare = async () => {
    const shareData = {
      title: product.name,
      text: `Check out the ${product.name} at Smart Mobile Store!`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        // Use native share (Mobile/Supported Browsers)
        await navigator.share(shareData);
      } else {
        // Fallback to clipboard
        await navigator.clipboard.writeText(window.location.href);
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2000);
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  return (
    <div className="bg-surface pt-20 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Back */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to={product.category === 'phone' ? '/phones' : '/accessories'} className="hover:text-primary capitalize">
            {product.category}s
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-medium truncate">{product.name}</span>
        </div>

        <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            
            {/* Left: Image Gallery */}
            <div className="p-8 lg:p-12 bg-slate-50/50 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-100 relative">
               <button onClick={() => window.history.back()} className="absolute top-6 left-6 p-2 bg-white rounded-full shadow-sm text-slate-600 hover:text-dark transition-colors md:hidden">
                 <ArrowLeft size={20} />
               </button>
               
               <div className="relative w-full max-w-md aspect-[4/5] lg:aspect-square mb-6">
                 <img 
                   src={activeImage || product.image} 
                   alt={product.name} 
                   className="w-full h-full object-contain mix-blend-multiply transition-all duration-300" 
                 />
               </div>
               
               {/* Gallery Thumbnails */}
               {product.images && product.images.length > 1 && (
                 <div className="flex gap-4 overflow-x-auto pb-2 w-full justify-center">
                    {product.images.map((img, idx) => (
                      <div 
                        key={idx} 
                        onClick={() => setActiveImage(img)}
                        className={`w-16 h-16 rounded-xl border-2 cursor-pointer p-1 transition-all duration-200 ${
                          activeImage === img ? 'border-primary scale-105 shadow-md' : 'border-transparent hover:border-slate-200 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover rounded-lg" />
                      </div>
                    ))}
                 </div>
               )}
            </div>

            {/* Right: Product Info */}
            <div className="p-8 lg:p-12 flex flex-col">
              
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                   <span className="text-sm font-bold text-primary uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">{product.brand}</span>
                   
                   {/* Share Button */}
                   <div className="relative">
                     <button 
                        onClick={handleShare}
                        className="text-slate-400 hover:text-primary transition-colors p-2 rounded-full hover:bg-slate-50"
                        title="Share Product"
                     >
                       {showCopied ? <Check size={20} className="text-green-500" /> : <Share2 size={20} />}
                     </button>
                     {showCopied && (
                       <div className="absolute right-0 -top-8 bg-dark text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap animate-fade-in-up">
                         Link Copied!
                       </div>
                     )}
                   </div>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 leading-tight">{product.name}</h1>
                
                {product.rating && (
                    <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center bg-green-600 text-white px-2 py-0.5 rounded text-sm font-bold gap-1">
                            <span>{product.rating}</span>
                            <Star size={12} fill="currentColor" />
                        </div>
                        <span className="text-slate-500 text-sm">{product.reviews?.toLocaleString()} Reviews</span>
                    </div>
                )}

                <div className="flex items-end gap-3 mb-6">
                  <span className="text-4xl font-bold text-slate-900">{product.price}</span>
                  {product.originalPrice && (
                    <div className="flex flex-col mb-1">
                      <span className="text-lg text-slate-400 line-through decoration-slate-300">{product.originalPrice}</span>
                      <span className="text-xs font-bold text-green-600">Price Drop!</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                 <button 
                   onClick={handleBuyNow}
                   className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-green-600/20 transition-all hover:-translate-y-1"
                 >
                   Buy Now via WhatsApp
                 </button>
                 <button 
                   onClick={handleAddToCart}
                   className="flex-1 bg-white border-2 border-slate-200 hover:border-dark text-slate-900 py-4 px-6 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all"
                 >
                   <ShoppingBag size={20} /> Add to Cart
                 </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-slate-100">
                  <div className="text-center">
                      <div className="w-10 h-10 mx-auto bg-blue-50 text-primary rounded-full flex items-center justify-center mb-2">
                          <ShieldCheck size={20} />
                      </div>
                      <div className="text-xs font-bold text-slate-900">1 Year Warranty</div>
                  </div>
                  <div className="text-center">
                      <div className="w-10 h-10 mx-auto bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mb-2">
                          <RotateCcw size={20} />
                      </div>
                      <div className="text-xs font-bold text-slate-900">7 Days Replace</div>
                  </div>
                  <div className="text-center">
                      <div className="w-10 h-10 mx-auto bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-2">
                          <Truck size={20} />
                      </div>
                      <div className="text-xs font-bold text-slate-900">Fast Delivery</div>
                  </div>
              </div>

              {/* Specs & Description */}
              <div className="space-y-6">
                 <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-3">Highlights</h3>
                    <ul className="space-y-2">
                       {product.features ? product.features.map((feat, i) => (
                           <li key={i} className="flex items-start gap-3 text-slate-600">
                               <CheckCircle2 size={18} className="text-primary mt-0.5 flex-shrink-0" />
                               <span className="text-sm">{feat}</span>
                           </li>
                       )) : (
                           product.specs.map((spec, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-600">
                                <CheckCircle2 size={18} className="text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{spec}</span>
                            </li>
                           ))
                       )}
                    </ul>
                 </div>
                 
                 {product.description && (
                    <div>
                        <h3 className="font-bold text-slate-900 text-lg mb-2">Description</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            {product.description}
                        </p>
                    </div>
                 )}
              </div>
            </div>
          </div>
        </div>

        {/* Similar Products */}
        <div className="mt-20">
            <h2 className="text-2xl font-bold text-slate-800 mb-8">Similar Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.length > 0 ? (
                relatedProducts.map(related => (
                  <ProductCard key={related.id} product={related} />
                ))
              ) : (
                <div className="text-slate-500 col-span-full">No related products found.</div>
              )}
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProductDetails;