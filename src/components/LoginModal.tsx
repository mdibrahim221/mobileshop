import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, User, Lock, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const LoginModal: React.FC = () => {
  const { isLoginModalOpen, setIsLoginModalOpen, showToast } = useCart();
  const [tab, setTab] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  if (!isLoginModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tab === 'signin') {
      showToast(`Welcome back to SELL MATE! Logged in as ${email}`);
    } else {
      showToast(`Account created for ${name}! Welcome to SELL MATE VIP.`);
    }
    setIsLoginModalOpen(false);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsLoginModalOpen(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-md bg-white dark:bg-[#1A1A1A] border border-[#EFEFEF] dark:border-[#333333] rounded-3xl p-6 sm:p-8 shadow-2xl z-10"
        >
          {/* Close Button */}
          <button
            onClick={() => setIsLoginModalOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-[#F8F7F5] dark:bg-[#0F0F0F] text-[#5A5A5A] hover:text-[#1F1F1F] transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Branding */}
          <div className="text-center mb-6">
            <div className="w-10 h-10 mx-auto mb-2 rounded-2xl bg-gradient-to-tr from-[#B8956A] to-[#E6C8A0] dark:from-[#D4AF87] dark:to-[#F3E0C8] flex items-center justify-center text-white dark:text-[#1F1F1F] font-black text-xl shadow-md">
              S
            </div>
            <h3 className="text-2xl font-black text-[#1F1F1F] dark:text-[#F5F5F5]">
              {tab === 'signin' ? 'Welcome to SELL MATE' : 'Join VIP Tech Club'}
            </h3>
            <p className="text-xs text-[#5A5A5A] dark:text-[#A9A9A9] mt-1">
              Familiar luxury mobile tech, early sale access & trade-in rewards.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex bg-[#F8F7F5] dark:bg-[#0F0F0F] p-1 rounded-xl mb-6 border border-[#EFEFEF] dark:border-[#333333]">
            <button
              onClick={() => setTab('signin')}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                tab === 'signin'
                  ? 'bg-white dark:bg-[#1A1A1A] text-[#B8956A] dark:text-[#D4AF87] shadow-xs'
                  : 'text-[#5A5A5A] dark:text-[#A9A9A9]'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setTab('signup')}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                tab === 'signup'
                  ? 'bg-white dark:bg-[#1A1A1A] text-[#B8956A] dark:text-[#D4AF87] shadow-xs'
                  : 'text-[#5A5A5A] dark:text-[#A9A9A9]'
              }`}
            >
              Create Account
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            {tab === 'signup' && (
              <div>
                <label className="block font-bold text-[#1F1F1F] dark:text-[#F5F5F5] mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-[#5A5A5A]" />
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-9 p-3 rounded-xl bg-[#F8F7F5] dark:bg-[#0F0F0F] border border-[#EFEFEF] dark:border-[#333333] text-[#1F1F1F] dark:text-[#F5F5F5]"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block font-bold text-[#1F1F1F] dark:text-[#F5F5F5] mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-4 h-4 text-[#5A5A5A]" />
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 p-3 rounded-xl bg-[#F8F7F5] dark:bg-[#0F0F0F] border border-[#EFEFEF] dark:border-[#333333] text-[#1F1F1F] dark:text-[#F5F5F5]"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-[#1F1F1F] dark:text-[#F5F5F5] mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-4 h-4 text-[#5A5A5A]" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-9 p-3 rounded-xl bg-[#F8F7F5] dark:bg-[#0F0F0F] border border-[#EFEFEF] dark:border-[#333333] text-[#1F1F1F] dark:text-[#F5F5F5]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#B8956A] hover:bg-[#9E7B52] dark:bg-[#D4AF87] dark:hover:bg-[#E2C09C] text-white dark:text-[#1F1F1F] font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              <span>{tab === 'signin' ? 'Sign In to Account' : 'Register Account'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-6 text-center text-[11px] text-[#5A5A5A] dark:text-[#A9A9A9] flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B8956A]" /> Encrypted SSL Secure Authentication
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
