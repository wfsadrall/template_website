import React, { useState, useEffect } from 'react';
import { Banner } from './components/Banner';
import { ContactFooter } from './components/ContactFooter';
import { Sun, Moon, LayoutGrid, Globe, Compass, Sparkles, Mail } from 'lucide-react';
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
  const [activeTab, setActiveTab] = useState('all');

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

  const handleSelectTab = (tabId: string) => {
    setActiveTab(tabId);
    if (tabId === 'contact') {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const tabs = [
    { id: 'all', label: 'All Content', icon: LayoutGrid },
    { id: 'overview', label: 'Overview', icon: Globe },
    { id: 'explore', label: 'Explore', icon: Compass },
    { id: 'horizons', label: 'Horizons', icon: Sparkles },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors selection:bg-indigo-500 selection:text-white relative">
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

      {/* TOP BANNER */}
      <Banner
        slides={slides}
        logo={logo}
        settings={settings}
        activeNavTab={activeTab}
        onSelectNavTab={handleSelectTab}
      />

      {/* STICKY TAB NAVIGATION BAR */}
      <nav aria-label="Page Tabs" className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start sm:justify-center gap-1 sm:gap-2 overflow-x-auto py-3 scrollbar-none">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleSelectTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25 scale-[1.02]'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400 dark:text-slate-500'}`} aria-hidden="true" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* CONTENT BELOW BANNER */}
      <main className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-12 sm:py-16 space-y-16">
        {/* Section 1: Overview */}
        {(activeTab === 'all' || activeTab === 'overview') && (
          <section id="section-overview" className="transition-all duration-300">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
              Template title
            </h1>
            <div className="flex flex-col sm:flex-row items-start gap-8 lg:gap-12">
              <img
                src="/src/assets/images/earth_view_globe_1786552322747.jpg"
                alt="Planet Earth in space"
                referrerPolicy="no-referrer"
                className="w-full sm:w-72 lg:w-80 h-64 sm:h-72 object-cover rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 shrink-0"
              />
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed flex-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </section>
        )}

        {/* Section 2: Explore */}
        {(activeTab === 'all' || activeTab === 'explore') && (
          <section id="section-explore" className="transition-all duration-300">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
              Explore the Cosmos
            </h1>
            <div className="flex flex-col sm:flex-row items-start justify-between gap-8 lg:gap-12">
              <div className="space-y-4 flex-1">
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula.
                </p>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purpureus. Ut tincidunt tincidunt erat. Etiam feugiat lorem non metus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.
                </p>
              </div>
              <img
                src="/src/assets/images/cosmic_galaxy_view_1786552422756.jpg"
                alt="Spiral galaxy in deep space"
                referrerPolicy="no-referrer"
                className="w-full sm:w-72 lg:w-80 h-64 sm:h-72 object-cover rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 shrink-0 sm:ml-auto"
              />
            </div>
          </section>
        )}

        {/* Section 3: Horizons */}
        {(activeTab === 'all' || activeTab === 'horizons') && (
          <section id="section-horizons" className="transition-all duration-300">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
              Infinite Horizons
            </h1>
            <div className="flex flex-col sm:flex-row items-start justify-between gap-8 lg:gap-12">
              <div className="space-y-4 flex-1">
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc.
                </p>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  Sed lectus. Integer ultrices magna egestas urna. Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus.
                </p>
              </div>
              <img
                src="/src/assets/images/deep_space_horizon_1786552435971.jpg"
                alt="Deep space horizon with satellite"
                referrerPolicy="no-referrer"
                className="w-full sm:w-72 lg:w-80 h-64 sm:h-72 object-cover rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 shrink-0 sm:ml-auto"
              />
            </div>
          </section>
        )}
      </main>

      {/* DARK CONTACT SECTION AT BOTTOM OF PAGE */}
      <ContactFooter logo={logo} />
    </div>
  );
}
