import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Code, Rocket, ShieldCheck, Zap, BarChart3, Smartphone, Cpu } from 'lucide-react';

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

            <div className="flex flex-wrap gap-4 pt-2 w-full">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold rounded-full text-slate-900 bg-white hover:bg-slate-100 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.4)] group"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-full text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                Explore Services
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-10 md:gap-16 pt-8 mt-4 border-t border-slate-200 dark:border-slate-800 w-full max-w-lg">
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
          </motion.div>

          {/* Visual Content / Abstract Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[300px] sm:h-[400px] lg:h-[450px] flex items-center justify-center"
          >
            {/* Central glowing orb */}
            <div className="absolute w-64 h-64 bg-violet-primary/30 rounded-full blur-3xl animate-pulse" />

            <div className="relative w-full max-w-md aspect-square">
              {/* Central Card */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute inset-0 m-auto w-48 h-48 sm:w-64 sm:h-64 glass rounded-3xl flex flex-col items-center justify-center gap-4 z-20 shadow-2xl"
              >
                <div className="p-4 bg-gradient-primary rounded-2xl text-white">
                  <Bot size={48} />
                </div>
                <div className="text-center">
                  <p className="font-bold text-xl text-slate-900 dark:text-white">Viyan AI</p>
                  <p className="text-sm text-violet-primary dark:text-violet-accent">Active</p>
                </div>
              </motion.div>

              {/* Floating Element 1 */}
              <motion.div
                animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute top-[10%] -left-[10%] w-32 h-32 glass rounded-2xl p-4 flex flex-col items-center justify-center gap-2 z-30"
              >
                <div className="p-2 bg-indigo-500/10 text-indigo-500 rounded-xl">
                  <Code size={24} />
                </div>
                <p className="font-semibold text-sm text-slate-900 dark:text-white">Web Apps</p>
              </motion.div>

              {/* Floating Element 2 */}
              <motion.div
                animate={{ y: [0, -15, 0], x: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-[20%] -right-[5%] w-36 h-32 glass rounded-2xl p-4 flex flex-col items-center justify-center gap-2 z-10"
              >
                <div className="p-2 bg-emerald-500/10 text-emerald-500 rounded-xl">
                  <Rocket size={24} />
                </div>
                <p className="font-semibold text-sm text-slate-900 dark:text-white">SEO Growth</p>
              </motion.div>

              {/* Floating Element 3 */}
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2 }}
                className="absolute -top-[5%] right-[10%] w-16 h-16 glass rounded-2xl flex items-center justify-center z-10"
              >
                <ShieldCheck size={24} className="text-violet-primary dark:text-violet-accent" />
              </motion.div>

              {/* Floating Element 4 */}
              <motion.div
                animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-[5%] left-[0%] w-32 h-28 glass rounded-2xl p-4 flex flex-col items-center justify-center gap-2 z-10"
              >
                <div className="p-2 bg-blue-500/10 text-blue-500 rounded-xl">
                  <BarChart3 size={24} />
                </div>
                <p className="font-semibold text-xs text-slate-900 dark:text-white">Analytics</p>
              </motion.div>

              {/* Floating Element 5 */}
              <motion.div
                animate={{ y: [0, 25, 0], x: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 2.5 }}
                className="absolute top-[35%] -right-[15%] w-24 h-24 glass rounded-2xl p-3 flex flex-col items-center justify-center gap-2 z-20"
              >
                <div className="p-2 bg-pink-500/10 text-pink-500 rounded-xl">
                  <Smartphone size={20} />
                </div>
                <p className="font-semibold text-[10px] text-slate-900 dark:text-white">Mobile</p>
              </motion.div>

              {/* Floating Element 6 */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.8 }}
                className="absolute -bottom-[5%] right-[30%] w-14 h-14 glass rounded-xl flex items-center justify-center z-30 shadow-lg"
              >
                <Cpu size={20} className="text-violet-primary dark:text-violet-accent" />
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
