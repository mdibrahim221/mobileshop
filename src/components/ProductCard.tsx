import React from 'react';
import { Star, ShoppingBag, Eye, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  layout?: 'grid' | 'horizontal';
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, layout = 'grid' }) => {
  const { addToCart, setQuickViewProduct } = useCart();

  return (
    <div className="group relative bg-[#F8F7F5] dark:bg-[#1A1A1A] border border-[#EFEFEF] dark:border-[#333333] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#B8956A]/40 dark:hover:border-[#D4AF87]/40 flex flex-col h-full">
      {/* Product Image Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-white/50 dark:bg-black/30 p-6 flex items-center justify-center">
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
          {product.isNew && (
            <span className="px-2.5 py-1 text-[11px] font-bold tracking-wider uppercase bg-[#1F1F1F] dark:bg-[#F5F5F5] text-white dark:text-[#1F1F1F] rounded-md shadow-md flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#B8956A]" /> NEW
            </span>
          )}
          {product.discountPercentage && (
            <span className="px-2.5 py-1 text-[11px] font-bold tracking-wider uppercase bg-[#B8956A] text-white rounded-md shadow-md">
              -{product.discountPercentage}%
            </span>
          )}
          {product.badge && !product.isNew && !product.discountPercentage && (
            <span className="px-2.5 py-1 text-[11px] font-bold tracking-wider uppercase bg-[#1F1F1F]/80 text-white dark:bg-[#F5F5F5]/80 dark:text-[#1F1F1F] rounded-md backdrop-blur-sm">
              {product.badge}
            </span>
          )}
        </div>

        {/* Stock Status Badge Right */}
        {product.stockStatus && (
          <div className="absolute top-3 right-3 z-10">
            <span
              className={`px-2 py-0.5 text-[10px] font-semibold rounded-full ${
                product.stockStatus === 'Low Stock'
                  ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                  : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
              }`}
            >
              {product.stockStatus}
            </span>
          </div>
        )}

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-108"
          loading="lazy"
        />

        {/* Quick View Hover Overlay Button */}
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 p-4 backdrop-blur-[2px]">
          <button
            onClick={() => setQuickViewProduct(product)}
            className="px-4 py-2 bg-white/90 dark:bg-[#1A1A1A]/90 hover:bg-[#B8956A] dark:hover:bg-[#D4AF87] text-[#1F1F1F] dark:text-[#F5F5F5] hover:text-white dark:hover:text-[#1F1F1F] text-xs font-semibold rounded-xl shadow-lg transition-all transform translate-y-2 group-hover:translate-y-0 flex items-center gap-1.5 cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" /> Quick View
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow justify-between bg-[#F8F7F5] dark:bg-[#1A1A1A]">
        <div>
          <span className="text-[11px] font-medium tracking-wider uppercase text-[#5A5A5A] dark:text-[#A9A9A9]">
            {product.brand}
          </span>
          <h3
            onClick={() => setQuickViewProduct(product)}
            className="text-base font-bold text-[#1F1F1F] dark:text-[#F5F5F5] mt-1 hover:text-[#B8956A] dark:hover:text-[#D4AF87] transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mt-2">
            <div className="flex items-center text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
            </div>
            <span className="text-xs font-semibold text-[#1F1F1F] dark:text-[#F5F5F5]">
              {product.rating}
            </span>
            <span className="text-xs text-[#5A5A5A] dark:text-[#A9A9A9]">
              ({product.reviewCount})
            </span>
          </div>
        </div>

        {/* Pricing and Action */}
        <div className="mt-4 pt-3 border-t border-[#EFEFEF] dark:border-[#333333] flex items-center justify-between">
          <div className="flex flex-col">
            {product.originalPrice && (
              <span className="text-xs text-[#5A5A5A] dark:text-[#A9A9A9] line-through">
                ${product.originalPrice}
              </span>
            )}
            <span className="text-lg font-bold text-[#B8956A] dark:text-[#D4AF87]">
              ${product.price}
            </span>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="px-3.5 py-2 bg-[#B8956A] hover:bg-[#9E7B52] dark:bg-[#D4AF87] dark:hover:bg-[#E2C09C] text-white dark:text-[#1F1F1F] rounded-xl text-xs font-semibold shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};
