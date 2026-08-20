import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { useCart } from '../context/CartContext';

export const LatestArrivals: React.FC = () => {
  const { setActiveTab } = useCart();
  const scrollRef = useRef<HTMLDivElement>(null);
  const newestProducts = PRODUCTS.slice(0, 6);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#EFEFEF] dark:border-[#333333]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#B8956A] dark:text-[#D4AF87] mb-2">
            <Sparkles className="w-4 h-4" />
            <span>2026 Collection</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#1F1F1F] dark:text-[#F5F5F5] tracking-tight">
            Latest Arrivals
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 mr-2">
            <button
              onClick={() => scroll('left')}
              className="p-2.5 rounded-full border border-[#EFEFEF] dark:border-[#333333] text-[#1F1F1F] dark:text-[#F5F5F5] hover:bg-[#B8956A] hover:text-white dark:hover:bg-[#D4AF87] dark:hover:text-[#1F1F1F] transition-all cursor-pointer"
              title="Scroll Left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2.5 rounded-full border border-[#EFEFEF] dark:border-[#333333] text-[#1F1F1F] dark:text-[#F5F5F5] hover:bg-[#B8956A] hover:text-white dark:hover:bg-[#D4AF87] dark:hover:text-[#1F1F1F] transition-all cursor-pointer"
              title="Scroll Right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <button
            onClick={() => setActiveTab('products')}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#B8956A] dark:text-[#D4AF87] hover:underline cursor-pointer"
          >
            <span>Explore All</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Gallery */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar py-4 px-1 -mx-1 scroll-smooth snap-x snap-mandatory"
      >
        {newestProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-[280px] sm:w-[300px] shrink-0 snap-start"
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
