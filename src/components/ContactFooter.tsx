import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import { LogoConfig } from '../types';

interface ContactFooterProps {
  logo: LogoConfig;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ logo }) => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <footer id="contact" className="bg-slate-950 text-slate-200 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Form */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-rose-950 text-rose-400 border border-rose-800 font-extrabold text-xs uppercase tracking-widest">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-3">
                Let's Build Something Great
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 font-medium">
                Have questions about this website template or need custom banner integrations? Drop us a line.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold">Message Sent Successfully!</h4>
                  <p className="text-xs text-emerald-400/80">Thank you for reaching out. We will get back to you shortly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-2xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-hidden focus:border-indigo-500"
                  />
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="Your Email Address"
                    className="w-full px-4 py-3 rounded-2xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-hidden focus:border-indigo-500"
                  />
                </div>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Your Message..."
                  className="w-full px-4 py-3 rounded-2xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-hidden focus:border-indigo-500 resize-none"
                />
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-indigo-600/30 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Info & Newsletter */}
          <div className="lg:col-span-5 space-y-8 lg:pl-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white font-black text-xl flex items-center justify-center shadow-lg shadow-indigo-600/30">
                  {logo.text.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-white">{logo.text}</h3>
                  <p className="text-xs text-indigo-300 font-bold uppercase tracking-wider">{logo.tagline}</p>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-400 pt-2 font-medium">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rose-400" />
                  <span>100 Innovation Way, Suite 400, San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-rose-400" />
                  <span>contact@template.io</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-rose-400" />
                  <span>+1 (800) 555-0199</span>
                </div>
              </div>
            </div>

            {/* Description Box */}
            <div className="p-6 rounded-[28px] bg-slate-900 border-b-4 border-r-4 border-slate-800 space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-white flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" aria-hidden="true" />
                About This Template
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                This template offers a high-performance, modular layout designed for immersive space visuals and editorial storytelling. Built with React and Tailwind CSS, it features dynamic banners, responsive content grids, and dark theme support for seamless cross-device experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Sub-footer copyright */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {logo.text}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#top" className="hover:text-slate-300">Back to Top ↑</a>
            <span>•</span>
            <span className="text-slate-400">25% Screen Banner Template</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
