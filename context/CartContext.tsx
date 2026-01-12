import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../types';
import { SHOP_INFO } from '../constants';

export interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  isCartOpen: boolean;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, delta: number) => void;
  clearCart: () => void;
  toggleCart: (open?: boolean) => void;
  cartTotal: number;
  checkoutViaWhatsapp: () => void;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('cartItems');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const parsePrice = (priceStr: string): number => {
    // Remove currency symbol, commas, and spaces, then parse
    return parseFloat(priceStr.replace(/[^0-9.]/g, '')) || 0;
  };

  const cartTotal = cartItems.reduce((total, item) => {
    return total + (parsePrice(item.price) * item.quantity);
  }, 0);

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true); // Open cart when item added
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === productId) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const toggleCart = (open?: boolean) => {
    setIsCartOpen(prev => open !== undefined ? open : !prev);
  };

  const checkoutViaWhatsapp = () => {
    if (cartItems.length === 0) return;

    let message = `*New Order from Website*\n\nHello, I would like to purchase the following items:\n\n`;
    
    cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.name}* (${item.brand})\n`;
      message += `   Quantity: ${item.quantity}\n`;
      message += `   Price: ${item.price}\n\n`;
    });

    message += `--------------------------\n`;
    message += `*Total Amount: ₹${cartTotal.toLocaleString('en-IN')}*\n`;
    message += `--------------------------\n\n`;
    message += `Please confirm availability and delivery details.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${SHOP_INFO.whatsapp}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      isCartOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      toggleCart,
      cartTotal,
      checkoutViaWhatsapp,
      cartCount
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};