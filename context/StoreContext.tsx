import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, User } from '../types';
import { PHONES, ACCESSORIES } from '../constants';

interface StoreContextType {
  products: Product[];
  users: User[];
  isAdmin: boolean;
  currentUser: User | null;
  login: (email: string, pass: string) => boolean;
  register: (name: string, email: string, pass: string) => boolean;
  logout: () => void;
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize products
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('products');
    return saved ? JSON.parse(saved) : [...PHONES, ...ACCESSORIES];
  });

  // Initialize users
  const [users, setUsers] = useState<User[]>(() => {
    const saved = localStorage.getItem('users');
    return saved ? JSON.parse(saved) : [];
  });

  // Auth State
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    return localStorage.getItem('isAdmin') === 'true';
  });

  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('currentUser');
    return saved ? JSON.parse(saved) : null;
  });

  // Persistence
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('currentUser');
    }
  }, [currentUser]);

  // Auth Functions
  const login = (email: string, pass: string) => {
    // 1. Check Admin
    if (email === 'admin@store.com' && pass === 'admin123') {
      setIsAdmin(true);
      const adminUser: User = { 
        id: 'admin', 
        name: 'Administrator', 
        email, 
        role: 'admin', 
        joinedDate: new Date().toISOString() 
      };
      setCurrentUser(adminUser);
      localStorage.setItem('isAdmin', 'true');
      return true;
    }
    
    // 2. Check Regular Users
    const foundUser = users.find(u => u.email === email && u.password === pass);
    if (foundUser) {
      setIsAdmin(false);
      setCurrentUser(foundUser);
      localStorage.removeItem('isAdmin');
      return true;
    }

    return false;
  };

  const register = (name: string, email: string, pass: string) => {
    // Check if email already exists
    if (users.some(u => u.email === email) || email === 'admin@store.com') {
      return false;
    }

    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      password: pass, // In a real app, hash this!
      role: 'user',
      joinedDate: new Date().toLocaleDateString()
    };

    setUsers(prev => [...prev, newUser]);
    
    // Auto login after register
    setCurrentUser(newUser);
    setIsAdmin(false);
    return true;
  };

  const logout = () => {
    setIsAdmin(false);
    setCurrentUser(null);
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('currentUser');
  };

  // Product Functions
  const addProduct = (product: Product) => {
    setProducts(prev => [product, ...prev]);
  };

  const updateProduct = (updatedProduct: Product) => {
    setProducts(prev => prev.map(p => p.id === updatedProduct.id ? updatedProduct : p));
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  return (
    <StoreContext.Provider value={{ 
      products, 
      users,
      isAdmin, 
      currentUser,
      login, 
      register,
      logout, 
      addProduct, 
      updateProduct, 
      deleteProduct 
    }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error('useStore must be used within a StoreProvider');
  return context;
};