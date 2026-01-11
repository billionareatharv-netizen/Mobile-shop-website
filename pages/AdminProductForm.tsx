import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Save, Image as ImageIcon } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { Product } from '../types';

const AdminProductForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { products, addProduct, updateProduct } = useStore();
  
  const isEditing = Boolean(id);
  const existingProduct = products.find(p => p.id === id);

  const [formData, setFormData] = useState<Partial<Product>>({
    name: '',
    brand: '',
    price: '',
    originalPrice: '',
    image: '',
    category: 'phone',
    specs: ['', ''],
    description: '',
    features: [''],
    isNew: false,
    isBestSeller: false,
    rating: 4.5
  });

  useEffect(() => {
    if (isEditing && existingProduct) {
      setFormData(existingProduct);
    }
  }, [isEditing, existingProduct]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const productData = {
        ...formData,
        id: isEditing ? id! : Date.now().toString(),
        // ensure required arrays exist
        images: formData.images || [formData.image!],
        specs: formData.specs || [],
        features: formData.features || []
    } as Product;

    if (isEditing) {
      updateProduct(productData);
    } else {
      addProduct(productData);
    }
    navigate('/admin');
  };

  const handleArrayInput = (key: 'specs' | 'features', index: number, value: string) => {
    const newArray = [...(formData[key] || [])];
    newArray[index] = value;
    setFormData({ ...formData, [key]: newArray });
  };

  const addArrayItem = (key: 'specs' | 'features') => {
    setFormData({ ...formData, [key]: [...(formData[key] || []), ''] });
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <button 
          onClick={() => navigate('/admin')}
          className="flex items-center gap-2 text-slate-500 hover:text-dark mb-6 transition-colors"
        >
          <ArrowLeft size={20} /> Back to Dashboard
        </button>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="bg-dark px-8 py-6">
            <h1 className="text-2xl font-bold text-white">
              {isEditing ? 'Edit Product' : 'Add New Product'}
            </h1>
            <p className="text-slate-400 text-sm">Fill in the details below</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            {/* Basic Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-slate-700 mb-2">Product Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none"
                  placeholder="e.g. iPhone 15 Pro"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Brand</label>
                <input 
                  type="text" 
                  required
                  value={formData.brand}
                  onChange={e => setFormData({...formData, brand: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none"
                  placeholder="e.g. Apple"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Category</label>
                <select 
                  value={formData.category}
                  onChange={e => setFormData({...formData, category: e.target.value as any})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none bg-white"
                >
                  <option value="phone">Smartphone</option>
                  <option value="accessory">Accessory</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Price</label>
                <input 
                  type="text" 
                  required
                  value={formData.price}
                  onChange={e => setFormData({...formData, price: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none"
                  placeholder="e.g. ₹1,29,999"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Original Price (Optional)</label>
                <input 
                  type="text" 
                  value={formData.originalPrice}
                  onChange={e => setFormData({...formData, originalPrice: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none"
                  placeholder="e.g. ₹1,39,999"
                />
              </div>
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Image URL</label>
              <div className="flex gap-4">
                 <input 
                  type="text" 
                  required
                  value={formData.image}
                  onChange={e => setFormData({...formData, image: e.target.value})}
                  className="flex-grow px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none"
                  placeholder="https://..."
                />
              </div>
              {formData.image && (
                <div className="mt-4 w-32 h-32 rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
                  <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                </div>
              )}
            </div>

            {/* Description */}
            <div>
               <label className="block text-sm font-bold text-slate-700 mb-2">Description</label>
               <textarea 
                 rows={4}
                 value={formData.description}
                 onChange={e => setFormData({...formData, description: e.target.value})}
                 className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none"
                 placeholder="Product description..."
               ></textarea>
            </div>

            {/* Dynamic Specs */}
            <div>
               <label className="block text-sm font-bold text-slate-700 mb-2">Key Specs</label>
               <div className="space-y-3">
                 {formData.specs?.map((spec, idx) => (
                    <input 
                      key={idx}
                      type="text" 
                      value={spec}
                      onChange={e => handleArrayInput('specs', idx, e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-slate-200 text-sm focus:ring-1 focus:ring-primary outline-none"
                      placeholder={`Spec ${idx + 1}`}
                    />
                 ))}
                 <button 
                   type="button" 
                   onClick={() => addArrayItem('specs')}
                   className="text-primary text-sm font-semibold hover:underline"
                 >
                   + Add Spec
                 </button>
               </div>
            </div>

            {/* Flags */}
            <div className="flex gap-8 border-t border-slate-100 pt-6">
               <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={formData.isNew}
                    onChange={e => setFormData({...formData, isNew: e.target.checked})}
                    className="w-5 h-5 rounded text-primary focus:ring-primary" 
                  />
                  <span className="font-medium text-slate-700">Mark as New Arrival</span>
               </label>

               <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={formData.isBestSeller}
                    onChange={e => setFormData({...formData, isBestSeller: e.target.checked})}
                    className="w-5 h-5 rounded text-primary focus:ring-primary" 
                  />
                  <span className="font-medium text-slate-700">Mark as Best Seller</span>
               </label>
            </div>

            <div className="pt-4">
              <button 
                type="submit"
                className="w-full bg-dark text-white py-4 rounded-xl font-bold hover:bg-primary transition-colors flex items-center justify-center gap-2 shadow-xl"
              >
                <Save size={20} /> {isEditing ? 'Update Product' : 'Create Product'}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminProductForm;