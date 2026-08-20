import React, { useState, useMemo } from 'react';
import { Filter, SlidersHorizontal, Search, RefreshCw, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { useCart } from '../context/CartContext';

export const ProductsView: React.FC = () => {
  const {
    selectedCategoryFilter,
    setSelectedCategoryFilter,
    searchQuery,
    setSearchQuery
  } = useCart();

  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [maxPrice, setMaxPrice] = useState<number>(1500);
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating' | 'newest'>('featured');

  // Extract all available brands
  const brands = useMemo(() => {
    const set = new Set(PRODUCTS.map((p) => p.brand));
    return ['all', ...Array.from(set)];
  }, []);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category Match
      const categoryMatch =
        selectedCategoryFilter === 'all' || product.category === selectedCategoryFilter;

      // Brand Match
      const brandMatch = selectedBrand === 'all' || product.brand === selectedBrand;

      // Price Match
      const priceMatch = product.price <= maxPrice;

      // Search Query Match
      const query = searchQuery.toLowerCase().trim();
      const searchMatch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query);

      return categoryMatch && brandMatch && priceMatch && searchMatch;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return 0; // default featured
    });
  }, [selectedCategoryFilter, selectedBrand, maxPrice, searchQuery, sortBy]);

  const resetFilters = () => {
    setSelectedCategoryFilter('all');
    setSelectedBrand('all');
    setMaxPrice(1500);
    setSearchQuery('');
    setSortBy('featured');
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      {/* Header Banner */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#B8956A] dark:text-[#D4AF87] mb-2">
          <Sparkles className="w-4 h-4" />
          <span>Curated Tech Catalog</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-[#1F1F1F] dark:text-[#F5F5F5] tracking-tight">
          Explore All Products
        </h1>
        <p className="text-xs sm:text-sm text-[#5A5A5A] dark:text-[#A9A9A9] mt-2">
          Browse our flagship smartphones, studio headphones, fast chargers, and smart wearables with guaranteed warranties.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Sidebar: Filters */}
        <aside className="w-full lg:w-64 shrink-0 space-y-6 bg-[#F8F7F5] dark:bg-[#1A1A1A] p-6 rounded-3xl border border-[#EFEFEF] dark:border-[#333333] h-fit">
          <div className="flex items-center justify-between pb-4 border-b border-[#EFEFEF] dark:border-[#333333]">
            <div className="flex items-center gap-2 font-black text-sm text-[#1F1F1F] dark:text-[#F5F5F5]">
              <SlidersHorizontal className="w-4 h-4 text-[#B8956A] dark:text-[#D4AF87]" />
              <span>Filter Catalog</span>
            </div>
            <button
              onClick={resetFilters}
              className="text-[11px] font-bold text-[#B8956A] dark:text-[#D4AF87] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" /> Reset
            </button>
          </div>

          {/* Search Box */}
          <div>
            <label className="block text-xs font-bold uppercase text-[#1F1F1F] dark:text-[#F5F5F5] mb-2">
              Keyword
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-[#5A5A5A]" />
              <input
                type="text"
                placeholder="Search phone, Sony, charger..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-white dark:bg-[#0F0F0F] border border-[#EFEFEF] dark:border-[#333333] text-xs text-[#1F1F1F] dark:text-[#F5F5F5] focus:outline-none focus:border-[#B8956A]"
              />
            </div>
          </div>

          {/* Categories Filter */}
          <div>
            <label className="block text-xs font-bold uppercase text-[#1F1F1F] dark:text-[#F5F5F5] mb-2">
              Categories
            </label>
            <div className="space-y-1.5 text-xs">
              {[
                { id: 'all', label: 'All Products' },
                { id: 'mobile', label: 'Flagship Smartphones' },
                { id: 'headphones', label: 'Headphones & Audio' },
                { id: 'accessories', label: 'Power & Accessories' },
                { id: 'gadgets', label: 'Smart Gadgets & Drones' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategoryFilter(cat.id)}
                  className={`w-full text-left px-3 py-2 rounded-xl font-medium transition-all cursor-pointer ${
                    selectedCategoryFilter === cat.id
                      ? 'bg-[#B8956A] text-white dark:bg-[#D4AF87] dark:text-[#1F1F1F] font-bold shadow-xs'
                      : 'text-[#5A5A5A] dark:text-[#A9A9A9] hover:bg-white dark:hover:bg-[#0F0F0F]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range Slider */}
          <div>
            <div className="flex justify-between items-center mb-2 text-xs font-bold text-[#1F1F1F] dark:text-[#F5F5F5]">
              <span>Max Price</span>
              <span className="text-[#B8956A] dark:text-[#D4AF87]">${maxPrice}</span>
            </div>
            <input
              type="range"
              min="50"
              max="1500"
              step="50"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-[#B8956A] dark:accent-[#D4AF87] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#5A5A5A] mt-1">
              <span>$50</span>
              <span>$1,500+</span>
            </div>
          </div>

          {/* Brand Selector */}
          <div>
            <label className="block text-xs font-bold uppercase text-[#1F1F1F] dark:text-[#F5F5F5] mb-2">
              Brand
            </label>
            <div className="space-y-1.5 text-xs">
              {brands.map((brand) => (
                <label
                  key={brand}
                  className="flex items-center gap-2 text-[#5A5A5A] dark:text-[#A9A9A9] hover:text-[#1F1F1F] cursor-pointer"
                >
                  <input
                    type="radio"
                    name="brand"
                    checked={selectedBrand === brand}
                    onChange={() => setSelectedBrand(brand)}
                    className="accent-[#B8956A]"
                  />
                  <span className="capitalize">{brand === 'all' ? 'All Brands' : brand}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Right Area: Grid & Controls */}
        <main className="flex-1">
          {/* Top Sort Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#EFEFEF] dark:border-[#333333] mb-6 gap-4">
            <span className="text-xs font-bold text-[#5A5A5A] dark:text-[#A9A9A9]">
              Showing <strong className="text-[#1F1F1F] dark:text-[#F5F5F5]">{filteredProducts.length}</strong> items
            </span>

            <div className="flex items-center gap-2 text-xs">
              <span className="font-bold text-[#1F1F1F] dark:text-[#F5F5F5]">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e: any) => setSortBy(e.target.value)}
                className="px-3 py-2 rounded-xl bg-[#F8F7F5] dark:bg-[#1A1A1A] border border-[#EFEFEF] dark:border-[#333333] text-[#1F1F1F] dark:text-[#F5F5F5] font-semibold focus:outline-none focus:border-[#B8956A]"
              >
                <option value="featured">Featured / Default</option>
                <option value="price-low">Price: Low-to-High</option>
                <option value="price-high">Price: High-to-Low</option>
                <option value="rating">Top Rated</option>
                <option value="newest">Newest Releases</option>
              </select>
            </div>
          </div>

          {/* Product Grid (4 columns desktop, 2 tablet, 1 mobile) */}
          {filteredProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center py-20 bg-[#F8F7F5] dark:bg-[#1A1A1A] rounded-3xl border border-[#EFEFEF] dark:border-[#333333]">
              <Filter className="w-12 h-12 text-[#5A5A5A] mb-3" />
              <h3 className="text-lg font-bold text-[#1F1F1F] dark:text-[#F5F5F5]">
                No matching products found
              </h3>
              <p className="text-xs text-[#5A5A5A] mt-1 max-w-sm">
                Try loosening your search terms or resetting max price filter.
              </p>
              <button
                onClick={resetFilters}
                className="mt-4 px-5 py-2.5 bg-[#B8956A] text-white text-xs font-bold rounded-xl shadow-md cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
