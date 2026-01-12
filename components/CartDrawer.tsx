import React from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartDrawer: React.FC = () => {
  const { 
    cartItems, 
    isCartOpen, 
    toggleCart, 
    updateQuantity, 
    removeFromCart, 
    cartTotal,
    checkoutViaWhatsapp 
  } = useCart();

  // Handle body scroll locking
  React.useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen]);

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 z-[60] transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => toggleCart(false)}
      />

      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] transform transition-transform duration-300 ease-in-out shadow-2xl flex flex-col ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="text-primary" size={24} />
            <h2 className="text-xl font-bold text-slate-900">Your Cart</h2>
            <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full">
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)} items
            </span>
          </div>
          <button 
            onClick={() => toggleCart(false)}
            className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50">
              <ShoppingBag size={64} className="text-slate-300" />
              <p className="text-lg font-medium text-slate-500">Your cart is empty</p>
              <button 
                onClick={() => toggleCart(false)} 
                className="text-primary font-bold hover:underline"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 animate-fade-in-up">
                <div className="w-20 h-20 bg-slate-50 rounded-xl overflow-hidden border border-slate-100 flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-slate-900 line-clamp-1">{item.name}</h3>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-slate-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <p className="text-xs text-slate-500 font-medium">{item.brand}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-bold text-primary">{item.price}</span>
                    
                    <div className="flex items-center gap-3 bg-slate-50 rounded-lg p-1 border border-slate-100">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-6 h-6 flex items-center justify-center bg-white rounded-md shadow-sm text-slate-600 hover:text-primary disabled:opacity-50"
                        disabled={item.quantity <= 1}
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-6 h-6 flex items-center justify-center bg-white rounded-md shadow-sm text-slate-600 hover:text-primary"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-slate-100 bg-slate-50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-slate-500 font-medium">Subtotal</span>
              <span className="text-2xl font-bold text-slate-900">
                ₹{cartTotal.toLocaleString('en-IN')}
              </span>
            </div>
            
            <p className="text-xs text-slate-400 mb-4 text-center">
              Shipping & taxes calculated at checkout via WhatsApp
            </p>
            
            <button 
              onClick={checkoutViaWhatsapp}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold shadow-lg shadow-green-600/20 flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <MessageCircle size={20} />
              Checkout on WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;