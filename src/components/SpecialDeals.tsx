import React from 'react';
import { Tag, Zap, ArrowRight, ShoppingBag, Clock } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';

export const SpecialDeals: React.FC = () => {
  const { addToCart, setQuickViewProduct, setActiveTab } = useCart();
  const specialDeals = PRODUCTS.filter((p) => p.isSpecialDeal);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#B8956A] dark:text-[#D4AF87] mb-2">
            <Zap className="w-4 h-4 fill-current" />
            <span>Exclusive Flash Offers</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#1F1F1F] dark:text-[#F5F5F5] tracking-tight">
            Special Deals & Limited Sales
          </h2>
        </div>

        <button
          onClick={() => setActiveTab('products')}
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#B8956A] dark:text-[#D4AF87] hover:underline cursor-pointer"
        >
          <span>View All Products</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Bento-style Special Deals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {specialDeals.slice(0, 3).map((product, idx) => (
          <div
            key={product.id}
            className={`group relative bg-[#F8F7F5] dark:bg-[#1A1A1A] border border-[#EFEFEF] dark:border-[#333333] rounded-3xl p-6 transition-all duration-300 hover:scale-105 hover:-translate-y-1.5 hover:shadow-2xl hover:border-[#B8956A]/50 dark:hover:border-[#D4AF87]/50 flex flex-col justify-between ${
              idx === 0 ? 'lg:col-span-1 md:col-span-2' : ''
            }`}
          >
            {/* Top Bar: Discount Badge & Stock Status */}
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 bg-[#B8956A] text-white text-xs font-black tracking-wider uppercase rounded-full shadow-md flex items-center gap-1">
                <Tag className="w-3 h-3" /> -{product.discountPercentage}% OFF
              </span>

              <span
                className={`px-2.5 py-0.5 text-[11px] font-bold rounded-full ${
                  product.stockStatus === 'Low Stock'
                    ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30'
                    : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                }`}
              >
                {product.stockStatus}
              </span>
            </div>

            {/* Product Image */}
            <div
              onClick={() => setQuickViewProduct(product)}
              className="relative w-full h-48 sm:h-56 overflow-hidden my-2 flex items-center justify-center cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Details */}
            <div className="mt-4 pt-4 border-t border-[#EFEFEF] dark:border-[#333333]">
              <span className="text-xs font-semibold text-[#5A5A5A] dark:text-[#A9A9A9] uppercase">
                {product.brand} • {product.category}
              </span>
              <h3
                onClick={() => setQuickViewProduct(product)}
                className="text-lg font-extrabold text-[#1F1F1F] dark:text-[#F5F5F5] mt-1 hover:text-[#B8956A] dark:hover:text-[#D4AF87] transition-colors cursor-pointer line-clamp-1"
              >
                {product.name}
              </h3>

              {/* Pricing & CTA */}
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <div className="text-xs text-[#5A5A5A] dark:text-[#A9A9A9] line-through">
                    ${product.originalPrice}
                  </div>
                  <div className="text-2xl font-black text-[#B8956A] dark:text-[#D4AF87]">
                    ${product.price}
                  </div>
                </div>

                <button
                  onClick={() => addToCart(product)}
                  className="px-5 py-2.5 bg-[#B8956A] hover:bg-[#9E7B52] dark:bg-[#D4AF87] dark:hover:bg-[#E2C09C] text-white dark:text-[#1F1F1F] rounded-xl text-xs font-extrabold shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Shop Now</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
