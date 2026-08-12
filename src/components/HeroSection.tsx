import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, CheckCircle2, Shield, Zap, Layers } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative py-12 sm:py-16 lg:py-24 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 dark:bg-rose-950/80 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400 text-xs font-extrabold uppercase tracking-widest"
            >
              <Sparkles className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
              <span>Website Template Boilerplate • 25% Screen Height</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tighter leading-tight"
            >
              25% Top Banner <br />
              <span className="text-indigo-600 dark:text-indigo-400">
                Website Template.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-medium"
            >
              A clean, modular website template featuring a top banner constrained to exactly 25% of the viewport height with image cycling and a left-anchored brand logo. Customize images, banner timing, and logo styling in real time.
            </motion.p>

            {/* Quick Benefits Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                '25vh Responsive Screen Height',
                'Cycling Image Slider with Controls',
                'Left-Anchored "YOUR LOGO" Badge',
                'Fully Customizable Live In-App'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-slate-800 dark:text-slate-200 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href="#features"
                className="px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm shadow-lg shadow-indigo-600/30 transition-all flex items-center gap-2 cursor-pointer active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                aria-label="Explore Template Features"
              >
                <span>Explore Template Features</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Metrics & Visual Bento Card in Vibrant Palette 3D Style */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-[32px] bg-white dark:bg-slate-900 border-b-4 border-r-4 border-slate-200 dark:border-slate-800 shadow-xl space-y-6"
            >
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    Banner Metrics
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                    Optimal screen height & composition
                  </p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-950 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-inner">
                  <Layers className="w-6 h-6" />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-[24px] bg-slate-50 dark:bg-slate-800 border-b-2 border-r-2 border-slate-200 dark:border-slate-700">
                  <span className="text-3xl font-black text-indigo-600 dark:text-indigo-400 block">
                    25%
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                    Screen Height
                  </span>
                </div>

                <div className="p-5 rounded-[24px] bg-amber-50 dark:bg-amber-950/40 border-b-2 border-r-2 border-amber-200 dark:border-amber-800">
                  <span className="text-3xl font-black text-amber-500 block">
                    4.0s
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                    Auto-Cycle
                  </span>
                </div>

                <div className="p-5 rounded-[24px] bg-rose-50 dark:bg-rose-950/40 border-b-2 border-r-2 border-rose-200 dark:border-rose-800">
                  <span className="text-3xl font-black text-rose-500 block">
                    Left
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                    Logo Anchor
                  </span>
                </div>

                <div className="p-5 rounded-[24px] bg-emerald-50 dark:bg-emerald-950/40 border-b-2 border-r-2 border-emerald-200 dark:border-emerald-800">
                  <span className="text-3xl font-black text-emerald-600 dark:text-emerald-400 block">
                    60fps
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                    Fluid Motion
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
