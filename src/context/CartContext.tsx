import React, { createContext, useContext, useState } from 'react';
import { ActiveTab, CartItem, Product } from '../types';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, selectedColor?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  couponCode: string;
  discountPercentage: number;
  applyCoupon: (code: string) => boolean;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategoryFilter: string;
  setSelectedCategoryFilter: (category: string) => void;
  toastMessage: string | null;
  showToast: (message: string) => void;
  isLoginModalOpen: boolean;
  setIsLoginModalOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [couponCode, setCouponCode] = useState<string>('');
  const [discountPercentage, setDiscountPercentage] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const addToCart = (product: Product, quantity = 1, selectedColor?: string) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
          selectedColor: selectedColor || updated[existingIndex].selectedColor
        };
        return updated;
      }
      return [
        ...prevCart,
        {
          product,
          quantity,
          selectedColor: selectedColor || (product.colors && product.colors[0]?.name)
        }
      ];
    });
    showToast(`Added "${product.name}" to your cart`);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Item removed from cart');
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const applyCoupon = (code: string): boolean => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'SELLMATE10' || cleanCode === 'WELCOME10') {
      setCouponCode(cleanCode);
      setDiscountPercentage(10);
      showToast('10% Discount Applied!');
      return true;
    } else if (cleanCode === 'GOLD20' || cleanCode === 'PROMO20') {
      setCouponCode(cleanCode);
      setDiscountPercentage(20);
      showToast('20% VIP Gold Discount Applied!');
      return true;
    } else {
      showToast('Invalid Coupon Code (Try: SELLMATE10)');
      return false;
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        quickViewProduct,
        setQuickViewProduct,
        activeTab,
        setActiveTab,
        couponCode,
        discountPercentage,
        applyCoupon,
        searchQuery,
        setSearchQuery,
        selectedCategoryFilter,
        setSelectedCategoryFilter,
        toastMessage,
        showToast,
        isLoginModalOpen,
        setIsLoginModalOpen
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
