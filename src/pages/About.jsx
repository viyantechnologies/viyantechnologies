import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Target, Rocket, CheckCircle2, Cpu } from 'lucide-react';

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

const About = () => {
  const socials = [
    { name: 'Email', icon: <Mail size={18} />, href: 'mailto:viyantechnologiesteam@gmail.com' },
    { name: 'LinkedIn', icon: <LinkedInIcon size={18} />, href: 'www.linkedin.com/in/viyan-technologies' },
    { name: 'Instagram', icon: <InstagramIcon size={18} />, href: 'https://www.instagram.com/viyan_technologies?igsh=dGkwdWtucWhvOGJn' },
  ];

  const competencies = [
    'Enterprise-Grade Web Application Development',
    'Custom AI & Automation Agent Integration',
    'High-Conversion E-Commerce & ERP Solutions',
    'Data-Driven SEO & Digital Performance Marketing',
  ];

  const techStack = [
    'React / Next.js',
    'Node.js',
    'Python',
    'Generative AI (LLMs)',
    'Cloud Systems (AWS/GCP)',
  ];

  const stats = [
    { label: 'Deliveries', value: '50+' },
    { label: 'Satisfaction', value: '99%' },
    { label: 'AI Deployed', value: '15+' },
    { label: 'Industry Years', value: '5+' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 pt-28 pb-8 transition-colors duration-300 flex items-center justify-center relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-violet-primary/5 blur-[120px] mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[35%] h-[40%] rounded-full bg-fuchsia-500/5 blur-[120px]" />
      </div>

      <div className="max-w-[1340px] mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 items-center w-full">

          {/* Left Column Wrapper */}
          <div className="contents lg:flex lg:flex-col lg:justify-center lg:space-y-5 w-full">
            {/* Block A: Intro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center space-y-5 w-full order-1 lg:order-none"
            >
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-violet-100 dark:bg-violet-950/40 text-violet-primary dark:text-violet-accent uppercase tracking-wider inline-block mb-3">
                  About Our Enterprise
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                  Architecting <span className="text-gradient">Premium Solutions</span>
                </h1>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-200 leading-relaxed">
                Viyan Technologies engineers high-performance web systems and integrates customized Artificial Intelligence layers to maximize operational speed, enhance customer experiences, and drive enterprise growth.
              </p>
            </motion.div>

            {/* Block B: Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col justify-center space-y-5 w-full order-4 lg:order-none"
            >
              {/* Core Competencies */}
              <div className="space-y-2.5">
                <h3 className="text-xs font-bold tracking-wider text-slate-400 dark:text-slate-300 uppercase">Core Capabilities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {competencies.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-white">
                      <CheckCircle2 size={16} className="text-violet-primary dark:text-violet-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Integration */}
              {/* <div className="space-y-2">
                <h3 className="text-xs font-bold tracking-wider text-slate-400 dark:text-slate-300 uppercase flex items-center gap-1.5">
                  <Cpu size={14} className="text-violet-primary dark:text-violet-accent" />
                  Featured Tech Domains
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-white border border-slate-200/50 dark:border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div> */}

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-1">
                <span className="text-xs font-bold tracking-wider text-slate-400 dark:text-slate-300 uppercase">Get In Touch:</span>
                <div className="flex gap-2.5">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center hover:bg-violet-primary hover:text-white dark:hover:bg-violet-primary transition-all duration-300 shadow-sm border border-slate-200/50 dark:border-slate-700/50 hover:scale-105"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column Wrapper */}
          <div className="contents lg:flex lg:flex-col lg:gap-5 w-full">
            {/* Block C: Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-col gap-5 w-full order-3 lg:order-none"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
                {/* Mission */}
                <div className="glass p-5 sm:p-6 rounded-2xl border border-slate-200/40 dark:border-slate-800 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-violet-primary/5 rounded-bl-[60px] transition-transform duration-300 group-hover:scale-110" />
                  <div className="w-8 h-8 rounded-lg bg-violet-50 dark:bg-violet-950/40 text-violet-primary dark:text-violet-accent flex items-center justify-center mb-4">
                    <Target size={18} />
                  </div>
                  <h2 className="text-lg font-heading font-bold text-slate-900 dark:text-white mb-2">
                    Our Mission
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-white leading-relaxed">
                    To deliver optimized technical architectures and custom AI automation pipelines that eliminate operational friction and accelerate corporate scalability.
                  </p>
                </div>

                {/* Vision */}
                <div className="glass p-5 sm:p-6 rounded-2xl border border-slate-200/40 dark:border-slate-800 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-fuchsia-500/5 rounded-bl-[60px] transition-transform duration-300 group-hover:scale-110" />
                  <div className="w-8 h-8 rounded-lg bg-fuchsia-50 dark:bg-fuchsia-950/40 text-fuchsia-500 flex items-center justify-center mb-4">
                    <Rocket size={18} />
                  </div>
                  <h2 className="text-lg font-heading font-bold text-slate-900 dark:text-white mb-2">
                    Our Vision
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-white leading-relaxed">
                    To establish Viyan Technologies as the premier engineering partner for digital transformations, driving intelligent systems across global markets.
                  </p>
                </div>
              </div>

              {/* Why Partner With Us Card */}
              <div className="glass p-5 sm:p-6 rounded-2xl border border-slate-200/40 dark:border-slate-800 relative overflow-hidden">
                <h3 className="text-sm font-heading font-bold text-slate-900 dark:text-white mb-2">
                  Why Partner With Viyan?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-white leading-relaxed">
                  We combine technical precision with business acumen. By leveraging future-proof software, clean code architectures, and generative AI models, we deliver modern digital platforms that ensure long-term stability and high return on investment.
                </p>
              </div>
            </motion.div>

            {/* Block D: Performance Stats Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full order-2 lg:order-none"
            >
              <div className="bg-slate-50 dark:bg-slate-900/30 border border-slate-200/40 dark:border-slate-800 rounded-2xl p-4 flex justify-around items-center w-full">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <span className="text-xl sm:text-2xl font-heading font-extrabold text-slate-900 dark:text-white">
                      {stat.value}
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-slate-400 dark:text-slate-350 font-bold uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
