import React, { useState } from 'react';
import { Sliders, Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { NavigationItem } from '../types';

interface NavigationProps {
  items: NavigationItem[];
  activeSection: string;
  onSelectSection: (id: string) => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  items,
  activeSection,
  onSelectSection,
  darkMode,
  onToggleDarkMode
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string, id: string) => {
    onSelectSection(id);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      aria-label="Main Navigation"
      className="sticky top-0 z-30 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors shadow-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Left: Template Nav Indicator */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800">
              Website Template
            </span>
          </div>

          {/* Center: Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1" role="tablist" aria-label="Section navigation tabs">
            {items.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleNavClick(item.href, item.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Right: Dark Mode Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              title={darkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
              aria-label={darkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
              aria-pressed={darkMode}
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" aria-hidden="true" /> : <Moon className="w-4 h-4" aria-hidden="true" />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden px-4 pt-2 pb-4 space-y-1 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800"
        >
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.href, item.id)}
              className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <span>{item.label}</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" aria-hidden="true" />
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};
