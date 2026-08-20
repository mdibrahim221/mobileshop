import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, ChevronDown, CheckCircle2, MessageSquare } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ContactView: React.FC = () => {
  const { showToast } = useCart();
  const [form, setForm] = useState({ name: '', email: '', subject: 'General Query', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('Your message was received! Our concierge will reply within 2 hours.');
  };

  const faqs = [
    {
      q: 'What is the standard shipping timeframe for flagship orders?',
      a: 'All orders placed before 3:00 PM EST are dispatched same-day via express climate-controlled courier. Delivery typically takes 24–48 hours nationwide.'
    },
    {
      q: 'Do smartphones come with official manufacturer warranty?',
      a: 'Yes! Every device sold by SELL MATE includes the full official 1-Year or 2-Year manufacturer warranty plus our 30-day zero-hassle replacement guarantee.'
    },
    {
      q: 'Can I trade in my old smartphone or device for store credit?',
      a: 'Yes, we offer instant trade-in evaluations. Bring your device to our flagship store or use our online mail-in trade kit to get instant discount codes.'
    },
    {
      q: 'How do I apply promotional coupon codes like SELLMATE10?',
      a: 'Simply click the shopping bag icon in the header, type SELLMATE10 into the coupon field, and click Apply to instantly receive your 10% discount.'
    }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 min-h-screen">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#B8956A] dark:text-[#D4AF87] mb-2">
          <MessageSquare className="w-4 h-4" />
          <span>Get in Touch</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-[#1F1F1F] dark:text-[#F5F5F5] tracking-tight">
          We Are Here For You
        </h1>
        <p className="text-xs sm:text-sm text-[#5A5A5A] dark:text-[#A9A9A9] mt-2">
          Have a query about phone specifications, order tracking, or trade-ins? Reach out to our tech concierge.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-[#F8F7F5] dark:bg-[#1A1A1A] p-8 rounded-3xl border border-[#EFEFEF] dark:border-[#333333] shadow-sm">
          <h2 className="text-xl font-extrabold text-[#1F1F1F] dark:text-[#F5F5F5] mb-6">
            Send Us a Direct Message
          </h2>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 mx-auto" />
              <h3 className="text-lg font-bold">Message Sent Successfully!</h3>
              <p className="text-xs">
                Thank you for contacting SELL MATE. A senior tech specialist will review your inquiry and respond shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-4 py-2 bg-[#B8956A] text-white text-xs font-bold rounded-xl cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-[#1F1F1F] dark:text-[#F5F5F5] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Alex Mercer"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full p-3 rounded-xl bg-white dark:bg-[#0F0F0F] border border-[#EFEFEF] dark:border-[#333333] text-[#1F1F1F] dark:text-[#F5F5F5] focus:outline-none focus:border-[#B8956A]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#1F1F1F] dark:text-[#F5F5F5] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex.mercer@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full p-3 rounded-xl bg-white dark:bg-[#0F0F0F] border border-[#EFEFEF] dark:border-[#333333] text-[#1F1F1F] dark:text-[#F5F5F5] focus:outline-none focus:border-[#B8956A]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#1F1F1F] dark:text-[#F5F5F5] mb-1">
                  Topic / Subject
                </label>
                <select
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full p-3 rounded-xl bg-white dark:bg-[#0F0F0F] border border-[#EFEFEF] dark:border-[#333333] text-[#1F1F1F] dark:text-[#F5F5F5] font-semibold"
                >
                  <option value="General Query">General Inquiry</option>
                  <option value="Order Tracking">Order & Dispatch Status</option>
                  <option value="Trade-in">Device Trade-in Assessment</option>
                  <option value="Warranty Claim">Warranty & Support Claim</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-[#1F1F1F] dark:text-[#F5F5F5] mb-1">
                  Your Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your query in detail..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full p-3 rounded-xl bg-white dark:bg-[#0F0F0F] border border-[#EFEFEF] dark:border-[#333333] text-[#1F1F1F] dark:text-[#F5F5F5] focus:outline-none focus:border-[#B8956A]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#B8956A] hover:bg-[#9E7B52] dark:bg-[#D4AF87] dark:hover:bg-[#E2C09C] text-white dark:text-[#1F1F1F] font-extrabold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        {/* Contact Info & Interactive Map Embed */}
        <div className="space-y-6">
          <div className="bg-[#F8F7F5] dark:bg-[#1A1A1A] p-8 rounded-3xl border border-[#EFEFEF] dark:border-[#333333] space-y-5">
            <h2 className="text-xl font-extrabold text-[#1F1F1F] dark:text-[#F5F5F5]">
              SELL MATE Flagship Store
            </h2>

            <div className="space-y-4 text-xs text-[#5A5A5A] dark:text-[#A9A9A9]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#B8956A] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#1F1F1F] dark:text-[#F5F5F5]">Address:</strong>
                  742 Evergreen Plaza, Market Street, Suite 400, San Francisco, CA 94103
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#B8956A] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#1F1F1F] dark:text-[#F5F5F5]">Support Line:</strong>
                  +1 (800) 555-MATE / +1 (415) 890-7762
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#B8956A] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#1F1F1F] dark:text-[#F5F5F5]">Email Support:</strong>
                  concierge@sellmate.com / support@sellmate.com
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#B8956A] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#1F1F1F] dark:text-[#F5F5F5]">Hours:</strong>
                  Mon – Sat: 9:00 AM – 9:00 PM EST | Sun: 10:00 AM – 6:00 PM EST
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Store Map Container */}
          <div className="relative rounded-3xl overflow-hidden border border-[#EFEFEF] dark:border-[#333333] shadow-md aspect-video bg-[#1F1F1F]">
            <iframe
              title="SELL MATE Store Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086488737397!2d-122.40356782343943!3d37.78572137198305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858085fa1b6c7b%3A0xa1ef0351741a4a0a!2sMarket%20St%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              className="w-full h-full border-0 filter grayscale contrast-125 dark:invert opacity-80"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions Accordion */}
      <div className="pt-8 border-t border-[#EFEFEF] dark:border-[#333333]">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="text-2xl font-black text-[#1F1F1F] dark:text-[#F5F5F5]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-[#F8F7F5] dark:bg-[#1A1A1A] border border-[#EFEFEF] dark:border-[#333333] rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#1F1F1F] dark:text-[#F5F5F5] cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#B8956A] transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-[#5A5A5A] dark:text-[#A9A9A9] leading-relaxed border-t border-[#EFEFEF] dark:border-[#333333] pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
