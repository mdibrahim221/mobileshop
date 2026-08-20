import React from 'react';
import { Truck, CheckCircle2, MessageSquareHeart, ShieldCheck } from 'lucide-react';

export const TrustStats: React.FC = () => {
  const stats = [
    {
      icon: <Truck className="w-8 h-8 text-[#B8956A] dark:text-[#D4AF87]" />,
      value: 'Free Shipping',
      label: 'Worldwide Delivery',
      description: 'Express tracked courier dispatch on all orders over $99'
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-[#B8956A] dark:text-[#D4AF87]" />,
      value: '50,000+',
      label: 'Happy Customers',
      description: '4.9/5 average satisfaction rating across verified tech buyers'
    },
    {
      icon: <MessageSquareHeart className="w-8 h-8 text-[#B8956A] dark:text-[#D4AF87]" />,
      value: '24/7 Support',
      label: 'Always Here to Help',
      description: 'Instant live chat & dedicated tech warranty specialists'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#EFEFEF] dark:border-[#333333]">
      <div className="bg-[#F8F7F5] dark:bg-[#1A1A1A] border border-[#EFEFEF] dark:border-[#333333] rounded-3xl p-8 sm:p-12 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#EFEFEF] dark:divide-[#333333]">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center ${
                idx !== 0 ? 'pt-8 md:pt-0 md:pl-8' : ''
              }`}
            >
              <div className="p-4 rounded-2xl bg-white dark:bg-[#0F0F0F] border border-[#EFEFEF] dark:border-[#333333] shadow-sm mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-black text-[#1F1F1F] dark:text-[#F5F5F5] tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-[#B8956A] dark:text-[#D4AF87] mt-1">
                {stat.label}
              </div>
              <p className="text-xs text-[#5A5A5A] dark:text-[#A9A9A9] mt-2 max-w-xs">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
