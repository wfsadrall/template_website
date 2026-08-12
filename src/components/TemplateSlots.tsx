import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutTemplate,
  Code2,
  FileText,
  Grid,
  Check,
  Copy,
  Sliders,
  Layers,
  Sparkles,
  ArrowRight,
  Monitor,
  Smartphone,
  Info
} from 'lucide-react';
import { LogoConfig, BannerSettings } from '../types';

interface TemplateSlotsProps {
  logo: LogoConfig;
  settings: BannerSettings;
}

export const TemplateSlots: React.FC<TemplateSlotsProps> = ({
  logo,
  settings
}) => {
  const [activeTab, setActiveTab] = useState<'slots' | 'presets' | 'code'>('slots');
  const [activePreset, setActivePreset] = useState<'landing' | 'editorial' | 'portfolio'>('landing');
  const [copiedCode, setCopiedCode] = useState(false);

  const sampleCodeSnippet = `import React from 'react';
import { Banner } from './components/Banner';

export default function MyWebsite() {
  const slides = [
    { id: '1', imageUrl: '/path/to/image1.jpg', title: 'Slide Title 1', subtitle: 'Subtitle 1' },
    { id: '2', imageUrl: '/path/to/image2.jpg', title: 'Slide Title 2', subtitle: 'Subtitle 2' },
  ];

  const logo = {
    text: '${logo.text}',
    tagline: '${logo.tagline}',
    variant: '${logo.variant}',
    imageUrl: '${logo.imageUrl || ''}'
  };

  return (
    <div className="min-h-screen">
      {/* 25% Screen Height Top Banner with Left Logo */}
      <Banner
        slides={slides}
        logo={logo}
        settings={{
          heightVh: ${settings.heightVh},
          cycleIntervalMs: ${settings.cycleIntervalMs},
          autoPlay: ${settings.autoPlay},
          overlayGradient: ${settings.overlayGradient}
        }}
      />

      {/* Your Body Content Slot Goes Here */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1>Welcome to my website</h1>
      </main>
    </div>
  );
}`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(sampleCodeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section className="py-8 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* TEMPLATE SYSTEM CONTROL BAR */}
        <div className="p-4 sm:p-6 rounded-[28px] bg-white dark:bg-slate-900 border-b-4 border-r-4 border-slate-200 dark:border-slate-800 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 shrink-0">
              <LayoutTemplate className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 font-black text-[10px] uppercase tracking-wider">
                  Boilerplate Spec
                </span>
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                  Clean Modular Template Architecture
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                Website Template Workspace
              </h2>
            </div>
          </div>

          {/* View Tab Switcher */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 w-full md:w-auto overflow-x-auto">
            <button
              onClick={() => setActiveTab('slots')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'slots'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Layout Slots</span>
            </button>

            <button
              onClick={() => setActiveTab('presets')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'presets'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Grid className="w-4 h-4" />
              <span>Page Presets</span>
            </button>

            <button
              onClick={() => setActiveTab('code')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'code'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Code2 className="w-4 h-4" />
              <span>React Code Snippet</span>
            </button>
          </div>
        </div>

        {/* TAB CONTENT 1: LAYOUT SLOTS STRUCTURE */}
        {activeTab === 'slots' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Header info */}
            <div className="p-6 rounded-[24px] bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900 flex items-start gap-3">
              <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h3 className="text-sm font-extrabold text-indigo-950 dark:text-indigo-200">
                  How This Website Template Works
                </h3>
                <p className="text-xs text-indigo-800 dark:text-indigo-300 font-medium leading-relaxed">
                  This modular website template provides structured content slots for headers, hero titles, component grids, and footers.
                </p>
              </div>
            </div>

            {/* Visual Bounding Box Layout Slots */}
            <div className="space-y-4">
              <h3 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-wider text-xs">
                Template Container Mapping
              </h3>

              {/* Slot 1: Top Banner Slot Indicator */}
              <div className="p-5 rounded-2xl bg-indigo-950 text-white border-2 border-dashed border-indigo-400/60 relative overflow-hidden flex items-center justify-between">
                <div className="flex items-center gap-3 z-10">
                  <span className="px-2.5 py-1 rounded-md bg-rose-500 text-white text-[10px] font-black uppercase tracking-wider">
                    SLOT 1 (Header Slot)
                  </span>
                  <div>
                    <h4 className="text-sm font-extrabold text-white">Top Header & Navigation Slot</h4>
                    <p className="text-xs text-indigo-200 font-medium">Header container area for logo and main site navigation</p>
                  </div>
                </div>
              </div>

              {/* Slot 2: Main Body Container Slot */}
              <div className="p-8 rounded-[32px] bg-white dark:bg-slate-900 border-2 border-dashed border-slate-300 dark:border-slate-700 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-indigo-600 text-white text-[10px] font-black uppercase tracking-wider">
                      SLOT 2 (Main Container)
                    </span>
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                      `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
                    </span>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    Active Content Area
                  </span>
                </div>

                {/* Sub-Slots Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-black text-xs flex items-center justify-center">
                      A1
                    </div>
                    <h5 className="text-sm font-extrabold text-slate-900 dark:text-white">Hero / Heading Slot</h5>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                      Main page title, introductory text, primary CTA buttons or search controls.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-3">
                    <div className="w-8 h-8 rounded-lg bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 font-black text-xs flex items-center justify-center">
                      A2
                    </div>
                    <h5 className="text-sm font-extrabold text-slate-900 dark:text-white">Grid / Component Slot</h5>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                      Card lists, feature highlights, product showcases, or interactive widgets.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 font-black text-xs flex items-center justify-center">
                      A3
                    </div>
                    <h5 className="text-sm font-extrabold text-slate-900 dark:text-white">Sidebar / Context Slot</h5>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                      Filtering controls, quick links, related metadata, or newsletter subscriptions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Slot 3: Footer Slot */}
              <div className="p-5 rounded-2xl bg-slate-100 dark:bg-slate-800 border-2 border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded-md bg-slate-700 text-white text-[10px] font-black uppercase tracking-wider">
                    SLOT 3 (Footer)
                  </span>
                  <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
                    Template Footer & Copyright Information
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB CONTENT 2: PAGE PRESETS */}
        {activeTab === 'presets' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Preset Selector Buttons */}
            <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-4 overflow-x-auto">
              <button
                onClick={() => setActivePreset('landing')}
                className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                  activePreset === 'landing'
                    ? 'bg-rose-500 text-white shadow-md'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                1. Landing Page View
              </button>
              <button
                onClick={() => setActivePreset('editorial')}
                className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                  activePreset === 'editorial'
                    ? 'bg-rose-500 text-white shadow-md'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                2. Editorial / Blog Article View
              </button>
              <button
                onClick={() => setActivePreset('portfolio')}
                className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                  activePreset === 'portfolio'
                    ? 'bg-rose-500 text-white shadow-md'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                3. Portfolio / Media View
              </button>
            </div>

            {/* Preset 1: Landing Page Preview */}
            {activePreset === 'landing' && (
              <div className="p-8 rounded-[32px] bg-white dark:bg-slate-900 border-b-4 border-r-4 border-slate-200 dark:border-slate-800 space-y-8">
                <div className="max-w-3xl space-y-3">
                  <span className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-xs font-black uppercase tracking-wider">
                    Landing Page Preset
                  </span>
                  <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                    Clean Digital Experience Below Top Banner
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                    This layout structure demonstrates how primary hero messaging, key feature cards, and quick call-to-actions flow cleanly right underneath the 25% height top banner.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: 'Responsive Top Banner', desc: 'Maintains 25% screen height with absolute aspect ratio lock.' },
                    { title: 'Left Brand Anchoring', desc: 'Logo badge stays in fixed top-left position over image slides.' },
                    { title: 'Auto Image Carousel', desc: 'Seamlessly transitions high resolution images at configurable intervals.' }
                  ].map((item, idx) => (
                    <div key={idx} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border-b-2 border-r-2 border-slate-200 dark:border-slate-700 space-y-2">
                      <h4 className="text-base font-extrabold text-slate-900 dark:text-white">{item.title}</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Preset 2: Editorial Preview */}
            {activePreset === 'editorial' && (
              <div className="p-8 rounded-[32px] bg-white dark:bg-slate-900 border-b-4 border-r-4 border-slate-200 dark:border-slate-800 space-y-6">
                <div className="border-b border-slate-100 dark:border-slate-800 pb-4 space-y-2">
                  <span className="px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 text-xs font-black uppercase tracking-wider">
                    Editorial Article Preset
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                    Designing Effective Viewport-Constrained Banners
                  </h3>
                  <p className="text-xs text-slate-400 font-semibold">Published August 12, 2026 • 5 min read</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-8 space-y-4 text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                    <p>
                      When constructing web templates, constraining hero image banners to 25% of the viewport height ensures that users immediately see both the visual identity and the primary page headline without forced scrolling.
                    </p>
                    <p>
                      The left-anchored brand mark creates a strong visual anchor point, allowing the remaining banner width to cycle through high-resolution background imagery dynamically.
                    </p>
                  </div>

                  <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 space-y-3">
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white">Template Meta</h4>
                    <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1.5 font-medium">
                      <div>• Height: 25vh</div>
                      <div>• Auto Play: {settings.autoPlay ? 'Enabled' : 'Disabled'}</div>
                      <div>• Cycle Interval: {settings.cycleIntervalMs / 1000}s</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Preset 3: Portfolio Preview */}
            {activePreset === 'portfolio' && (
              <div className="p-8 rounded-[32px] bg-white dark:bg-slate-900 border-b-4 border-r-4 border-slate-200 dark:border-slate-800 space-y-6">
                <div className="space-y-2">
                  <span className="px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 text-xs font-black uppercase tracking-wider">
                    Media Grid Preset
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                    Visual Showcase & Grid Layout
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-40 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-xs font-bold text-slate-400">
                      Media Card Slot #{i}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* TAB CONTENT 3: REACT CODE SNIPPET */}
        {activeTab === 'code' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 sm:p-8 rounded-[32px] bg-slate-900 text-white border-4 border-slate-800 space-y-4"
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-indigo-400" />
                  <span>Banner.tsx Component Integration</span>
                </h3>
                <p className="text-xs text-slate-400 font-medium">Copy this snippet to use the 25% top banner in any React app</p>
              </div>

              <button
                onClick={handleCopyCode}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer active:scale-95"
              >
                {copiedCode ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                <span>{copiedCode ? 'Copied Code!' : 'Copy Snippet'}</span>
              </button>
            </div>

            <pre className="p-4 rounded-2xl bg-slate-950 border border-slate-800 overflow-x-auto text-xs font-mono text-indigo-200 leading-relaxed">
              <code>{sampleCodeSnippet}</code>
            </pre>
          </motion.div>
        )}

      </div>
    </section>
  );
};
