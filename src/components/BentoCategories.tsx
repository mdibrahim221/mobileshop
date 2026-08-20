import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Smartphone, Headphones, Zap, Flame, Crown, ArrowUpRight, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface BentoCardProps {
  title: string;
  count: string;
  subtitle: string;
  image: string;
  categoryFilter: string;
  badge?: string;
  icon: React.ReactNode;
  className?: string;
}

const BentoTile: React.FC<BentoCardProps> = ({
  title,
  count,
  subtitle,
  image,
  categoryFilter,
  badge,
  icon,
  className = ''
}) => {
  const { setActiveTab, setSelectedCategoryFilter } = useCart();
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Calculate max tilt angle (around 6 degrees)
    const tiltX = (mouseY / (rect.height / 2)) * -6;
    const tiltY = (mouseX / (rect.width / 2)) * 6;

    setRotateX(tiltX);
    setRotateY(tiltY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const handleClick = () => {
    if (categoryFilter !== 'all') {
      setSelectedCategoryFilter(categoryFilter);
    }
    setActiveTab('products');
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      }}
      className={`group relative overflow-hidden rounded-3xl bg-[#1A1A1A] text-white border border-[#333333] shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.08] cursor-pointer ${className}`}
    >
      {/* Background Image & Overlay */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.55] group-hover:brightness-[0.4] transition-all duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-between">
        {/* Top Badge & Icon */}
        <div className="flex items-center justify-between">
          <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-[#D4AF87]">
            {icon}
          </div>

          {badge && (
            <span className="px-3 py-1 bg-[#B8956A] dark:bg-[#D4AF87] text-white dark:text-[#1F1F1F] text-xs font-bold uppercase tracking-wider rounded-full shadow-md flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> {badge}
            </span>
          )}
        </div>

        {/* Bottom Details */}
        <div className="mt-8">
          <div className="text-xs font-bold uppercase tracking-widest text-[#D4AF87]">
            {count}
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mt-1 group-hover:text-[#D4AF87] transition-colors">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 mt-1 line-clamp-2">{subtitle}</p>

          {/* Secondary Hover Reveal Button */}
          <div className="mt-4 flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider group-hover:text-[#D4AF87] transition-colors">
            <span>Explore Collection</span>
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const BentoCategories: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#EFEFEF] dark:border-[#333333]">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#B8956A] dark:text-[#D4AF87] mb-2">
          <Flame className="w-4 h-4" />
          <span>Interactive Categories</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-[#1F1F1F] dark:text-[#F5F5F5] tracking-tight">
          Featured Product Ecosystems
        </h2>
        <p className="text-sm text-[#5A5A5A] dark:text-[#A9A9A9] mt-2">
          Cursor-reactive 3D bento grid — hover over any tile to reveal product volume and specs.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Large Tile 1: Smartphones (Spans 2 rows on desktop) */}
        <BentoTile
          title="Flagship Smartphones"
          count="1,234 Products"
          subtitle="A17 Pro Titanium & Snapdragon 8 Gen 3 Flagships"
          image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=80"
          categoryFilter="mobile"
          badge="Trending #1"
          icon={<Smartphone className="w-6 h-6" />}
          className="lg:row-span-2 min-h-[380px] lg:min-h-[520px]"
        />

        {/* Medium Tile 2: Accessories */}
        <BentoTile
          title="GaN Power & Accessories"
          count="856 Products"
          subtitle="Fast 100W GaN Chargers & Official MagSafe Gear"
          image="https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80"
          categoryFilter="accessories"
          icon={<Zap className="w-6 h-6" />}
          className="min-h-[250px]"
        />

        {/* Medium Tile 3: Headphones */}
        <BentoTile
          title="Spatial Audio Headphones"
          count="432 Products"
          subtitle="AirPods Max, Sony WH-1000XM5 & Bose QC Ultra"
          image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
          categoryFilter="headphones"
          badge="Studio ANC"
          icon={<Headphones className="w-6 h-6" />}
          className="min-h-[250px]"
        />

        {/* Small Tile 4: Flash Sale */}
        <BentoTile
          title="Flash Deals"
          count="Up to 40% OFF"
          subtitle="Limited quantity titanium releases"
          image="https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80"
          categoryFilter="mobile"
          badge="Hot"
          icon={<Flame className="w-5 h-5" />}
          className="min-h-[220px]"
        />

        {/* Small Tile 5: New Launch */}
        <BentoTile
          title="New Launch"
          count="Latest 5G Phones"
          subtitle="Pixel 8 Pro, OnePlus 12 & Foldables"
          image="https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80"
          categoryFilter="mobile"
          icon={<Sparkles className="w-5 h-5" />}
          className="min-h-[220px]"
        />

        {/* Small Tile 6: Member Only */}
        <BentoTile
          title="Exclusive Deals"
          count="Member Only"
          subtitle="VIP Gold discounts & trade-in specials"
          image="https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&w=800&q=80"
          categoryFilter="gadgets"
          badge="VIP Gold"
          icon={<Crown className="w-5 h-5" />}
          className="min-h-[220px]"
        />
      </div>
    </section>
  );
};
