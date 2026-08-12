import React from 'react';
import { motion } from 'motion/react';
import { Palette, Code2, Sparkles, Check, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  services: ServiceItem[];
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette':
        return <Palette className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-6 h-6 text-amber-600 dark:text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-rose-100 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400 font-extrabold text-xs uppercase tracking-widest">
            Professional Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Tailored Development & Design Packages
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 font-medium">
            End-to-end solutions designed for startups, brands, and enterprise digital tools.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-8 rounded-[32px] bg-white dark:bg-slate-900 border-b-4 border-r-4 border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-2xl transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="p-3.5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 w-fit border border-indigo-100 dark:border-indigo-900">
                  {getIcon(service.icon)}
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-xs text-rose-500 font-bold uppercase tracking-wider mt-1">
                    {service.tagline}
                  </p>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  {service.description}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-black text-slate-900 dark:text-slate-200 uppercase tracking-wider block">
                    Key Deliverables:
                  </span>
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                      <Check className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">Pricing</span>
                  <span className="text-base font-black text-indigo-600 dark:text-indigo-400">
                    {service.price}
                  </span>
                </div>
                <a
                  href="#contact"
                  className="p-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/20 transition-all cursor-pointer active:scale-95"
                >
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
