import React, { useState, useEffect } from 'react';
import { Banner } from './components/Banner';
import { FruitGrid } from './components/FruitGrid';
import { Sun, Moon } from 'lucide-react';
import {
  defaultSlides,
  defaultLogo,
  defaultBannerSettings,
  defaultTheme
} from './data/initialData';
import { BannerSlide, LogoConfig, BannerSettings, TemplateTheme } from './types';

export default function App() {
  const [slides] = useState<BannerSlide[]>(defaultSlides);
  const [logo] = useState<LogoConfig>(defaultLogo);
  const [settings] = useState<BannerSettings>(defaultBannerSettings);
  const [theme, setTheme] = useState<TemplateTheme>(defaultTheme);

  // Dark mode handler
  useEffect(() => {
    if (theme.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme.darkMode]);

  const handleToggleDarkMode = () => {
    setTheme((prev) => ({ ...prev, darkMode: !prev.darkMode }));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors relative">
      {/* Dark Mode Floating Toggle */}
      <div className="fixed top-3 right-3 z-50">
        <button
          onClick={handleToggleDarkMode}
          className="p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white backdrop-blur-md shadow-lg border border-white/20 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          title={theme.darkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
          aria-label={theme.darkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
        >
          {theme.darkMode ? <Sun className="w-4 h-4 text-amber-400" aria-hidden="true" /> : <Moon className="w-4 h-4 text-slate-200" aria-hidden="true" />}
        </button>
      </div>

      {/* TOP BANNER WITH LOGO */}
      <Banner
        slides={slides}
        logo={logo}
        settings={settings}
      />

      {/* FRUIT SHOP GRID */}
      <main>
        <FruitGrid />
      </main>
    </div>
  );
}
