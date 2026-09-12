import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Sparkles, Tag, PlusCircle, X, CheckCircle } from 'lucide-react';
import { POSTS } from '../../data/mockData';
import { Post } from '../../types';
import { useTheme } from '../../context/ThemeContext';

export const BlogSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [activeFilter, setActiveFilter] = useState<'All' | 'Event' | 'Promo' | 'Announcement' | 'Brew Guide'>('All');
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [showPublisherModal, setShowPublisherModal] = useState(false);
  const [publishSuccess, setPublishSuccess] = useState(false);

  // New post draft form state for the owner placeholder
  const [draftTitle, setDraftTitle] = useState('');
  const [draftCategory, setDraftCategory] = useState<'Event' | 'Promo' | 'Announcement' | 'Brew Guide'>('Announcement');
  const [draftExcerpt, setDraftExcerpt] = useState('');

  const filterTabs = ['All', 'Event', 'Promo', 'Announcement', 'Brew Guide'] as const;

  const filteredPosts = activeFilter === 'All'
    ? POSTS
    : POSTS.filter((p) => p.category === activeFilter);

  const handleSimulatePublish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!draftTitle.trim()) return;
    setPublishSuccess(true);
    setTimeout(() => {
      setPublishSuccess(false);
      setShowPublisherModal(false);
      setDraftTitle('');
      setDraftExcerpt('');
    }, 1800);
  };

  return (
    <section id="announcements" className="relative py-28 sm:py-36 px-5 sm:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span
              className={`text-xs font-mono uppercase tracking-[0.25em] font-bold mb-3 block ${
                isDark ? 'text-[#C89D66]' : 'text-[#8A5A2B]'
              }`}
            >
              LUNA JOURNAL & DISPATCHES
            </span>
            <h2
              className={`font-serif text-4xl sm:text-5xl font-bold tracking-tight transition-colors ${
                isDark ? 'text-[#FAF7F2]' : 'text-[#1C1510]'
              }`}
            >
              Events, Promos and News.
            </h2>
            <p
              className={`mt-3 text-sm sm:text-base max-w-xl leading-relaxed ${
                isDark ? 'text-[#A89F95]' : 'text-[#6B5E52]'
              }`}
            >
              Community gatherings at The Triangle patio, weekly roastery updates, and seasonal pairings.
            </p>
          </div>

          {/* Owner Quick Action: "Create Announcement" Drawer Trigger */}
          <button
            onClick={() => setShowPublisherModal(true)}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono font-bold transition-all duration-300 self-start md:self-auto border active:scale-95 shadow-sm ${
              isDark
                ? 'bg-white/5 hover:bg-white/10 text-[#C89D66] border-white/15'
                : 'bg-[#1C1510]/5 hover:bg-[#1C1510]/10 text-[#8A5A2B] border-black/10'
            }`}
          >
            <PlusCircle className="w-4 h-4" />
            <span>Owner Portal: Post Update</span>
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`relative px-4 py-2 rounded-full text-xs font-mono font-medium transition-colors whitespace-nowrap ${
                  isActive
                    ? isDark
                      ? 'text-[#140E0A] font-bold'
                      : 'text-white font-bold'
                    : isDark
                    ? 'text-[#A89F95] hover:text-white'
                    : 'text-[#6B5E52] hover:text-[#1C1510]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="blogFilterPill"
                    className={`absolute inset-0 rounded-full shadow-md ${
                      isDark ? 'bg-[#C89D66]' : 'bg-[#8A5A2B]'
                    }`}
                    transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            );
          })}
        </div>

        {/* Asymmetric Bento / Card Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post) => {
              const isEvent = post.category === 'Event';
              const isPromo = post.category === 'Promo';

              return (
                <motion.article
                  key={post.id}
                  layout="position"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setSelectedPost(post)}
                  className={`group rounded-3xl p-3 border transition-all duration-500 cursor-pointer flex flex-col justify-between ${
                    isDark
                      ? 'bg-white/[0.02] hover:bg-white/[0.05] border-white/10 hover:border-[#C89D66]/40'
                      : 'bg-white hover:bg-[#FDFBF7] border-black/10 hover:border-[#8A5A2B]/40 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div>
                    {/* Visual Aspect Header */}
                    <div
                      className={`relative aspect-[16/10] w-full rounded-2xl overflow-hidden ${
                        isDark ? 'bg-[#16110D]' : 'bg-[#EAE2D7]'
                      }`}
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                        loading="lazy"
                      />
                      <div
                        className={`absolute inset-0 ${
                          isDark
                            ? 'bg-gradient-to-t from-[#0F0C0A]/85 via-transparent to-transparent'
                            : 'bg-gradient-to-t from-[#1C1510]/60 via-transparent to-transparent'
                        }`}
                      />

                      {/* Category Tag Pill */}
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span
                          className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider backdrop-blur-md ${
                            isPromo
                              ? 'bg-[#D70F64] text-white shadow-md'
                              : isEvent
                              ? 'bg-[#C89D66] text-[#140E0A] shadow-md'
                              : 'bg-black/60 text-white border border-white/15'
                          }`}
                        >
                          {post.category}
                        </span>
                      </div>

                      {/* Tag Chip */}
                      <div className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-[#D8C7B0] border border-white/10">
                        {post.tag}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center gap-3 text-[11px] font-mono text-[#A89F95] mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#C89D66]" />
                          {post.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#C89D66]" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3
                        className={`font-serif text-xl font-bold transition-colors leading-snug ${
                          isDark
                            ? 'text-[#FAF7F2] group-hover:text-[#C89D66]'
                            : 'text-[#1C1510] group-hover:text-[#8A5A2B]'
                        }`}
                      >
                        {post.title}
                      </h3>

                      <p
                        className={`mt-2 text-xs sm:text-sm leading-relaxed line-clamp-3 ${
                          isDark ? 'text-[#A89F95]' : 'text-[#6B5E52]'
                        }`}
                      >
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Read More Footer */}
                  <div
                    className={`p-5 pt-3 border-t flex items-center justify-between text-xs font-mono transition-colors ${
                      isDark ? 'border-white/5 text-[#C89D66]' : 'border-black/5 text-[#8A5A2B]'
                    }`}
                  >
                    <span className="font-bold flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                      {post.linkText || 'Read Details'}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[10px] text-[#A89F95]">{post.author.name}</span>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Reader Modal (Full Post View) */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className={`relative max-w-2xl w-full rounded-[2rem] p-6 sm:p-8 border shadow-2xl overflow-hidden ${
                isDark ? 'bg-[#16110D] border-white/15 text-white' : 'bg-white border-black/10 text-[#1C1510]'
              }`}
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-black/20 hover:bg-black/40 text-current transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-[#C89D66]/20 text-[#C89D66] font-mono text-[10px] font-bold uppercase">
                  {selectedPost.category}
                </span>
                <span className="text-xs font-mono text-[#A89F95]">{selectedPost.date}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight mb-4">
                {selectedPost.title}
              </h3>

              <div className="rounded-2xl overflow-hidden aspect-video mb-5 bg-[#140E0A]">
                <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
              </div>

              <p className={`text-sm sm:text-base leading-relaxed mb-6 ${isDark ? 'text-[#D8C7B0]' : 'text-[#54473C]'}`}>
                {selectedPost.excerpt}
              </p>

              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs font-mono">
                  <div className="font-bold">{selectedPost.author.name}</div>
                  <div className="text-[#A89F95]">{selectedPost.author.role}</div>
                </div>

                {selectedPost.actionUrl && (
                  <a
                    href={selectedPost.actionUrl}
                    target={selectedPost.actionUrl.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    onClick={() => setSelectedPost(null)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D70F64] hover:bg-[#BF0C58] text-white text-xs font-semibold shadow-md transition-transform active:scale-95"
                  >
                    <span>{selectedPost.linkText || 'Learn More'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Owner Publishing Placeholder Modal */}
      <AnimatePresence>
        {showPublisherModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className={`relative max-w-lg w-full rounded-[2rem] p-6 sm:p-8 border shadow-2xl ${
                isDark ? 'bg-[#16110D] border-white/15 text-white' : 'bg-white border-black/10 text-[#1C1510]'
              }`}
            >
              <button
                onClick={() => setShowPublisherModal(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-black/20 hover:bg-black/40 text-current transition-colors"
                aria-label="Close publisher"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2 text-xs font-mono text-[#C89D66] uppercase tracking-wider font-bold">
                <Sparkles className="w-4 h-4" />
                <span>Owner Publishing Portal Placeholder</span>
              </div>

              <h3 className="font-serif text-2xl font-bold mb-2">Publish New Announcement</h3>
              <p className={`text-xs leading-relaxed mb-6 ${isDark ? 'text-[#A89F95]' : 'text-[#6B5E52]'}`}>
                Easily broadcast promotions, live musical nights, or new coffee arrivals to your customers directly on the site.
              </p>

              {publishSuccess ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                  <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto" />
                  <div className="font-serif font-bold text-lg text-emerald-400">Published Successfully</div>
                  <p className="text-xs font-mono text-[#A89F95]">
                    Your announcement placeholder is now live for testing.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSimulatePublish} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider mb-1.5 opacity-80">
                      Headline Title
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Weekend Patio Acoustic Night or 20% Off Spanish Latte"
                      value={draftTitle}
                      onChange={(e) => setDraftTitle(e.target.value)}
                      className={`w-full px-4 py-2.5 rounded-xl text-sm border focus:outline-none transition-colors ${
                        isDark
                          ? 'bg-black/40 border-white/15 text-white focus:border-[#C89D66]'
                          : 'bg-black/[0.03] border-black/15 text-[#1C1510] focus:border-[#8A5A2B]'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider mb-1.5 opacity-80">
                      Category Type
                    </label>
                    <select
                      value={draftCategory}
                      onChange={(e) => setDraftCategory(e.target.value as any)}
                      className={`w-full px-4 py-2.5 rounded-xl text-sm border focus:outline-none transition-colors ${
                        isDark
                          ? 'bg-[#140E0A] border-white/15 text-white focus:border-[#C89D66]'
                          : 'bg-white border-black/15 text-[#1C1510] focus:border-[#8A5A2B]'
                      }`}
                    >
                      <option value="Event">Event (Acoustic Night, Workshop, Cupping)</option>
                      <option value="Promo">Promo (Happy Hour, Meal Combo, Foodpanda Discount)</option>
                      <option value="Announcement">Announcement (New Hours, Roast Arrival, Holiday)</option>
                      <option value="Brew Guide">Brew Guide (Recipes, Barista Notes)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider mb-1.5 opacity-80">
                      Summary Text
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Describe the promotion dates, musician lineup, or coffee origin details..."
                      value={draftExcerpt}
                      onChange={(e) => setDraftExcerpt(e.target.value)}
                      className={`w-full px-4 py-2.5 rounded-xl text-sm border focus:outline-none transition-colors ${
                        isDark
                          ? 'bg-black/40 border-white/15 text-white focus:border-[#C89D66]'
                          : 'bg-black/[0.03] border-black/15 text-[#1C1510] focus:border-[#8A5A2B]'
                      }`}
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setShowPublisherModal(false)}
                      className="px-4 py-2 rounded-xl text-xs font-mono opacity-70 hover:opacity-100 transition-opacity"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-full bg-[#C89D66] hover:bg-[#E0B883] text-[#0C0907] text-xs font-mono font-bold transition-all active:scale-95 shadow-md"
                    >
                      Publish to Feed
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
