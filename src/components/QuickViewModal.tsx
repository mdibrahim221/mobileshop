import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Star, ShoppingBag, ShieldCheck, Truck, Check, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const QuickViewModal: React.FC = () => {
  const { quickViewProduct, setQuickViewProduct, addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState(1);

  if (!quickViewProduct) return null;

  const images = quickViewProduct.gallery && quickViewProduct.gallery.length > 0
    ? quickViewProduct.gallery
    : [quickViewProduct.image];

  const currentImage = selectedImage || images[0];
  const activeColor = selectedColor || (quickViewProduct.colors && quickViewProduct.colors[0]?.name) || 'Standard';

  const handleAddToCart = () => {
    addToCart(quickViewProduct, quantity, activeColor);
    setQuickViewProduct(null);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setQuickViewProduct(null)}
          className="fixed inset-0 bg-black/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          className="relative w-full max-w-4xl bg-white dark:bg-[#1A1A1A] border border-[#EFEFEF] dark:border-[#333333] rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col md:flex-row"
        >
          {/* Close Button */}
          <button
            onClick={() => setQuickViewProduct(null)}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#F8F7F5] dark:bg-[#0F0F0F] text-[#1F1F1F] dark:text-[#F5F5F5] hover:bg-[#B8956A] hover:text-white dark:hover:bg-[#D4AF87] transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Column: Image Gallery */}
          <div className="w-full md:w-1/2 p-6 bg-[#F8F7F5] dark:bg-[#0F0F0F] flex flex-col items-center justify-between">
            <div className="relative w-full aspect-square flex items-center justify-center p-4">
              <img
                src={currentImage}
                alt={quickViewProduct.name}
                className="max-h-full max-w-full object-contain transition-all duration-300"
              />
              {quickViewProduct.discountPercentage && (
                <span className="absolute top-2 left-2 px-3 py-1 bg-[#B8956A] text-white text-xs font-black uppercase rounded-full">
                  -{quickViewProduct.discountPercentage}% OFF
                </span>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex items-center gap-3 mt-4 overflow-x-auto p-1">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(img)}
                    className={`w-14 h-14 rounded-xl border-2 overflow-hidden p-1 bg-white dark:bg-[#1A1A1A] transition-all cursor-pointer ${
                      currentImage === img
                        ? 'border-[#B8956A] dark:border-[#D4AF87] scale-105'
                        : 'border-[#EFEFEF] dark:border-[#333333] opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Specifications & Purchasing */}
          <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase text-[#5A5A5A] dark:text-[#A9A9A9]">
                  {quickViewProduct.brand}
                </span>
                <span className="text-xs text-[#5A5A5A] dark:text-[#A9A9A9]">•</span>
                <span className="text-xs font-semibold text-[#B8956A] dark:text-[#D4AF87]">
                  {quickViewProduct.category.toUpperCase()}
                </span>
              </div>

              <h2 className="text-2xl font-black text-[#1F1F1F] dark:text-[#F5F5F5] mt-1">
                {quickViewProduct.name}
              </h2>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <span className="text-sm font-bold text-[#1F1F1F] dark:text-[#F5F5F5]">
                  {quickViewProduct.rating}
                </span>
                <span className="text-xs text-[#5A5A5A] dark:text-[#A9A9A9]">
                  ({quickViewProduct.reviewCount} customer reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mt-4">
                <span className="text-3xl font-black text-[#B8956A] dark:text-[#D4AF87]">
                  ${quickViewProduct.price}
                </span>
                {quickViewProduct.originalPrice && (
                  <span className="text-base text-[#5A5A5A] dark:text-[#A9A9A9] line-through">
                    ${quickViewProduct.originalPrice}
                  </span>
                )}
              </div>

              <p className="text-xs sm:text-sm text-[#5A5A5A] dark:text-[#A9A9A9] mt-3 leading-relaxed">
                {quickViewProduct.description}
              </p>

              {/* Color Selection */}
              {quickViewProduct.colors && quickViewProduct.colors.length > 0 && (
                <div className="mt-5">
                  <span className="text-xs font-bold text-[#1F1F1F] dark:text-[#F5F5F5] uppercase tracking-wider block mb-2">
                    Color: <span className="text-[#B8956A] dark:text-[#D4AF87]">{activeColor}</span>
                  </span>
                  <div className="flex items-center gap-2.5">
                    {quickViewProduct.colors.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColor(c.name)}
                        style={{ backgroundColor: c.hex }}
                        className={`w-7 h-7 rounded-full border-2 transition-all cursor-pointer flex items-center justify-center ${
                          activeColor === c.name
                            ? 'border-[#B8956A] dark:border-[#D4AF87] scale-110 shadow-md'
                            : 'border-white/30 opacity-80 hover:opacity-100'
                        }`}
                        title={c.name}
                      >
                        {activeColor === c.name && (
                          <Check className="w-3.5 h-3.5 text-white drop-shadow-md" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Specs Summary Table */}
              <div className="mt-5 p-4 rounded-2xl bg-[#F8F7F5] dark:bg-[#0F0F0F] border border-[#EFEFEF] dark:border-[#333333]">
                <h4 className="text-xs font-bold uppercase text-[#1F1F1F] dark:text-[#F5F5F5] mb-2">
                  Technical Specifications
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {Object.entries(quickViewProduct.specs).slice(0, 4).map(([key, val]) => (
                    <div key={key} className="flex flex-col">
                      <span className="text-[10px] text-[#5A5A5A] dark:text-[#A9A9A9] uppercase font-semibold">
                        {key.replace('_', ' ')}
                      </span>
                      <span className="text-[#1F1F1F] dark:text-[#F5F5F5] font-medium line-clamp-1">
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quantity & Add to Cart Controls */}
            <div className="mt-6 pt-4 border-t border-[#EFEFEF] dark:border-[#333333]">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-[#EFEFEF] dark:border-[#333333] rounded-xl overflow-hidden bg-[#F8F7F5] dark:bg-[#0F0F0F]">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3 py-2 text-sm font-bold text-[#1F1F1F] dark:text-[#F5F5F5] hover:bg-[#B8956A] hover:text-white transition-colors cursor-pointer"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-sm font-bold text-[#1F1F1F] dark:text-[#F5F5F5]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-3 py-2 text-sm font-bold text-[#1F1F1F] dark:text-[#F5F5F5] hover:bg-[#B8956A] hover:text-white transition-colors cursor-pointer"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-3 bg-[#B8956A] hover:bg-[#9E7B52] dark:bg-[#D4AF87] dark:hover:bg-[#E2C09C] text-white dark:text-[#1F1F1F] rounded-xl text-sm font-extrabold shadow-lg hover:scale-102 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add To Cart • ${(quickViewProduct.price * quantity).toFixed(2)}</span>
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#5A5A5A] dark:text-[#A9A9A9] mt-4">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#B8956A]" /> 2-Year Official Warranty
                </span>
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-[#B8956A]" /> Free Express Dispatch
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
