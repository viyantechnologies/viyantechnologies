import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogData';

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-white dark:bg-slate-900 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-fuchsia-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold tracking-wider text-violet-primary uppercase mb-3">
              Insights & News
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
              Latest from <span className="text-gradient">Our Blog</span>
            </h3>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Stay updated with the latest trends, technologies, and strategies driving digital transformation in today's fast-paced world.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-slate-50 dark:bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-violet-primary text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-violet-primary transition-colors duration-300">
                  <Link to={post.slug} className="hover:underline decoration-2 underline-offset-4">{post.title}</Link>
                </h4>
                
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>

                <div className="mt-auto">
                  <Link 
                    to={post.slug}
                    className="inline-flex items-center gap-2 text-sm font-bold text-violet-primary hover:text-fuchsia-500 transition-colors duration-300"
                  >
                    Read Article <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
             <Link to="/blog" className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white bg-violet-600 rounded-full hover:bg-violet-700 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1">
                View All Posts
             </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Blog;
