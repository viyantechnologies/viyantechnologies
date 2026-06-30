import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../utils/cn';
import { getAssetPath } from '../../utils/assetHelper';

const LinkedInIcon = ({ size = 18, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 18, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const navLinks = [
  { name: 'HOME', href: '/#home' },
  { name: 'SERVICES', href: '/#services' },
  { name: 'PORTFOLIO', href: '/#portfolio' },
  { name: 'BLOG', href: '/blog' },
  { name: 'ABOUT', href: '/about' },
  { name: 'CONTACT', href: '/#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNavLinkClick = (e, href) => {
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      if (window.location.pathname === '/' || window.location.pathname === '') {
        const element = document.getElementById(id);
        if (element) {
          e.preventDefault();
          window.history.pushState(null, null, `#${id}`);
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md border-b border-slate-200/80 dark:border-slate-800/80 py-2'
            : 'bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800/55 py-3'
        )}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center text-slate-900 dark:text-white">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link
                to="/#home"
                onClick={(e) => handleNavLinkClick(e, '/#home')}
                className="flex items-center gap-2 xs:gap-3 group"
              >
                <img
                  src={getAssetPath('/logo.png')}
                  alt="Viyan Logo"
                  className="h-8 xs:h-9 md:h-10 w-auto mix-blend-screen group-hover:scale-105 transition-transform duration-300"
                />
                <div className="flex flex-col justify-center items-center w-fit">
                  <span className="text-lg xs:text-xl md:text-2xl font-semibold font-sans leading-none text-slate-900 dark:text-white uppercase tracking-[0.25em] xs:tracking-[0.3em] md:tracking-[0.4em] text-center translate-x-[0.125em] xs:translate-x-[0.15em] md:translate-x-[0.2em] transition-all">
                    VIYAN
                  </span>
                  <div className="flex items-center justify-center gap-1 md:gap-2 mt-1 w-full">
                    <div className="h-[1.5px] w-1 xs:w-1.5 md:w-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-[5px] xs:text-[6px] md:text-[7px] font-bold tracking-[0.35em] xs:tracking-[0.45em] md:tracking-[0.55em] text-violet-primary uppercase text-center translate-x-[0.175em] xs:translate-x-[0.25em] transition-all">
                      technologies
                    </span>
                    <div className="h-[1.5px] w-1 xs:w-1.5 md:w-2 bg-yellow-500 rounded-full"></div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={(e) => handleNavLinkClick(e, link.href)}
                    className="text-xs lg:text-sm font-semibold text-slate-700 hover:text-violet-primary dark:text-slate-200 dark:hover:text-violet-light transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-violet-primary after:transition-all hover:after:w-full"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Divider */}
              <div className="h-4 w-[1px] bg-slate-200 dark:bg-slate-800" />

              {/* Social Links */}
              <div className="flex items-center space-x-2">
                <a
                  href="mailto:viyantechnologiesteam@gmail.com"
                  className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-350 hover:bg-violet-primary hover:text-white transition-all shadow-sm"
                  title="Mail"
                >
                  <Mail size={14} />
                </a>
                <a
                  href="https://www.linkedin.com/in/viyan-technologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-350 hover:bg-violet-primary hover:text-white transition-all shadow-sm"
                  title="LinkedIn"
                >
                  <LinkedInIcon size={14} />
                </a>
                <a
                  href="https://www.instagram.com/viyan_technologies?igsh=dGkwdWtucWhvOGJn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-350 hover:bg-violet-primary hover:text-white transition-all shadow-sm"
                  title="Instagram"
                >
                  <InstagramIcon size={14} />
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(true)}
                className="text-slate-600 hover:text-violet-primary dark:text-slate-350 p-2 focus:outline-none"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Modern Slide-over Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 md:hidden"
            />

            {/* Drawer Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] xs:w-[320px] bg-white dark:bg-slate-950 shadow-2xl z-55 md:hidden flex flex-col justify-between p-6 border-l border-slate-200/80 dark:border-slate-800/80"
            >
              <div>
                {/* Header inside Drawer */}
                <div className="flex justify-between items-center mb-8 border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <img src={getAssetPath('/logo.png')} alt="Viyan" className="h-9 w-auto mix-blend-screen" />
                    <span className="text-lg font-bold font-sans tracking-[0.2em] text-slate-900 dark:text-white uppercase translate-x-[0.1em]">
                      VIYAN
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Nav Links */}
                <div className="flex flex-col space-y-2">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Link
                        to={link.href}
                        onClick={(e) => {
                          setIsOpen(false);
                          handleNavLinkClick(e, link.href);
                        }}
                        className="block px-4 py-3.5 text-base font-semibold text-slate-800 dark:text-slate-100 hover:text-violet-primary dark:hover:text-violet-accent hover:bg-slate-50 dark:hover:bg-slate-900/50 rounded-xl transition-all"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Drawer Footer / Social Info */}
              <div className="border-t border-slate-100 dark:border-slate-800 pt-6">
                <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">
                  Connect with us
                </p>
                <div className="flex gap-3 mb-6">
                  <a
                    href="mailto:viyantechnologiesteam@gmail.com"
                    className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-350 hover:bg-violet-primary hover:text-white transition-all shadow-sm"
                  >
                    <Mail size={18} />
                  </a>
                  <a
                    href="https://viyan.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-350 hover:bg-violet-primary hover:text-white transition-all shadow-sm"
                  >
                    <Globe size={18} />
                  </a>
                  <a
                    href="https://wa.me/919999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-350 hover:bg-violet-primary hover:text-white transition-all shadow-sm"
                  >
                    <MessageCircle size={18} />
                  </a>
                </div>
                <p className="text-[10px] text-slate-400 dark:text-slate-500">
                  &copy; {new Date().getFullYear()} Viyan Technologies.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
