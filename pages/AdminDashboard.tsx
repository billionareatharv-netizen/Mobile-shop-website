import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Edit2, Trash2, Search, Smartphone, Headphones, Users, Package, Mail, Calendar } from 'lucide-react';
import { useStore } from '../context/StoreContext';

const AdminDashboard: React.FC = () => {
  const { products, users, deleteProduct } = useStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'products' | 'users'>('products');

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
            <p className="text-slate-500">Overview of your store performance</p>
          </div>
          {activeTab === 'products' && (
            <Link 
              to="/admin/add" 
              className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg flex items-center gap-2 transition-all"
            >
              <Plus size={20} /> Add Product
            </Link>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
           <button onClick={() => setActiveTab('products')} className={`text-left p-5 rounded-2xl border transition-all ${activeTab === 'products' ? 'bg-white border-primary ring-1 ring-primary shadow-md' : 'bg-white border-slate-100 shadow-sm hover:border-blue-200'}`}>
             <div className="text-slate-500 text-xs uppercase tracking-wider font-bold mb-1">Total Items</div>
             <div className="text-2xl font-bold text-slate-900">{products.length}</div>
           </button>
           
           <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm pointer-events-none opacity-80">
             <div className="text-slate-500 text-xs uppercase tracking-wider font-bold mb-1">Phones</div>
             <div className="text-2xl font-bold text-slate-900">{products.filter(p => p.category === 'phone').length}</div>
           </div>
           
           <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm pointer-events-none opacity-80">
             <div className="text-slate-500 text-xs uppercase tracking-wider font-bold mb-1">Accessories</div>
             <div className="text-2xl font-bold text-slate-900">{products.filter(p => p.category === 'accessory').length}</div>
           </div>
           
           <button 
             onClick={() => setActiveTab('users')} 
             className={`text-left p-5 rounded-2xl border transition-all relative overflow-hidden flex flex-col justify-center ${activeTab === 'users' ? 'bg-white border-primary ring-1 ring-primary shadow-md' : 'bg-white border-slate-100 shadow-sm hover:border-blue-200'}`}
           >
             <div className="absolute right-2 top-2 text-primary/10">
                <Users size={48} />
             </div>
             <div className="text-slate-500 text-xs uppercase tracking-wider font-bold mb-1">Registered Users</div>
             <div className="text-2xl font-bold text-primary">{users.length}</div>
           </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-slate-200/50 p-1 rounded-xl mb-6 w-fit">
          <button
            onClick={() => setActiveTab('products')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
              activeTab === 'products' 
                ? 'bg-white text-primary shadow-sm' 
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
            }`}
          >
            <Package size={18} /> Products
          </button>
          <button
            onClick={() => setActiveTab('users')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
              activeTab === 'users' 
                ? 'bg-white text-primary shadow-sm' 
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
            }`}
          >
            <Users size={18} /> Users
          </button>
        </div>

        {/* --- PRODUCTS TAB --- */}
        {activeTab === 'products' && (
          <>
            {/* Search */}
            <div className="relative mb-6">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
               <input 
                 type="text" 
                 placeholder="Search products by name or brand..." 
                 className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none"
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
               />
            </div>

            {/* Product List */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 text-slate-500 text-xs uppercase">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Product</th>
                      <th className="px-6 py-4 font-semibold">Category</th>
                      <th className="px-6 py-4 font-semibold">Price</th>
                      <th className="px-6 py-4 font-semibold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredProducts.map(product => (
                      <tr key={product.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-slate-100 overflow-hidden flex-shrink-0 border border-slate-200">
                              <img src={product.image} alt="" className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <div className="font-semibold text-slate-900">{product.name}</div>
                              <div className="text-xs text-slate-500">{product.brand}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                            product.category === 'phone' 
                              ? 'bg-blue-50 text-blue-700' 
                              : 'bg-purple-50 text-purple-700'
                          }`}>
                            {product.category === 'phone' ? <Smartphone size={12} /> : <Headphones size={12} />}
                            {product.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 font-medium text-slate-900">
                          {product.price}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Link 
                              to={`/admin/edit/${product.id}`}
                              className="p-2 text-slate-500 hover:text-primary hover:bg-blue-50 rounded-lg transition-colors"
                              title="Edit"
                            >
                              <Edit2 size={18} />
                            </Link>
                            <button 
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                if(window.confirm(`Are you sure you want to delete "${product.name}"?`)) {
                                  deleteProduct(product.id);
                                }
                              }}
                              className="p-2 text-slate-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                              title="Delete"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {filteredProducts.length === 0 && (
                 <div className="p-12 text-center text-slate-500">
                    No products found matching your search.
                 </div>
              )}
            </div>
          </>
        )}

        {/* --- USERS TAB --- */}
        {activeTab === 'users' && (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden animate-fade-in-up">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-slate-500 text-xs uppercase">
                  <tr>
                    <th className="px-6 py-4 font-semibold">User Name</th>
                    <th className="px-6 py-4 font-semibold">Email</th>
                    <th className="px-6 py-4 font-semibold">Role</th>
                    <th className="px-6 py-4 font-semibold">Joined Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {users.map(user => (
                    <tr key={user.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                             <Users size={20} />
                          </div>
                          <div className="font-semibold text-slate-900">{user.name}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-600">
                        <div className="flex items-center gap-2">
                          <Mail size={14} className="text-slate-400" />
                          {user.email}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium uppercase tracking-wide ${
                          user.role === 'admin' 
                            ? 'bg-purple-50 text-purple-700 border border-purple-100' 
                            : 'bg-green-50 text-green-700 border border-green-100'
                        }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-500 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} className="text-slate-400" />
                          {user.joinedDate}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {users.length === 0 && (
               <div className="p-12 text-center text-slate-500">
                  No users registered yet.
               </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default AdminDashboard;