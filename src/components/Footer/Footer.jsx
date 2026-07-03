import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
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

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleFooterLinkClick = (e, href) => {
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
    <footer className="bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 pt-10 pb-6 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          <div className="col-span-2 lg:col-span-1">
            <Link 
              to="/#home" 
              onClick={(e) => handleFooterLinkClick(e, '/#home')}
              className="flex items-center gap-2 xs:gap-3 mb-6 group"
            >
              <img 
                src={getAssetPath('/logo.png')} 
                alt="Viyan Logo" 
                className="h-12 xs:h-14 md:h-16 w-auto mix-blend-screen group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="flex flex-col justify-center items-center w-fit">
                <span className="text-2xl xs:text-3xl md:text-4xl font-semibold font-sans leading-none text-slate-900 dark:text-white uppercase tracking-[0.25em] xs:tracking-[0.3em] md:tracking-[0.4em] text-center translate-x-[0.125em] xs:translate-x-[0.15em] md:translate-x-[0.2em] transition-all">
                  VIYAN
                </span>
                <div className="flex items-center justify-center gap-1.5 xs:gap-2 mt-1.5 md:mt-2 w-full">
                  <div className="h-[1.5px] w-1.5 xs:w-3 md:w-4 bg-yellow-500 rounded-full"></div>
                  <span className="text-[7px] xs:text-[9px] md:text-[10px] font-bold tracking-[0.35em] xs:tracking-[0.45em] md:tracking-[0.55em] text-violet-primary uppercase text-center translate-x-[0.175em] xs:translate-x-[0.25em] transition-all">
                    technologies
                  </span>
                  <div className="h-[1.5px] w-1.5 xs:w-3 md:w-4 bg-yellow-500 rounded-full"></div>
                </div>
              </div>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Empowering businesses with modern technology, AI solutions, and digital growth strategies. To become the most trusted digital transformation partner for businesses worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-slate-900 dark:text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/#home" onClick={(e) => handleFooterLinkClick(e, '/#home')} className="hover:text-violet-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-violet-primary transition-colors">About Us</Link></li>
              <li><Link to="/#portfolio" onClick={(e) => handleFooterLinkClick(e, '/#portfolio')} className="hover:text-violet-primary transition-colors">Portfolio</Link></li>
              <li><Link to="/#services" onClick={(e) => handleFooterLinkClick(e, '/#services')} className="hover:text-violet-primary transition-colors">Services</Link></li>
              <li><Link to="/#contact" onClick={(e) => handleFooterLinkClick(e, '/#contact')} className="hover:text-violet-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h4 className="text-slate-900 dark:text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/#services" onClick={(e) => handleFooterLinkClick(e, '/#services')} className="hover:text-violet-primary transition-colors">Website Development</Link></li>
              <li><Link to="/#services" onClick={(e) => handleFooterLinkClick(e, '/#services')} className="hover:text-violet-primary transition-colors">AI Integration</Link></li>
              <li><Link to="/#services" onClick={(e) => handleFooterLinkClick(e, '/#services')} className="hover:text-violet-primary transition-colors">SEO Optimization</Link></li>
              <li><Link to="/#services" onClick={(e) => handleFooterLinkClick(e, '/#services')} className="hover:text-violet-primary transition-colors">E-Commerce Solutions</Link></li>
              <li><Link to="/#services" onClick={(e) => handleFooterLinkClick(e, '/#services')} className="hover:text-violet-primary transition-colors">Web Applications</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-slate-900 dark:text-white font-bold mb-6">Newsletter</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-2.5">Subscribe to our newsletter for updates.</p>
            <form className="relative mb-3.5">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl py-2.5 pl-4 pr-12 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-violet-primary"
                required
              />
              <button 
                type="submit" 
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-violet-primary hover:bg-violet-secondary text-white rounded-lg transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight size={16} />
              </button>
            </form>

            {/* Get In Touch */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800/40 text-center lg:text-left">
              <h5 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">Get In Touch</h5>
              <div className="flex justify-center lg:justify-start items-center gap-4 w-full">
                <a
                  href="mailto:viyantechnologiesteam@gmail.com"
                  className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-800/60 flex items-center justify-center text-slate-600 dark:text-slate-350 hover:bg-violet-primary hover:text-white transition-all shadow-sm"
                  title="Mail"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/viyan-technologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-800/60 flex items-center justify-center text-slate-600 dark:text-slate-350 hover:bg-violet-primary hover:text-white transition-all shadow-sm"
                  title="LinkedIn"
                >
                  <LinkedInIcon size={20} />
                </a>
                <a
                  href="https://www.instagram.com/viyan_technologies?igsh=dGkwdWtucWhvOGJn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-800/60 flex items-center justify-center text-slate-600 dark:text-slate-350 hover:bg-violet-primary hover:text-white transition-all shadow-sm"
                  title="Instagram"
                >
                  <InstagramIcon size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {currentYear} Viyan. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;