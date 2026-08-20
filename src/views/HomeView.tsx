import React from 'react';
import { HeroSlider } from '../components/HeroSlider';
import { SpecialDeals } from '../components/SpecialDeals';
import { LatestArrivals } from '../components/LatestArrivals';
import { BentoCategories } from '../components/BentoCategories';
import { TrustStats } from '../components/TrustStats';

export const HomeView: React.FC = () => {
  return (
    <div className="w-full min-h-screen">
      {/* 1. Hero Category Slider */}
      <HeroSlider />

      {/* 2. Special Deals / Promotions (Bento-style Grid) */}
      <SpecialDeals />

      {/* 3. Latest Arrivals (Horizontal Scroll) */}
      <LatestArrivals />

      {/* 4. Featured Categories (3D Cursor Tilt Active Bento Grid) */}
      <BentoCategories />

      {/* 5. Trust & Stats Section */}
      <TrustStats />
    </div>
  );
};
