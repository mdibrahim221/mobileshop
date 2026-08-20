import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, ShoppingBag, ArrowRight, Tag, CheckCircle2, ShieldCheck, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    isCartOpen,
    setIsCartOpen,
    couponCode,
    discountPercentage,
    applyCoupon,
    showToast
  } = useCart();

  const [inputCoupon, setInputCoupon] = useState('');
  const [isCheckoutStep, setIsCheckoutStep] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState('');

  // Form State
  const [customerInfo, setCustomerInfo] = useState({
    name: 'Alex Mercer',
    email: 'alex.mercer@example.com',
    address: '742 Evergreen Terrace, San Francisco, CA',
    card: '•••• •••• •••• 4242'
  });

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discountAmount = (subtotal * discountPercentage) / 100;
  const shipping = subtotal > 100 || subtotal === 0 ? 0 : 15;
  const grandTotal = Math.max(0, subtotal - discountAmount + shipping);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputCoupon) {
      applyCoupon(inputCoupon);
      setInputCoupon('');
    }
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = 'SM-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(generatedId);
    setOrderComplete(true);
    clearCart();
    showToast(`Order #${generatedId} confirmed!`);
  };

  const handleClose = () => {
    setIsCartOpen(false);
    setIsCheckoutStep(false);
    setOrderComplete(false);
  };

  if (!isCartOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          {/* Drawer Container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="w-screen max-w-md bg-white dark:bg-[#1A1A1A] border-l border-[#EFEFEF] dark:border-[#333333] shadow-2xl flex flex-col justify-between"
          >
            {/* Header */}
            <div className="p-6 border-b border-[#EFEFEF] dark:border-[#333333] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#B8956A] dark:text-[#D4AF87]" />
                <h3 className="text-lg font-black text-[#1F1F1F] dark:text-[#F5F5F5]">
                  {isCheckoutStep ? 'Checkout Order' : 'Your Shopping Bag'}
                </h3>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#B8956A]/20 text-[#B8956A] dark:text-[#D4AF87]">
                  {cart.length} items
                </span>
              </div>

              <button
                onClick={handleClose}
                className="p-2 rounded-xl text-[#5A5A5A] hover:bg-[#F8F7F5] dark:hover:bg-[#0F0F0F] hover:text-[#1F1F1F] transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {orderComplete ? (
                /* Order Confirmation Screen */
                <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/30">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-black text-[#1F1F1F] dark:text-[#F5F5F5]">
                    Order Confirmed!
                  </h4>
                  <p className="text-xs text-[#5A5A5A] dark:text-[#A9A9A9]">
                    Thank you for choosing SELL MATE. Your order ID is{' '}
                    <strong className="text-[#B8956A] dark:text-[#D4AF87]">{orderId}</strong>.
                    We have sent the dispatch tracking details to {customerInfo.email}.
                  </p>
                  <button
                    onClick={handleClose}
                    className="mt-4 px-6 py-3 bg-[#B8956A] hover:bg-[#9E7B52] text-white text-xs font-bold rounded-xl shadow-md cursor-pointer"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : isCheckoutStep ? (
                /* Checkout Form */
                <form onSubmit={handlePlaceOrder} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-bold text-[#1F1F1F] dark:text-[#F5F5F5] mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                      className="w-full p-3 rounded-xl bg-[#F8F7F5] dark:bg-[#0F0F0F] border border-[#EFEFEF] dark:border-[#333333] text-[#1F1F1F] dark:text-[#F5F5F5]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#1F1F1F] dark:text-[#F5F5F5] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                      className="w-full p-3 rounded-xl bg-[#F8F7F5] dark:bg-[#0F0F0F] border border-[#EFEFEF] dark:border-[#333333] text-[#1F1F1F] dark:text-[#F5F5F5]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#1F1F1F] dark:text-[#F5F5F5] mb-1">
                      Shipping Address
                    </label>
                    <input
                      type="text"
                      required
                      value={customerInfo.address}
                      onChange={(e) =>
                        setCustomerInfo({ ...customerInfo, address: e.target.value })
                      }
                      className="w-full p-3 rounded-xl bg-[#F8F7F5] dark:bg-[#0F0F0F] border border-[#EFEFEF] dark:border-[#333333] text-[#1F1F1F] dark:text-[#F5F5F5]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#1F1F1F] dark:text-[#F5F5F5] mb-1">
                      Payment Card (Demo)
                    </label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-3.5 w-4 h-4 text-[#5A5A5A]" />
                      <input
                        type="text"
                        required
                        value={customerInfo.card}
                        onChange={(e) =>
                          setCustomerInfo({ ...customerInfo, card: e.target.value })
                        }
                        className="w-full pl-9 p-3 rounded-xl bg-[#F8F7F5] dark:bg-[#0F0F0F] border border-[#EFEFEF] dark:border-[#333333] text-[#1F1F1F] dark:text-[#F5F5F5]"
                      />
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#B8956A]/10 border border-[#B8956A]/30 text-[#1F1F1F] dark:text-[#F5F5F5]">
                    <div className="flex justify-between font-bold">
                      <span>Total Charge:</span>
                      <span className="text-[#B8956A] dark:text-[#D4AF87]">${grandTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsCheckoutStep(false)}
                      className="px-4 py-3 rounded-xl border border-[#EFEFEF] dark:border-[#333333] text-xs font-bold text-[#5A5A5A]"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 bg-[#B8956A] hover:bg-[#9E7B52] dark:bg-[#D4AF87] dark:hover:bg-[#E2C09C] text-white dark:text-[#1F1F1F] font-black rounded-xl shadow-lg cursor-pointer"
                    >
                      Complete Order
                    </button>
                  </div>
                </form>
              ) : cart.length === 0 ? (
                /* Empty Cart State */
                <div className="flex flex-col items-center justify-center text-center py-16 text-[#5A5A5A]">
                  <ShoppingBag className="w-16 h-16 stroke-1 text-[#5A5A5A]/50 mb-3" />
                  <p className="text-sm font-semibold">Your shopping bag is empty.</p>
                  <p className="text-xs text-[#5A5A5A] mt-1">
                    Explore our flagship smartphones, AirPods, and GaN accessories!
                  </p>
                </div>
              ) : (
                /* Cart Items List */
                <div className="space-y-4">
                  {/* Free Shipping Progress */}
                  <div className="p-3 rounded-xl bg-[#F8F7F5] dark:bg-[#0F0F0F] border border-[#EFEFEF] dark:border-[#333333]">
                    <div className="flex justify-between text-[11px] font-bold text-[#1F1F1F] dark:text-[#F5F5F5] mb-1">
                      <span>Free Shipping Goal</span>
                      <span>
                        {subtotal >= 100
                          ? 'Unlocked!'
                          : `$${(100 - subtotal).toFixed(2)} away`}
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-[#EFEFEF] dark:bg-[#333333] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#B8956A] dark:bg-[#D4AF87] transition-all duration-300"
                        style={{ width: `${Math.min(100, (subtotal / 100) * 100)}%` }}
                      />
                    </div>
                  </div>

                  {cart.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex items-center gap-3 p-3 rounded-2xl bg-[#F8F7F5] dark:bg-[#0F0F0F] border border-[#EFEFEF] dark:border-[#333333]"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-contain p-1 rounded-xl bg-white dark:bg-[#1A1A1A]"
                      />

                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-[#1F1F1F] dark:text-[#F5F5F5] truncate">
                          {item.product.name}
                        </h4>
                        <span className="text-[10px] text-[#5A5A5A] dark:text-[#A9A9A9]">
                          Color: {item.selectedColor || 'Standard'}
                        </span>
                        <div className="text-xs font-black text-[#B8956A] dark:text-[#D4AF87] mt-0.5">
                          ${item.product.price}
                        </div>
                      </div>

                      {/* Quantity Selector */}
                      <div className="flex items-center border border-[#EFEFEF] dark:border-[#333333] rounded-lg overflow-hidden bg-white dark:bg-[#1A1A1A]">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-1 text-xs font-bold hover:bg-[#B8956A] hover:text-white"
                        >
                          -
                        </button>
                        <span className="px-2.5 text-xs font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-1 text-xs font-bold hover:bg-[#B8956A] hover:text-white"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="p-1.5 text-red-500 hover:text-red-700 transition-colors"
                        title="Remove"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}

                  {/* Coupon Code Input */}
                  <form onSubmit={handleApplyCoupon} className="flex gap-2 pt-2">
                    <div className="relative flex-1">
                      <Tag className="absolute left-3 top-2.5 w-3.5 h-3.5 text-[#5A5A5A]" />
                      <input
                        type="text"
                        placeholder="Coupon Code (e.g. SELLMATE10)"
                        value={inputCoupon}
                        onChange={(e) => setInputCoupon(e.target.value)}
                        className="w-full pl-8 pr-3 py-2 rounded-xl bg-[#F8F7F5] dark:bg-[#0F0F0F] border border-[#EFEFEF] dark:border-[#333333] text-xs text-[#1F1F1F] dark:text-[#F5F5F5]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-3 py-2 bg-[#1F1F1F] dark:bg-[#F5F5F5] text-white dark:text-[#1F1F1F] rounded-xl text-xs font-bold cursor-pointer"
                    >
                      Apply
                    </button>
                  </form>
                  {couponCode && (
                    <div className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Coupon "{couponCode}" applied ({discountPercentage}% OFF)
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Footer Summary & Checkout CTA */}
            {!orderComplete && cart.length > 0 && !isCheckoutStep && (
              <div className="p-6 border-t border-[#EFEFEF] dark:border-[#333333] bg-[#F8F7F5] dark:bg-[#0F0F0F] space-y-2">
                <div className="flex justify-between text-xs text-[#5A5A5A] dark:text-[#A9A9A9]">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                {discountPercentage > 0 && (
                  <div className="flex justify-between text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                    <span>Discount ({discountPercentage}%)</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-xs text-[#5A5A5A] dark:text-[#A9A9A9]">
                  <span>Estimated Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                </div>

                <div className="pt-2 border-t border-[#EFEFEF] dark:border-[#333333] flex justify-between text-base font-black text-[#1F1F1F] dark:text-[#F5F5F5]">
                  <span>Grand Total</span>
                  <span className="text-[#B8956A] dark:text-[#D4AF87]">${grandTotal.toFixed(2)}</span>
                </div>

                <button
                  onClick={() => setIsCheckoutStep(true)}
                  className="w-full mt-4 py-3.5 bg-[#B8956A] hover:bg-[#9E7B52] dark:bg-[#D4AF87] dark:hover:bg-[#E2C09C] text-white dark:text-[#1F1F1F] rounded-xl text-sm font-extrabold shadow-lg hover:scale-102 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
