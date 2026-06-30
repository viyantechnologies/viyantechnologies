import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogData';

const BlogPost = () => {
  const { slug } = useParams();

  // Find the post matching the slug
  const post = blogPosts.find(p => p.slug === `/blog/${slug}` || p.slug === slug || p.slug.endsWith(slug));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="pt-24 pb-20 bg-white dark:bg-slate-900 min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Post Not Found</h2>
        <Link to="/blog" className="text-violet-600 hover:underline">Back to all posts</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-white dark:bg-slate-900 min-h-screen">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/blog" className="inline-flex items-center text-sm font-medium text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300 mb-8 transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Back to all posts
          </Link>
          
          <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-6">
            <span className="flex items-center gap-1.5 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 px-3 py-1 rounded-full font-medium">
              <Tag size={14} /> {post.category}
            </span>
            <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
            <span className="flex items-center gap-1.5"><User size={14} /> {post.author}</span>
          </div>

          <h1 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-8">
            {post.title}
          </h1>

          <div className="aspect-video w-full rounded-2xl overflow-hidden mb-12 shadow-lg">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>

          <div 
            className="prose prose-lg dark:prose-invert prose-violet max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.div>
      </article>
    </div>
  );
};

export default BlogPost;
