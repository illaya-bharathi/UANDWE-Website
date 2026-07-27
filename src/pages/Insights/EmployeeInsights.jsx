import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, User, Briefcase, Award, Search, ChevronRight } from 'lucide-react';
import SectionHeading from '../../components/SectionHeading';

// Real data for Engineering Insights
const INSIGHTS = [
  {
    id: 1,
    title: "The Future of Chip Design in the AI Era",
    excerpt: "Discover how AI-driven automation, advanced verification techniques, and next-generation semiconductor architectures are transforming modern chip development.",
    category: "Semiconductor",
    author: "UANDWE Engineering Team",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
    featured: true
  },
  {
    id: 2,
    title: "Building Reliable Embedded Systems for Mission-Critical Applications",
    excerpt: "Learn the design principles, testing strategies, and optimization techniques that enable embedded products to perform reliably in automotive, healthcare, and industrial environments.",
    category: "Embedded Systems",
    author: "Embedded Solutions Team",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80",
    featured: false
  },
  {
    id: 3,
    title: "Designing Scalable Enterprise Applications for Modern Businesses",
    excerpt: "Explore how cloud-native architectures, microservices, and responsive user experiences help organizations build secure and scalable digital solutions.",
    category: "Application Development",
    author: "Software Engineering Team",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    featured: false
  },
  {
    id: 4,
    title: "How AI is Transforming Business Operations",
    excerpt: "From intelligent automation and predictive analytics to generative AI, discover practical ways businesses are leveraging artificial intelligence to improve efficiency and decision-making.",
    category: "Artificial Intelligence",
    author: "AI & Data Science Team",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80",
    featured: false
  },
  {
    id: 5,
    title: "Connecting Smart Devices Through Intelligent IoT Solutions",
    excerpt: "Learn how IoT platforms, edge computing, and secure device communication are enabling smarter factories, connected healthcare, and intelligent infrastructure.",
    category: "Internet of Things",
    author: "IoT Innovation Team",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80",
    featured: false
  },
  {
    id: 6,
    title: "Building Scalable Applications for Modern Businesses",
    excerpt: "From web and mobile applications to enterprise platforms, discover how our engineering teams design secure, scalable, and high-performance digital solutions using modern architectures, cloud technologies, and user-centric design principles.",
    category: "Application Development",
    author: "Application Development Team",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80",
    featured: false
  }
];

const CATEGORIES = ["All", "Semiconductor", "Embedded Systems", "Application Development", "Artificial Intelligence", "Internet of Things"];

export default function EmployeeInsights() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredPost = INSIGHTS.find(post => post.featured);
  const filteredPosts = INSIGHTS.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter out featured post from the grid if we are on "All" and searching is empty
    const isNotFeatured = post.id !== featuredPost?.id;
    return matchesCategory && matchesSearch && (searchQuery || activeCategory !== "All" ? true : isNotFeatured);
  });

  return (
    <div className="bg-[#0b0b12] min-h-screen text-white pt-[120px] pb-24 overflow-hidden">
      
      {/* BACKGROUND ELEMENTS (Using fuchsia/purple accents for Employee Insights) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#ff6b1a]/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-fuchsia-600/10 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-[1400px] mx-auto px-[5%] relative z-10">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <SectionHeading 
            titlePart1="Engineering" 
            titlePart2="Insights" 
            className="mb-0 uppercase"
          />
          <p className="text-white/60 text-lg md:text-xl max-w-md leading-relaxed">
            Explore expert perspectives, engineering best practices, emerging technologies, and innovation stories from the teams building the future of semiconductor, embedded systems, AI, and enterprise software.
          </p>
        </div>

        {/* CONTROLS (SEARCH & FILTER) */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-16">
          {/* Categories */}
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  activeCategory === category 
                    ? 'bg-[#ff6b1a] border-[#ff6b1a] text-white shadow-[0_0_20px_rgba(255,107,26,0.3)]' 
                    : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-auto">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
            <input 
              type="text"
              placeholder="Search stories & authors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full lg:w-[300px] bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 text-white placeholder:text-white/40 focus:outline-none focus:border-[#ff6b1a]/50 focus:bg-white/10 transition-all"
            />
          </div>
        </div>

        {/* FEATURED STORY (Only show if searching is empty and category is All) */}
        <AnimatePresence mode="wait">
          {activeCategory === "All" && searchQuery === "" && featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-20 relative rounded-3xl overflow-hidden group cursor-pointer border border-white/10 bg-[#12121a]"
            >
              <div className="flex flex-col lg:flex-row h-full lg:h-[500px]">
                {/* Image Section */}
                <div className="w-full lg:w-3/5 h-[300px] lg:h-full relative overflow-hidden">
                  <motion.img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6 px-4 py-1.5 bg-[#ff6b1a] text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-lg z-10 flex items-center gap-2">
                    <User size={14} /> Spotlight Story
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12121a] lg:from-transparent lg:bg-gradient-to-r lg:to-[#12121a] via-transparent opacity-100" />
                </div>
                
                {/* Content Section */}
                <div className="w-full lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center relative z-10 bg-[#12121a]">
                  <div className="flex items-center gap-4 text-white/50 text-sm font-medium mb-6">
                    <span className="flex items-center gap-1.5 text-fuchsia-400"><Briefcase size={16} /> {featuredPost.category}</span>
                    <span className="w-1 h-1 rounded-full bg-white/30" />
                    <span className="flex items-center gap-1.5"><Award size={16} /> {featuredPost.readTime}</span>
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight group-hover:text-fuchsia-400 transition-colors">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-white/70 text-lg leading-relaxed mb-8 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-8 border-t border-white/10">
                    <div className="flex flex-col">
                      <span className="text-white font-bold text-lg">{featuredPost.author}</span>
                      <span className="text-white/50 text-sm uppercase tracking-wider">Author</span>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-fuchsia-500/50 flex items-center justify-center group-hover:bg-fuchsia-600 transition-all duration-300">
                      <ArrowRight size={20} className="text-fuchsia-400 group-hover:text-white group-hover:-rotate-45 transition-all" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* POSTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredPosts.map((post, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                key={post.id}
                className="group cursor-pointer bg-[#12121a] rounded-2xl border border-white/5 overflow-hidden hover:border-fuchsia-500/30 hover:shadow-[0_20px_40px_rgba(192,38,211,0.15)] transition-all duration-500 flex flex-col h-full"
              >
                {/* Image */}
                <div className="h-[240px] w-full overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md text-white/90 text-xs font-semibold uppercase tracking-wider rounded-md border border-white/10 flex items-center gap-1.5">
                    <Briefcase size={12} /> {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow relative">
                  <div className="flex flex-wrap items-center gap-2 text-fuchsia-400 text-xs font-semibold mb-4 uppercase tracking-wider">
                    {post.category}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 leading-snug group-hover:text-fuchsia-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-white/60 text-sm leading-relaxed mb-8 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                    <div className="flex flex-col">
                      <span className="text-white/90 font-semibold text-sm">{post.author}</span>
                      <span className="text-white/40 text-[10px] uppercase tracking-widest">{post.readTime}</span>
                    </div>
                    <span className="text-fuchsia-400 text-sm font-bold flex items-center gap-1 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      Read Story <ChevronRight size={16} />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-24 text-center border border-dashed border-white/10 rounded-3xl bg-white/[0.02]"
          >
            <Search size={48} className="text-white/20 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-2">No stories found</h3>
            <p className="text-white/50 max-w-md">We couldn't find any insights matching your criteria. Try adjusting your filters.</p>
            <button 
              onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
              className="mt-8 px-6 py-2.5 bg-[#ff6b1a] text-white font-semibold rounded-full hover:bg-[#e55a10] transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

      </div>
    </div>
  );
}
