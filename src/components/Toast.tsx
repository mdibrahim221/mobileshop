import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Toast: React.FC = () => {
  const { toastMessage } = useCart();

  return (
    <AnimatePresence>
      {toastMessage && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-2xl backdrop-blur-md bg-[#1F1F1F]/90 dark:bg-[#F5F5F5]/90 text-white dark:text-[#1F1F1F] border border-[#B8956A]/30"
        >
          <div className="w-8 h-8 rounded-full bg-[#B8956A]/20 flex items-center justify-center text-[#B8956A] dark:text-[#B8956A] shrink-0">
            <CheckCircle2 className="w-5 h-5 text-[#B8956A]" />
          </div>
          <span className="text-sm font-medium tracking-wide">{toastMessage}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
