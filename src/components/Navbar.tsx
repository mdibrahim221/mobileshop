import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Moon, Sun, ShoppingBag, User, X, ChevronRight, Menu } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import { ActiveTab } from '../types';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const {
    cart,
    setIsCartOpen,
    activeTab,
    setActiveTab,
    searchQuery,
    setSearchQuery,
    selectedCategoryFilter,
    setSelectedCategoryFilter,
    setIsLoginModalOpen
  } = useCart();

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks: { id: ActiveTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'blog', label: 'Blog' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const categoryPills = [
    { id: 'all', label: 'All Products' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'accessories', label: 'Accessories' },
    { id: 'gadgets', label: 'Gadgets' },
    { id: 'headphones', label: 'Headphones' }
  ];

  const handleSearchCategorySelect = (catId: string) => {
    setSelectedCategoryFilter(catId);
    if (activeTab !== 'products') {
      setActiveTab('products');
    }
  };

  const handleNavClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 dark:bg-[#0F0F0F]/90 backdrop-blur-md border-b border-[#EFEFEF] dark:border-[#333333] shadow-xs transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left: Brand Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left group flex items-center gap-2 cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#B8956A] to-[#E6C8A0] dark:from-[#D4AF87] dark:to-[#F3E0C8] flex items-center justify-center text-white dark:text-[#1F1F1F] font-black text-xl shadow-md group-hover:scale-105 transition-transform">
                S
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-wider text-[#B8956A] dark:text-[#D4AF87] font-sans">
                  SELL MATE
                </span>
                <span className="text-[9px] tracking-widest uppercase text-[#5A5A5A] dark:text-[#A9A9A9] -mt-1 font-medium">
                  Premium Tech Retail
                </span>
              </div>
            </button>
          </div>

          {/* Center: Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="relative py-2 text-sm font-semibold tracking-wide text-[#1F1F1F] dark:text-[#F5F5F5] hover:text-[#B8956A] dark:hover:text-[#D4AF87] transition-colors cursor-pointer"
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B8956A] dark:bg-[#D4AF87] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Controls: Search | Theme | Login | Cart */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Icon Toggle */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`p-2.5 rounded-xl transition-all cursor-pointer ${
                isSearchOpen
                  ? 'bg-[#B8956A] text-white dark:bg-[#D4AF87] dark:text-[#1F1F1F]'
                  : 'text-[#1F1F1F] dark:text-[#F5F5F5] hover:bg-[#F8F7F5] dark:hover:bg-[#1A1A1A]'
              }`}
              title="Toggle Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl text-[#1F1F1F] dark:text-[#F5F5F5] hover:bg-[#F8F7F5] dark:hover:bg-[#1A1A1A] transition-all cursor-pointer"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-300" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>

            {/* Login Account Trigger */}
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-[#1F1F1F] dark:text-[#F5F5F5] hover:bg-[#F8F7F5] dark:hover:bg-[#1A1A1A] border border-[#EFEFEF] dark:border-[#333333] transition-all cursor-pointer"
            >
              <User className="w-4 h-4 text-[#B8956A] dark:text-[#D4AF87]" />
              <span>Login</span>
            </button>

            {/* Cart Icon Button with Badge */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-xl bg-[#B8956A] dark:bg-[#D4AF87] text-white dark:text-[#1F1F1F] hover:bg-[#9E7B52] dark:hover:bg-[#E2C09C] transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer"
              title="View Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalCartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#1F1F1F] dark:bg-[#F5F5F5] text-white dark:text-[#1F1F1F] text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white dark:border-[#0F0F0F]"
                >
                  {totalCartCount}
                </motion.span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl text-[#1F1F1F] dark:text-[#F5F5F5] hover:bg-[#F8F7F5] dark:hover:bg-[#1A1A1A] transition-all cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Slide-Down Search Bar (Secondary Header Row) */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="overflow-hidden bg-[#F8F7F5] dark:bg-[#1A1A1A] border-t border-[#EFEFEF] dark:border-[#333333]"
          >
            <div className="max-w-4xl mx-auto px-4 py-4 flex flex-col gap-3">
              <div className="relative flex items-center">
                <Search className="absolute left-4 w-5 h-5 text-[#B8956A] dark:text-[#D4AF87]" />
                <input
                  type="text"
                  placeholder="Search flagship phones, AirPods, drones, GaN chargers..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (activeTab !== 'products') setActiveTab('products');
                  }}
                  className="w-full pl-12 pr-10 py-3 rounded-xl bg-white dark:bg-[#0F0F0F] text-[#1F1F1F] dark:text-[#F5F5F5] border border-[#EFEFEF] dark:border-[#333333] focus:outline-none focus:border-[#B8956A] dark:focus:border-[#D4AF87] text-sm shadow-xs"
                  autoFocus
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 p-1 text-[#5A5A5A] hover:text-[#1F1F1F] dark:hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Quick Category Filter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
                <span className="text-xs font-semibold text-[#5A5A5A] dark:text-[#A9A9A9] shrink-0">
                  Quick Filter:
                </span>
                {categoryPills.map((pill) => (
                  <button
                    key={pill.id}
                    onClick={() => handleSearchCategorySelect(pill.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      selectedCategoryFilter === pill.id
                        ? 'bg-[#B8956A] text-white dark:bg-[#D4AF87] dark:text-[#1F1F1F] shadow-xs'
                        : 'bg-white dark:bg-[#0F0F0F] text-[#1F1F1F] dark:text-[#F5F5F5] hover:bg-[#EFEFEF] dark:hover:bg-[#333333] border border-[#EFEFEF] dark:border-[#333333]'
                    }`}
                  >
                    {pill.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-[#0F0F0F] border-t border-[#EFEFEF] dark:border-[#333333] px-4 py-4"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-left font-semibold text-sm transition-all ${
                    activeTab === link.id
                      ? 'bg-[#F8F7F5] dark:bg-[#1A1A1A] text-[#B8956A] dark:text-[#D4AF87]'
                      : 'text-[#1F1F1F] dark:text-[#F5F5F5]'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#5A5A5A]" />
                </button>
              ))}

              <div className="pt-2 border-t border-[#EFEFEF] dark:border-[#333333] mt-2">
                <button
                  onClick={() => {
                    setIsLoginModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#B8956A] dark:bg-[#D4AF87] text-white dark:text-[#1F1F1F] font-semibold text-sm shadow-md"
                >
                  <User className="w-4 h-4" />
                  <span>Login / Register Account</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
