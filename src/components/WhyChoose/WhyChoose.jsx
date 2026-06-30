import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Users, Zap, Search, Headset, Layers } from 'lucide-react';
import { getAssetPath } from '../../utils/assetHelper';

const reasons = [
  {
    title: 'Fast Delivery',
    icon: <CheckCircle2 size={24} />,
  },
  {
    title: 'Dedicated Support',
    icon: <Headset size={24} />,
  },
  {
    title: 'Scalable Architecture',
    icon: <Layers size={24} />,
  },
  {
    title: 'Expert Development Team',
    icon: <Users size={24} />,
  },
  {
    title: 'SEO Growth Strategy',
    icon: <Search size={24} />,
  },
  {
    title: 'AI-Powered Solutions',
    icon: <Zap size={24} />,
  }
];

const allNodes = [
  { isStart: true, title: <>Client</>, icon: <div className="w-3 h-3 bg-white rounded-full"></div>, color: 'violet-500' },
  ...reasons.map(r => ({ ...r, color: 'violet-500' })),
  { isEnd: true, title: <>Viyan<br/>Technologies</>, icon: <img src={getAssetPath('/logo.png')} className="w-8 h-8 mix-blend-screen brightness-0 invert" alt="Viyan" />, color: 'violet-primary' }
];

const WhyChoose = () => {
  // Mobile order: 1, 2, 3, 4, 5, 6, 7, 8
  // Desktop order (Zig-zag in 4 columns):
  // R1: Node0 (1), Node1 (2), Node2 (3), Node3 (4)
  // R2: Node7 (5), Node6 (6), Node5 (7), Node4 (8)

  return (
    <section id="solutions" className="relative flex flex-col items-center justify-center overflow-hidden pt-12 pb-24 lg:pt-16 lg:pb-36 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-wider text-slate-900 dark:text-white mb-6">
              Why Choose Viyan
            </h2>
            <h3 className="text-xl md:text-xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
              Your Partner in <span className="text-gradient">Digital Excellence</span>
            </h3>
            <p className="text-base text-slate-600 dark:text-slate-300">
              We engineer digital experiences designed to scale, convert, and dominate your industry.
            </p>
          </motion.div>
        </div>

        {/* Roadmap Grid Section (Responsive mobile 2-cols and desktop 4-cols) */}
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-20 md:gap-y-32 gap-x-4 md:gap-x-6 relative z-10">
            {allNodes.map((node, index) => {
              
              // Dynamic Grid Order
              const orderClasses = [
                'order-1 md:order-1',
                'order-2 md:order-2',
                'order-4 md:order-3',
                'order-3 md:order-4',
                'order-5 md:order-8',
                'order-6 md:order-7',
                'order-8 md:order-6',
                'order-7 md:order-5'
              ];
              const orderClass = orderClasses[index];
              
              const isUp = [1, 3, 4, 6].includes(index);
              const staggerClass = index === 0 
                ? 'translate-y-2 md:translate-y-5' 
                : index === 7 
                  ? 'translate-y-3 md:translate-y-8'
                  : isUp 
                    ? 'translate-y-0 md:-translate-y-24' 
                    : 'translate-y-4 md:translate-y-24';
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`h-full relative group ${orderClass}`}
                >

                  {/* Mobile Snake Connectors (Hidden on desktop) */}
                  <div className="block md:hidden absolute inset-0 pointer-events-none z-0">
                    {/* Node 0 (Client) */}
                    {index === 0 && (
                      <div className="absolute top-1/2 left-1/2 w-[calc(50%+1.5rem)] border-t-[3px] border-dashed border-violet-400 dark:border-violet-500" />
                    )}
                    {/* Node 1 */}
                    {index === 1 && (
                      <>
                        <div className="absolute top-1/2 left-[-1.5rem] w-[calc(50%+1.5rem)] border-t-[3px] border-dashed border-violet-400 dark:border-violet-500" />
                        <div className="absolute top-1/2 bottom-[-2.5rem] left-1/2 w-[3px] border-l-[3px] border-dashed border-violet-400 dark:border-violet-500" />
                      </>
                    )}
                    {/* Node 2 */}
                    {index === 2 && (
                      <>
                        <div className="absolute top-1/2 left-[-1.5rem] w-[calc(50%+1.5rem)] border-t-[3px] border-dashed border-violet-400 dark:border-violet-500" />
                        <div className="absolute top-[-2.5rem] bottom-[50%] left-1/2 w-[3px] border-l-[3px] border-dashed border-violet-400 dark:border-violet-500" />
                      </>
                    )}
                    {/* Node 3 */}
                    {index === 3 && (
                      <>
                        <div className="absolute top-1/2 left-1/2 w-[calc(50%+1.5rem)] border-t-[3px] border-dashed border-violet-400 dark:border-violet-500" />
                        <div className="absolute top-1/2 bottom-[-2.5rem] left-1/2 w-[3px] border-l-[3px] border-dashed border-violet-400 dark:border-violet-500" />
                      </>
                    )}
                    {/* Node 4 */}
                    {index === 4 && (
                      <>
                        <div className="absolute top-1/2 left-1/2 w-[calc(50%+1.5rem)] border-t-[3px] border-dashed border-violet-400 dark:border-violet-500" />
                        <div className="absolute top-[-2.5rem] bottom-[50%] left-1/2 w-[3px] border-l-[3px] border-dashed border-violet-400 dark:border-violet-500" />
                      </>
                    )}
                    {/* Node 5 */}
                    {index === 5 && (
                      <>
                        <div className="absolute top-1/2 left-[-1.5rem] w-[calc(50%+1.5rem)] border-t-[3px] border-dashed border-violet-400 dark:border-violet-500" />
                        <div className="absolute top-1/2 bottom-[-2.5rem] left-1/2 w-[3px] border-l-[3px] border-dashed border-violet-400 dark:border-violet-500" />
                      </>
                    )}
                    {/* Node 6 */}
                    {index === 6 && (
                      <>
                        <div className="absolute top-1/2 left-[-1.5rem] w-[calc(50%+1.5rem)] border-t-[3px] border-dashed border-violet-400 dark:border-violet-500" />
                        <div className="absolute top-[-2.5rem] bottom-[50%] left-1/2 w-[3px] border-l-[3px] border-dashed border-violet-400 dark:border-violet-500" />
                      </>
                    )}
                    {/* Node 7 (Viyan End) */}
                    {index === 7 && (
                      <div className="absolute top-1/2 left-1/2 w-[calc(50%+1.5rem)] border-t-[3px] border-dashed border-violet-400 dark:border-violet-500" />
                    )}
                  </div>

                  {/* Desktop Connectors (Hidden on mobile) */}
                  <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
                    {/* Node 0 starts from center */}
                    {index === 0 && (
                      <div className="absolute top-1/2 left-1/2 w-[calc(50%+1.5rem)] border-t-[2px] border-dashed border-violet-400 dark:border-violet-500" />
                    )}
                    {/* Node 1, 2 span fully across */}
                    {(index === 1 || index === 2) && (
                      <div className="absolute top-1/2 left-0 w-[calc(100%+1.5rem)] border-t-[2px] border-dashed border-violet-400 dark:border-violet-500" />
                    )}
                    {/* Row 1 End (Node 3) -> curve */}
                    {index === 3 && (
                      <>
                        <div className="absolute top-1/2 left-0 w-1/2 border-t-[2px] border-dashed border-violet-400 dark:border-violet-500" />
                        <div className="absolute top-1/2 left-1/2 w-[calc(50%+2.5rem)] h-[calc(50%+4rem)] border-t-[2px] border-r-[2px] border-dashed border-violet-400 dark:border-violet-500 rounded-tr-[4rem]" />
                      </>
                    )}
                    {/* Node 4 receives the curve (bottom half), and goes left */}
                    {index === 4 && (
                      <>
                        <div className="absolute bottom-[calc(50%-2px)] left-1/2 w-[calc(50%+2.5rem)] h-[calc(50%+4rem+2px)] border-b-[2px] border-r-[2px] border-dashed border-violet-400 dark:border-violet-500 rounded-br-[4rem]" />
                        <div className="absolute top-1/2 right-1/2 w-[calc(50%+1.5rem)] border-t-[2px] border-dashed border-violet-400 dark:border-violet-500" />
                      </>
                    )}
                    {/* Node 5, 6 draw across whole card and left gap */}
                    {(index === 5 || index === 6) && (
                      <div className="absolute top-1/2 right-0 w-[calc(100%+1.5rem)] border-t-[2px] border-dashed border-violet-400 dark:border-violet-500" />
                    )}
                    {/* Node 7 (Row 2 End) -> line ends at center */}
                    {index === 7 && (
                      <div className="absolute top-1/2 right-0 w-1/2 border-t-[2px] border-dashed border-violet-400 dark:border-violet-500" />
                    )}
                    {/* Vertical branches and nodes for staggered items */}
                    {index !== 0 && index !== 7 && (
                      <>
                        <div className={`absolute left-1/2 -translate-x-1/2 w-[2px] border-l-[2px] border-dashed border-violet-400 dark:border-violet-500 ${isUp ? 'bottom-1/2 h-24' : 'top-1/2 h-24'}`} />
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-[3px] border-violet-500 bg-slate-50 dark:bg-slate-900 z-10" />
                      </>
                    )}
                  </div>

                  {/* Wrapper for Timeline Effect */}
                  <div className={`w-full h-full flex items-center justify-center transition-transform duration-300 ${staggerClass}`}>
                    <div className="w-full h-auto p-2 sm:p-4 md:p-6 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-2 relative z-10 gap-3 md:gap-5 flex-col text-center">
                      
                      {/* Node Circle Container */}
                      <div className="z-20 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 shrink-0">
                        {node.isStart ? (
                          <div className="w-7 h-7 md:w-8 md:h-8 bg-fuchsia-500 text-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(240,46,194,0.5)] border-2 border-slate-50 dark:border-slate-900 transition-transform duration-300 group-hover:scale-110 relative">
                            <span className="absolute -inset-1.5 rounded-full bg-fuchsia-500/45 animate-pulse blur-[1px]" />
                            <span className="absolute inset-0 rounded-full bg-fuchsia-500/60 animate-ping" />
                            <div className="relative z-10 w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,1)]" />
                          </div>
                        ) : node.isEnd ? (
                          <div className="w-12 h-12 md:w-14 md:h-14 bg-violet-600 text-white rounded-full rounded-br-none rotate-45 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.12)] border-[3px] border-slate-50 dark:border-slate-900 transition-transform duration-300 group-hover:scale-110">
                            <div className="-rotate-45 flex items-center justify-center w-full h-full">
                              {node.icon}
                            </div>
                          </div>
                        ) : (
                          <div className="w-11 h-11 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-violet-100 to-violet-200 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center text-violet-primary dark:text-violet-accent transition-transform duration-300 group-hover:scale-110 shadow-inner border border-white/50 dark:border-white/10">
                            {React.cloneElement(node.icon, { className: 'w-5 h-5 md:w-6 md:h-6' })}
                          </div>
                        )}
                      </div>
                      
                      {/* Node Title */}
                      <h4 className="text-xs sm:text-sm md:text-base font-bold text-slate-900 dark:text-white text-center leading-tight">
                        {node.title}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;

