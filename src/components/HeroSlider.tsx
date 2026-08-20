import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import { HERO_SLIDER_CATEGORIES } from '../data/categories';
import { useCart } from '../context/CartContext';

export const HeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { setActiveTab, setSelectedCategoryFilter } = useCart();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const categories = HERO_SLIDER_CATEGORIES;

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % categories.length);
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, categories.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % categories.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length);
  };

  const currentCategory = categories[currentIndex];

  const handleExplore = (catId: string) => {
    if (catId === 'new_arrivals' || catId === 'trending') {
      setSelectedCategoryFilter('all');
    } else {
      setSelectedCategoryFilter(catId);
    }
    setActiveTab('products');
  };

  return (
    <section
      className="relative w-full h-[65vh] min-h-[480px] max-h-[640px] bg-[#111111] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentCategory.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative w-full h-full flex items-center"
        >
          {/* Background Image with Dark Gradient Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={currentCategory.image}
              alt={currentCategory.name}
              className="w-full h-full object-cover object-center filter brightness-[0.6] dark:brightness-[0.4]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>

          {/* Hero Content Container */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 w-full text-white">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="max-w-2xl"
            >
              {/* Category Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B8956A]/20 border border-[#B8956A]/40 text-[#D4AF87] text-xs font-semibold tracking-wider uppercase backdrop-blur-md mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{currentCategory.tag || 'Featured Collection'}</span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white mb-4">
                {currentCategory.name}
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed mb-6 line-clamp-3">
                {currentCategory.description}
              </p>

              {/* Product Count & CTA */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => handleExplore(currentCategory.id)}
                  className="px-7 py-3.5 bg-[#B8956A] hover:bg-[#9E7B52] dark:bg-[#D4AF87] dark:hover:bg-[#E2C09C] text-white dark:text-[#1F1F1F] text-sm font-bold rounded-xl shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer group"
                >
                  <span>Shop This Category</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-xs text-gray-200 font-medium">
                  <span className="font-bold text-white text-sm mr-1">
                    {currentCategory.productCount.toLocaleString()}+
                  </span>
                  Products Available
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Navigation Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
        {categories.map((cat, idx) => (
          <button
            key={cat.id}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all cursor-pointer rounded-full ${
              idx === currentIndex
                ? 'w-8 h-2.5 bg-[#B8956A] dark:bg-[#D4AF87]'
                : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
            }`}
            title={`Jump to ${cat.name}`}
          />
        ))}
      </div>

      {/* Prev / Next Manual Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-[#B8956A] dark:hover:bg-[#D4AF87] text-white hover:text-white dark:hover:text-[#1F1F1F] backdrop-blur-md border border-white/15 flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer hidden sm:flex"
        title="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-[#B8956A] dark:hover:bg-[#D4AF87] text-white hover:text-white dark:hover:text-[#1F1F1F] backdrop-blur-md border border-white/15 flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer hidden sm:flex"
        title="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </section>
  );
};
