import React, { useState } from 'react';
import { Mail, ArrowRight, Instagram, Twitter, Linkedin, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Footer: React.FC = () => {
  const { setActiveTab, setSelectedCategoryFilter, showToast } = useCart();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      showToast('Thank you for subscribing to SELL MATE VIP updates!');
      setEmail('');
    }
  };

  const navigateCategory = (cat: string) => {
    setSelectedCategoryFilter(cat);
    setActiveTab('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigatePage = (page: any) => {
    setActiveTab(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F8F7F5] dark:bg-[#1A1A1A] border-t border-[#EFEFEF] dark:border-[#333333] pt-16 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#EFEFEF] dark:border-[#333333]">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#B8956A] to-[#E6C8A0] dark:from-[#D4AF87] dark:to-[#F3E0C8] flex items-center justify-center text-white dark:text-[#1F1F1F] font-black text-lg">
                S
              </div>
              <span className="text-xl font-black text-[#B8956A] dark:text-[#D4AF87] tracking-wider font-sans">
                SELL MATE
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#5A5A5A] dark:text-[#A9A9A9] leading-relaxed max-w-sm">
              SELL MATE is your destination for familiar luxury in mobile tech and digital lifestyle gear. Discover flagship smartphones, high-fidelity audio, GaN fast power, and premium gadgets.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a
                href="#instagram"
                onClick={(e) => e.preventDefault()}
                className="p-2.5 rounded-xl bg-white dark:bg-[#0F0F0F] border border-[#EFEFEF] dark:border-[#333333] text-[#5A5A5A] dark:text-[#A9A9A9] hover:text-[#B8956A] dark:hover:text-[#D4AF87] transition-all cursor-pointer"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#twitter"
                onClick={(e) => e.preventDefault()}
                className="p-2.5 rounded-xl bg-white dark:bg-[#0F0F0F] border border-[#EFEFEF] dark:border-[#333333] text-[#5A5A5A] dark:text-[#A9A9A9] hover:text-[#B8956A] dark:hover:text-[#D4AF87] transition-all cursor-pointer"
                title="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#linkedin"
                onClick={(e) => e.preventDefault()}
                className="p-2.5 rounded-xl bg-white dark:bg-[#0F0F0F] border border-[#EFEFEF] dark:border-[#333333] text-[#5A5A5A] dark:text-[#A9A9A9] hover:text-[#B8956A] dark:hover:text-[#D4AF87] transition-all cursor-pointer"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Product Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1F1F1F] dark:text-[#F5F5F5] mb-4">
              Categories
            </h4>
            <ul className="space-y-2.5 text-xs text-[#5A5A5A] dark:text-[#A9A9A9]">
              <li>
                <button
                  onClick={() => navigateCategory('mobile')}
                  className="hover:text-[#B8956A] dark:hover:text-[#D4AF87] transition-colors cursor-pointer"
                >
                  Flagship Smartphones
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateCategory('headphones')}
                  className="hover:text-[#B8956A] dark:hover:text-[#D4AF87] transition-colors cursor-pointer"
                >
                  Headphones & Audio
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateCategory('accessories')}
                  className="hover:text-[#B8956A] dark:hover:text-[#D4AF87] transition-colors cursor-pointer"
                >
                  Power & Accessories
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateCategory('gadgets')}
                  className="hover:text-[#B8956A] dark:hover:text-[#D4AF87] transition-colors cursor-pointer"
                >
                  Smart Wearables & Drones
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1F1F1F] dark:text-[#F5F5F5] mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-[#5A5A5A] dark:text-[#A9A9A9]">
              <li>
                <button
                  onClick={() => navigatePage('about')}
                  className="hover:text-[#B8956A] dark:hover:text-[#D4AF87] transition-colors cursor-pointer"
                >
                  About SELL MATE
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigatePage('blog')}
                  className="hover:text-[#B8956A] dark:hover:text-[#D4AF87] transition-colors cursor-pointer"
                >
                  Tech Journal & Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigatePage('contact')}
                  className="hover:text-[#B8956A] dark:hover:text-[#D4AF87] transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigatePage('contact')}
                  className="hover:text-[#B8956A] dark:hover:text-[#D4AF87] transition-colors cursor-pointer"
                >
                  Store Locations & FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1F1F1F] dark:text-[#F5F5F5] mb-4">
              VIP Newsletter
            </h4>
            <p className="text-xs text-[#5A5A5A] dark:text-[#A9A9A9] mb-3">
              Subscribe to receive private sale invitations & 10% off your first tech purchase.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Subscribed! Check your inbox for code SELLMATE10</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-[#5A5A5A]" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white dark:bg-[#0F0F0F] text-[#1F1F1F] dark:text-[#F5F5F5] border border-[#EFEFEF] dark:border-[#333333] text-xs focus:outline-none focus:border-[#B8956A] dark:focus:border-[#D4AF87]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#B8956A] hover:bg-[#9E7B52] dark:bg-[#D4AF87] dark:hover:bg-[#E2C09C] text-white dark:text-[#1F1F1F] rounded-xl text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#5A5A5A] dark:text-[#A9A9A9] gap-4">
          <div>
            &copy; {new Date().getFullYear()} SELL MATE Inc. All rights reserved. Premium Tech Retail.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:underline cursor-pointer">Privacy Policy</span>
            <span className="hover:underline cursor-pointer">Terms of Service</span>
            <span className="hover:underline cursor-pointer">Shipping & Returns</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
