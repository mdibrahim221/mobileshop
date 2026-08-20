import React from 'react';
import { ShieldCheck, Award, Zap, HeartHandshake, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const AboutView: React.FC = () => {
  const { setActiveTab } = useCart();

  const values = [
    {
      icon: <Award className="w-8 h-8 text-[#B8956A] dark:text-[#D4AF87]" />,
      title: 'Familiar Luxury',
      desc: 'We curate premium mobile devices that pair sophisticated industrial aesthetics with approachable everyday luxury.'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#B8956A] dark:text-[#D4AF87]" />,
      title: 'Authenticity Guaranteed',
      desc: '100% original hardware directly sourced from Apple, Samsung, Sony, and certified global tech distributors.'
    },
    {
      icon: <Zap className="w-8 h-8 text-[#B8956A] dark:text-[#D4AF87]" />,
      title: 'Rapid Logistics',
      desc: 'Climate-controlled insured express dispatch ensuring your flagship arrival within 24–48 hours.'
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-[#B8956A] dark:text-[#D4AF87]" />,
      title: 'Lifetime Support',
      desc: 'Dedicated technical warranty concierges ready to assist with device transfers and accessory pairing.'
    }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20 min-h-screen">
      {/* Hero Section */}
      <div className="relative rounded-3xl overflow-hidden bg-[#111111] text-white p-8 sm:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="relative z-10 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B8956A]/20 text-[#D4AF87] text-xs font-bold uppercase tracking-wider mb-4 border border-[#B8956A]/30">
            About SELL MATE
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Redefining Premium Mobile Retail with Familiar Luxury
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 mt-4 leading-relaxed">
            Founded in 2024, SELL MATE was established to bridge the gap between sterile tech marketplaces and high-end luxury boutiques. We believe acquiring your daily flagship smartphone or studio audio gear should feel effortless, elevated, and deeply rewarding.
          </p>
        </div>

        <div className="relative z-10 w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=80"
            alt="SELL MATE Flagship Display"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Core Values Section */}
      <div>
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-black text-[#1F1F1F] dark:text-[#F5F5F5]">
            Why Choose SELL MATE
          </h2>
          <p className="text-xs sm:text-sm text-[#5A5A5A] dark:text-[#A9A9A9] mt-2">
            Built on four pillars of product integrity, rapid dispatch, and dedicated customer care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              className="bg-[#F8F7F5] dark:bg-[#1A1A1A] p-6 rounded-3xl border border-[#EFEFEF] dark:border-[#333333] hover:border-[#B8956A] transition-all"
            >
              <div className="p-3 rounded-2xl bg-white dark:bg-[#0F0F0F] w-fit mb-4 border border-[#EFEFEF] dark:border-[#333333]">
                {v.icon}
              </div>
              <h3 className="text-base font-extrabold text-[#1F1F1F] dark:text-[#F5F5F5]">
                {v.title}
              </h3>
              <p className="text-xs text-[#5A5A5A] dark:text-[#A9A9A9] mt-2 leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Founders & Story */}
      <div className="bg-[#F8F7F5] dark:bg-[#1A1A1A] rounded-3xl p-8 sm:p-12 border border-[#EFEFEF] dark:border-[#333333] flex flex-col md:flex-row items-center gap-10">
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
          alt="Founder"
          className="w-48 h-48 rounded-full object-cover shadow-xl border-4 border-[#B8956A]"
        />

        <div className="flex-1 space-y-4 text-center md:text-left">
          <h3 className="text-2xl font-black text-[#1F1F1F] dark:text-[#F5F5F5]">
            "We created SELL MATE for those who value craftsmanship over noise."
          </h3>
          <p className="text-xs sm:text-sm text-[#5A5A5A] dark:text-[#A9A9A9] leading-relaxed">
            "When you hold a titanium flagship or listen to spatial audio headphones, you are interacting with peak human engineering. Our retail experience is tailored to match that exact standard."
          </p>
          <div className="font-bold text-[#1F1F1F] dark:text-[#F5F5F5] text-sm">
            Elena Vance <span className="text-[#B8956A] dark:text-[#D4AF87] font-normal text-xs">— Co-Founder & Head of Retail</span>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="bg-gradient-to-r from-[#B8956A] to-[#E6C8A0] dark:from-[#D4AF87] dark:to-[#B8956A] rounded-3xl p-10 text-center text-white dark:text-[#1F1F1F] shadow-xl">
        <h2 className="text-2xl sm:text-4xl font-black">Ready to Upgrade Your Mobile Gear?</h2>
        <p className="text-xs sm:text-sm max-w-xl mx-auto mt-2 opacity-90">
          Discover our latest collection of flagship smartphones, GaN fast chargers, and spatial headphones.
        </p>
        <button
          onClick={() => {
            setActiveTab('products');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="mt-6 px-8 py-3.5 bg-[#1F1F1F] dark:bg-[#F5F5F5] text-white dark:text-[#1F1F1F] rounded-xl text-xs font-black shadow-lg hover:scale-105 transition-all inline-flex items-center gap-2 cursor-pointer"
        >
          <span>Explore Products Catalog</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
