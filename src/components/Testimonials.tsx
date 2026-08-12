import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-rose-100 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400 font-extrabold text-xs uppercase tracking-widest">
            Client Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Trusted by Creators & Designers
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-8 rounded-[32px] bg-slate-50 dark:bg-slate-950 border-b-4 border-r-4 border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: t.rating }).map((_, rIdx) => (
                      <Star key={rIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-indigo-300 dark:text-indigo-900" />
                </div>

                <p className="text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed font-medium">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-2">
                <img
                  src={t.avatar}
                  alt={t.name}
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-2xl object-cover border-2 border-indigo-500/30"
                />
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">{t.name}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                    {t.role}, <span className="font-bold text-indigo-600 dark:text-indigo-400">{t.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
