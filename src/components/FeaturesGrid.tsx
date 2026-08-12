import React from 'react';
import { motion } from 'motion/react';
import {
  LayoutTemplate,
  Images,
  ShieldCheck,
  Sliders,
  Smartphone,
  Zap,
  Check
} from 'lucide-react';
import { FeatureItem } from '../types';

interface FeaturesGridProps {
  features: FeatureItem[];
}

export const FeaturesGrid: React.FC<FeaturesGridProps> = ({ features }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'LayoutTemplate':
        return <LayoutTemplate className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case 'Images':
        return <Images className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Sliders':
        return <Sliders className="w-6 h-6 text-amber-600 dark:text-amber-400" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-sky-600 dark:text-sky-400" />;
      case 'Zap':
      default:
        return <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />;
    }
  };

  return (
    <section id="features" className="py-16 sm:py-24 bg-white dark:bg-slate-900 transition-colors border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-rose-100 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400 font-extrabold text-xs uppercase tracking-widest">
            Template Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Designed for Modern Web Apps
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 font-medium">
            Every component is crafted for modularity, accessibility, and vivid aesthetic appeal.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-8 rounded-[32px] bg-slate-50 dark:bg-slate-950 border-b-4 border-r-4 border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 group-hover:scale-105 transition-transform">
                    {getIcon(feature.icon)}
                  </div>
                  {feature.badge && (
                    <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-rose-500 text-white shadow-xs">
                      {feature.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 text-xs text-indigo-600 dark:text-indigo-400 font-extrabold uppercase tracking-wider">
                <Check className="w-4 h-4 text-emerald-500" />
                <span>Production Ready</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
