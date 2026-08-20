import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, User, ArrowRight, X, BookOpen, Sparkles } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogs';
import { BlogPost } from '../types';

export const BlogView: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'Tech Trends', 'Buying Guides', 'Product Reviews'];

  const filteredPosts =
    filterCategory === 'All'
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === filterCategory);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#B8956A] dark:text-[#D4AF87] mb-2">
          <BookOpen className="w-4 h-4" />
          <span>SELL MATE Tech Journal</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-[#1F1F1F] dark:text-[#F5F5F5] tracking-tight">
          Insights, Trends & Hardware Reviews
        </h1>
        <p className="text-xs sm:text-sm text-[#5A5A5A] dark:text-[#A9A9A9] mt-3">
          Explore expert analysis on mobile titanium crafts, GaN semiconductor charging, and pro audio head-tracking soundscapes.
        </p>

        {/* Category Pills */}
        <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filterCategory === cat
                  ? 'bg-[#B8956A] text-white dark:bg-[#D4AF87] dark:text-[#1F1F1F] shadow-sm'
                  : 'bg-[#F8F7F5] dark:bg-[#1A1A1A] text-[#1F1F1F] dark:text-[#F5F5F5] hover:bg-[#EFEFEF] dark:hover:bg-[#333333]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="group bg-[#F8F7F5] dark:bg-[#1A1A1A] border border-[#EFEFEF] dark:border-[#333333] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Image */}
              <div className="relative aspect-video w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                />
                <span className="absolute top-3 left-3 px-3 py-1 bg-[#1F1F1F]/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider rounded-full border border-white/20">
                  {post.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-[#5A5A5A] dark:text-[#A9A9A9] mb-3">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#B8956A]" /> {post.readTime}
                  </span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>

                <h3
                  onClick={() => setSelectedPost(post)}
                  className="text-lg font-extrabold text-[#1F1F1F] dark:text-[#F5F5F5] group-hover:text-[#B8956A] dark:hover:text-[#D4AF87] transition-colors cursor-pointer line-clamp-2"
                >
                  {post.title}
                </h3>

                <p className="text-xs text-[#5A5A5A] dark:text-[#A9A9A9] mt-2 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </div>

            {/* Author & Read More */}
            <div className="p-6 pt-0 border-t border-[#EFEFEF] dark:border-[#333333] mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-8 h-8 rounded-full object-cover border border-[#EFEFEF] dark:border-[#333333]"
                />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#1F1F1F] dark:text-[#F5F5F5]">
                    {post.author.name}
                  </span>
                  <span className="text-[10px] text-[#5A5A5A] dark:text-[#A9A9A9]">
                    {post.author.role}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setSelectedPost(post)}
                className="p-2.5 rounded-xl bg-white dark:bg-[#0F0F0F] text-[#B8956A] dark:text-[#D4AF87] group-hover:bg-[#B8956A] group-hover:text-white transition-all cursor-pointer"
                title="Read Post"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Blog Detail Reader Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-white dark:bg-[#1A1A1A] border border-[#EFEFEF] dark:border-[#333333] rounded-3xl p-6 sm:p-10 shadow-2xl z-10 max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-[#F8F7F5] dark:bg-[#0F0F0F] text-[#1F1F1F] dark:text-[#F5F5F5] hover:bg-[#B8956A] hover:text-white transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 text-xs font-bold text-[#B8956A] dark:text-[#D4AF87] uppercase mb-2">
                <span>{selectedPost.category}</span>
                <span>•</span>
                <span>{selectedPost.readTime}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-[#1F1F1F] dark:text-[#F5F5F5] leading-tight">
                {selectedPost.title}
              </h2>

              <div className="flex items-center gap-3 my-6 pt-4 border-t border-[#EFEFEF] dark:border-[#333333]">
                <img
                  src={selectedPost.author.avatar}
                  alt=""
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-xs font-bold text-[#1F1F1F] dark:text-[#F5F5F5]">
                    {selectedPost.author.name}
                  </div>
                  <div className="text-[11px] text-[#5A5A5A] dark:text-[#A9A9A9]">
                    {selectedPost.author.role} • {selectedPost.date}
                  </div>
                </div>
              </div>

              <img
                src={selectedPost.image}
                alt=""
                className="w-full aspect-video object-cover rounded-2xl mb-6 shadow-md"
              />

              <div className="prose dark:prose-invert text-xs sm:text-sm text-[#1F1F1F] dark:text-[#F5F5F5] leading-relaxed whitespace-pre-line space-y-4">
                {selectedPost.content}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
