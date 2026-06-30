import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Code2, Bot, Rocket, Smartphone, BarChart3, ShieldCheck } from 'lucide-react';
import logoSrc from '/logo.png';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-violet-primary/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] rounded-full bg-violet-accent/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[40%] rounded-full bg-indigo-500/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen" />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 py-4 lg:py-0 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left flex flex-col items-start space-y-6 w-full"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-violet-primary/30 text-violet-primary dark:text-violet-light font-medium text-sm">
              <Zap size={16} className="text-violet-primary" />
              <span>The Future of Digital Business</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-extrabold tracking-tight leading-[1.1] text-slate-900 dark:text-white max-w-2xl">
              Transform Your Business <br className="hidden sm:block" />
              with <span className="text-gradient">Our Digital Solutions</span>
            </h1>

            <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
              We build high-performance websites, integrate AI solutions, and optimize your online presence to help your business scale faster.
            </p>

            <div className="flex flex-wrap items-center gap-10 md:gap-16 pt-2 w-full max-w-lg">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900 dark:text-white">99%</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Client Satisfaction</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900 dark:text-white">2.5x</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Average ROI</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900 dark:text-white">24/7</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Support</span>
              </div>
            </div>

            <div className="flex flex-row sm:flex-wrap items-center gap-3 sm:gap-4 pt-8 mt-4 border-t border-slate-200 dark:border-slate-800 w-full">
              <a
                href="#contact"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center px-4 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-bold rounded-full text-slate-900 bg-white hover:bg-slate-100 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.4)] group whitespace-nowrap"
              >
                Get Started
                <ArrowRight className="ml-1.5 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center px-4 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-medium rounded-full text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors whitespace-nowrap"
              >
                Explore Services
              </a>
            </div>
          </motion.div>

          {/* Visual Content — Logo Orbital Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.25, ease: 'easeOut' }}
            className="relative h-[420px] sm:h-[480px] lg:h-[560px] flex items-center justify-center scale-105 sm:scale-110 lg:scale-120 xl:scale-125 origin-center transition-transform duration-300 w-full"
          >
            {/* Ambient radial glow */}
            <div className="absolute w-80 h-80 rounded-full bg-violet-600/30 blur-[90px] animate-pulse" style={{ animationDuration: '3s' }} />
            <div className="absolute w-56 h-56 rounded-full bg-indigo-500/25 blur-[60px] animate-pulse" style={{ animationDuration: '4.5s', animationDelay: '1s' }} />

            {/* Outer orbit ring track */}
            <div
              className="absolute rounded-full"
              style={{ width: '360px', height: '360px', border: '1px dashed rgba(139,92,246,0.35)' }}
            />

            {/* Inner orbit ring track */}
            <div
              className="absolute rounded-full"
              style={{ width: '230px', height: '230px', border: '1px dashed rgba(167,139,250,0.25)' }}
            />

            {/* Outer orbit — 4 service circles, clockwise */}
            {[
              { label: 'Web Development', Icon: Code2,    color: '#818cf8', bg: 'rgba(129,140,248,0.22)',  angle: 0   },
              { label: 'AI Integration',  Icon: Bot,       color: '#c084fc', bg: 'rgba(192,132,252,0.22)', angle: 90  },
              { label: 'SEO Growth',      Icon: Rocket,    color: '#34d399', bg: 'rgba(52,211,153,0.22)',  angle: 180 },
              { label: 'Mobile Apps',     Icon: Smartphone,color: '#f472b6', bg: 'rgba(244,114,182,0.22)', angle: 270 },
            ].map(({ label, Icon, color, bg, angle }) => {
              const r = 180; // outer radius px
              const rad = (angle * Math.PI) / 180;
              const x = Math.cos(rad) * r;
              const y = Math.sin(rad) * r;
              return (
                <motion.div
                  key={label}
                  className="absolute flex flex-col items-center justify-center group cursor-pointer"
                  style={{
                    top: '50%',
                    left: '50%',
                    color,
                  }}
                  animate={{
                    x: [
                      Math.cos(((angle + 0)   * Math.PI) / 180) * r - 0,
                      Math.cos(((angle + 90)  * Math.PI) / 180) * r - 0,
                      Math.cos(((angle + 180) * Math.PI) / 180) * r - 0,
                      Math.cos(((angle + 270) * Math.PI) / 180) * r - 0,
                      Math.cos(((angle + 360) * Math.PI) / 180) * r - 0,
                    ],
                    y: [
                      Math.sin(((angle + 0)   * Math.PI) / 180) * r,
                      Math.sin(((angle + 90)  * Math.PI) / 180) * r,
                      Math.sin(((angle + 180) * Math.PI) / 180) * r,
                      Math.sin(((angle + 270) * Math.PI) / 180) * r,
                      Math.sin(((angle + 360) * Math.PI) / 180) * r,
                    ],
                  }}
                  transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                  transformTemplate={({ x, y }) =>
                    `translate(calc(${x} + -50%), calc(${y} + -50%))`
                  }
                >
                  {/* Perfect Circle Icon Wrapper */}
                  <div 
                    className="flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-sm shadow-lg transition-transform duration-350 group-hover:scale-110"
                    style={{
                      background: bg,
                      border: `1px solid ${color}88`,
                      boxShadow: `0 0 16px 2px ${color}66`,
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  
                  {/* Static Wording */}
                  <span className="text-[10px] sm:text-xs font-semibold whitespace-nowrap mt-1.5 drop-shadow-md">
                    {label}
                  </span>
                </motion.div>
              );
            })}

            {/* Inner orbit — 3 service circles, counter-clockwise */}
            {[
              { label: 'Analytics',  Icon: BarChart3,   color: '#38bdf8', bg: 'rgba(56,189,248,0.22)',  angle: 60  },
              { label: 'Cloud',      Icon: ShieldCheck, color: '#facc15', bg: 'rgba(250,204,21,0.22)',  angle: 180 },
              { label: 'Security',   Icon: ShieldCheck, color: '#e879f9', bg: 'rgba(232,121,249,0.22)', angle: 300 },
            ].map(({ label, Icon, color, bg, angle }) => {
              const r = 115;
              return (
                <motion.div
                  key={label}
                  className="absolute flex flex-col items-center justify-center group cursor-pointer"
                  style={{
                    top: '50%',
                    left: '50%',
                    color,
                  }}
                  animate={{
                    x: [
                      Math.cos(((angle + 0)   * Math.PI) / 180) * r,
                      Math.cos(((angle - 90)  * Math.PI) / 180) * r,
                      Math.cos(((angle - 180) * Math.PI) / 180) * r,
                      Math.cos(((angle - 270) * Math.PI) / 180) * r,
                      Math.cos(((angle - 360) * Math.PI) / 180) * r,
                    ],
                    y: [
                      Math.sin(((angle + 0)   * Math.PI) / 180) * r,
                      Math.sin(((angle - 90)  * Math.PI) / 180) * r,
                      Math.sin(((angle - 180) * Math.PI) / 180) * r,
                      Math.sin(((angle - 270) * Math.PI) / 180) * r,
                      Math.sin(((angle - 360) * Math.PI) / 180) * r,
                    ],
                  }}
                  transition={{ repeat: Infinity, duration: 14, ease: 'linear' }}
                  transformTemplate={({ x, y }) =>
                    `translate(calc(${x} + -50%), calc(${y} + -50%))`
                  }
                >
                  {/* Perfect Circle Icon Wrapper */}
                  <div 
                    className="flex items-center justify-center w-10 h-10 rounded-full backdrop-blur-sm shadow-md transition-transform duration-350 group-hover:scale-110"
                    style={{
                      background: bg,
                      border: `1px solid ${color}88`,
                      boxShadow: `0 0 12px 1px ${color}55`,
                    }}
                  >
                    <Icon size={16} />
                  </div>
                  
                  {/* Static Wording */}
                  <span className="text-[9px] sm:text-[10px] font-semibold whitespace-nowrap mt-1 drop-shadow-md">
                    {label}
                  </span>
                </motion.div>
              );
            })}

            {/* Logo core */}
            <motion.img
              src={logoSrc}
              alt="Viyan Logo"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="relative z-20 w-36 h-36 sm:w-44 sm:h-44 object-contain"
              style={{ filter: 'drop-shadow(0 0 28px rgba(139,92,246,0.95))' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
