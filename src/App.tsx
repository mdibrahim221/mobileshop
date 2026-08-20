import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider, useCart } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { QuickViewModal } from './components/QuickViewModal';
import { CartDrawer } from './components/CartDrawer';
import { LoginModal } from './components/LoginModal';

import { HomeView } from './views/HomeView';
import { ProductsView } from './views/ProductsView';
import { BlogView } from './views/BlogView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';

const MainContent: React.FC = () => {
  const { activeTab } = useCart();

  const renderView = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView />;
      case 'products':
        return <ProductsView />;
      case 'blog':
        return <BlogView />;
      case 'about':
        return <AboutView />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0F0F0F] text-[#1F1F1F] dark:text-[#F5F5F5] transition-colors duration-300 selection:bg-[#B8956A] selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Primary Page View */}
      <main className="flex-grow">{renderView()}</main>

      {/* Footer */}
      <Footer />

      {/* Global Modals & Drawers */}
      <QuickViewModal />
      <CartDrawer />
      <LoginModal />
      <Toast />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <MainContent />
      </CartProvider>
    </ThemeProvider>
  );
}
