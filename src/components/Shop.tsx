import React from 'react';
import { ShoppingBag, Star, TrendingUp } from 'lucide-react';

const Shop = () => {
  const products = [
    {
      id: 1,
      name: 'Camiseta Oficial ElRubiusWTF',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
      category: 'Ropa',
      rating: 4.8,
      trending: true
    },
    {
      id: 2,
      name: 'Sudadera Edición Limitada',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
      category: 'Ropa',
      rating: 4.9,
      trending: true
    },
    {
      id: 3,
      name: 'Gorra Signature',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
      category: 'Accesorios',
      rating: 4.7,
      trending: false
    },
    {
      id: 4,
      name: 'Taza WTF',
      price: 14.99,
      image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
      category: 'Hogar',
      rating: 4.6,
      trending: false
    }
  ];

  const categories = [
    { id: 1, name: 'Ropa', icon: '👕' },
    { id: 2, name: 'Accesorios', icon: '🧢' },
    { id: 3, name: 'Coleccionables', icon: '🏆' },
    { id: 4, name: 'Hogar', icon: '🏠' },
    { id: 5, name: 'Digital', icon: '💻' }
  ];

  return (
    <section id="shop" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Tienda Oficial</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Descubre productos exclusivos y mercancía oficial de ElRubius.
          </p>
        </div>
        
        <div className="flex overflow-x-auto pb-4 mb-8 hide-scrollbar">
          <div className="flex space-x-4">
            {categories.map((category) => (
              <a 
                key={category.id}
                href="#"
                className="flex-shrink-0 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors flex items-center"
              >
                <span className="mr-2 text-xl">{category.icon}</span>
                {category.name}
              </a>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-gray-800 rounded-xl overflow-hidden group hover:shadow-lg hover:shadow-red-900/20 transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                {product.trending && (
                  <div className="absolute top-2 left-2 bg-red-600 text-xs font-bold px-2 py-1 rounded-full flex items-center">
                    <TrendingUp size={12} className="mr-1" /> Trending
                  </div>
                )}
                <div className="absolute top-2 right-2 bg-black/70 text-xs font-bold px-2 py-1 rounded-full">
                  {product.category}
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" className="text-yellow-400/30" />
                  </div>
                  <span className="text-gray-400 text-xs ml-2">{product.rating}/5</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">{product.price}€</span>
                  <button className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center transition-colors">
                    <ShoppingBag size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-block px-8 py-3 bg-red-600 hover:bg-red-700 rounded-full font-medium transition-colors"
          >
            Visitar Tienda Completa
          </a>
        </div>
      </div>
      
      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Shop;
