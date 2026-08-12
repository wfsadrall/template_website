import React, { useState } from 'react';
import {
  X,
  Sliders,
  Image as ImageIcon,
  Type,
  Eye,
  Plus,
  Trash2,
  Sparkles,
  RotateCcw,
  Copy,
  Check,
  Code
} from 'lucide-react';
import { BannerSlide, LogoConfig, BannerSettings, TemplateTheme } from '../types';

interface TemplateCustomizerProps {
  isOpen: boolean;
  onClose: () => void;
  slides: BannerSlide[];
  onUpdateSlides: (slides: BannerSlide[]) => void;
  logo: LogoConfig;
  onUpdateLogo: (logo: LogoConfig) => void;
  settings: BannerSettings;
  onUpdateSettings: (settings: BannerSettings) => void;
  theme: TemplateTheme;
  onUpdateTheme: (theme: TemplateTheme) => void;
  onResetToDefaults: () => void;
}

export const TemplateCustomizer: React.FC<TemplateCustomizerProps> = ({
  isOpen,
  onClose,
  slides,
  onUpdateSlides,
  logo,
  onUpdateLogo,
  settings,
  onUpdateSettings,
  theme,
  onUpdateTheme,
  onResetToDefaults
}) => {
  const [activeTab, setActiveTab] = useState<'banner' | 'logo' | 'slides' | 'export'>('banner');
  const [copiedCode, setCopiedCode] = useState(false);
  const [newSlideUrl, setNewSlideUrl] = useState('');
  const [newSlideTitle, setNewSlideTitle] = useState('');

  if (!isOpen) return null;

  const handleAddSlide = () => {
    if (!newSlideUrl.trim()) return;
    const newSlide: BannerSlide = {
      id: `slide-custom-${Date.now()}`,
      imageUrl: newSlideUrl.trim(),
      title: newSlideTitle.trim() || 'Custom Slide',
      subtitle: 'Added via Template Customizer',
      badge: 'User Image'
    };
    onUpdateSlides([...slides, newSlide]);
    setNewSlideUrl('');
    setNewSlideTitle('');
  };

  const handleRemoveSlide = (id: string) => {
    if (slides.length <= 1) return;
    onUpdateSlides(slides.filter((s) => s.id !== id));
  };

  const handleSlideChange = (id: string, field: keyof BannerSlide, value: string) => {
    onUpdateSlides(
      slides.map((s) => (s.id === id ? { ...s, [field]: value } : s))
    );
  };

  const exportCodeSnippet = `<div className="relative w-full overflow-hidden h-[25vh] min-h-[180px] bg-slate-950">
  {/* Logo on Left of Banner */}
  <div className="absolute top-4 left-6 z-20 flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/65 backdrop-blur-md border border-white/15">
    <div className="font-bold text-white">${logo.text}</div>
  </div>
  {/* Cycling Background Images */}
  {/* CSS height: 25vh */}
</div>`;

  const copyExportCode = () => {
    navigator.clipboard.writeText(exportCodeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/60 backdrop-blur-xs flex justify-end">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 h-full shadow-2xl border-l border-slate-200 dark:border-slate-800 flex flex-col transition-all animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/30">
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                Template Customizer
              </h3>
              <p className="text-xs text-rose-500 font-bold uppercase tracking-wider">
                Vibrant 25% Banner & Logo
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Customizer Tabs */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950/50 p-1 gap-1 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('banner')}
            className={`flex-1 py-2 rounded-md transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'banner'
                ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            Banner
          </button>
          <button
            onClick={() => setActiveTab('logo')}
            className={`flex-1 py-2 rounded-md transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'logo'
                ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Type className="w-3.5 h-3.5" />
            Logo
          </button>
          <button
            onClick={() => setActiveTab('slides')}
            className={`flex-1 py-2 rounded-md transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'slides'
                ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            Slides ({slides.length})
          </button>
          <button
            onClick={() => setActiveTab('export')}
            className={`flex-1 py-2 rounded-md transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'export'
                ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            Code
          </button>
        </div>

        {/* Tab Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {/* BANNER TAB */}
          {activeTab === 'banner' && (
            <div className="space-y-5">
              {/* Height Settings */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Banner Height: <span className="text-blue-600 dark:text-blue-400 font-bold">{settings.heightVh}% of screen ({settings.heightVh}vh)</span>
                  </label>
                  <button
                    onClick={() => onUpdateSettings({ ...settings, heightVh: 25 })}
                    className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                  >
                    Set to 25% Default
                  </button>
                </div>
                <input
                  type="range"
                  min="15"
                  max="50"
                  step="1"
                  value={settings.heightVh}
                  onChange={(e) =>
                    onUpdateSettings({ ...settings, heightVh: Number(e.target.value) })
                  }
                  className="w-full accent-blue-600 cursor-pointer"
                />
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  The top banner is configured to 25% of screen height (`25vh`) as requested.
                </p>
              </div>

              {/* Cycle Speed */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Cycle Speed: <span className="text-blue-600 dark:text-blue-400 font-bold">{settings.cycleIntervalMs / 1000}s per slide</span>
                </label>
                <input
                  type="range"
                  min="2000"
                  max="10000"
                  step="500"
                  value={settings.cycleIntervalMs}
                  onChange={(e) =>
                    onUpdateSettings({ ...settings, cycleIntervalMs: Number(e.target.value) })
                  }
                  className="w-full accent-blue-600 cursor-pointer"
                />
              </div>

              {/* Transition Style */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Slide Transition Effect
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['fade', 'slide', 'zoom'] as const).map((style) => (
                    <button
                      key={style}
                      onClick={() => onUpdateSettings({ ...settings, transitionStyle: style })}
                      className={`py-2 px-3 rounded-lg text-xs font-semibold capitalize border transition-all cursor-pointer ${
                        settings.transitionStyle === style
                          ? 'bg-blue-50 dark:bg-blue-950/80 border-blue-500 text-blue-600 dark:text-blue-400'
                          : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>

              {/* Overlay Opacity */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Dark Overlay Contrast: <span className="text-blue-600 dark:text-blue-400 font-bold">{settings.overlayOpacity}%</span>
                </label>
                <input
                  type="range"
                  min="10"
                  max="80"
                  step="5"
                  value={settings.overlayOpacity}
                  onChange={(e) =>
                    onUpdateSettings({ ...settings, overlayOpacity: Number(e.target.value) })
                  }
                  className="w-full accent-blue-600 cursor-pointer"
                />
              </div>

              {/* Toggles */}
              <div className="space-y-3 pt-2 border-t border-slate-200 dark:border-slate-800">
                <label className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-pointer">
                  <span>Auto-Play Image Cycling</span>
                  <input
                    type="checkbox"
                    checked={settings.autoPlay}
                    onChange={(e) => onUpdateSettings({ ...settings, autoPlay: e.target.checked })}
                    className="w-4 h-4 accent-blue-600 rounded cursor-pointer"
                  />
                </label>
                <label className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-pointer">
                  <span>Show Slide Dot Indicators</span>
                  <input
                    type="checkbox"
                    checked={settings.showDots}
                    onChange={(e) => onUpdateSettings({ ...settings, showDots: e.target.checked })}
                    className="w-4 h-4 accent-blue-600 rounded cursor-pointer"
                  />
                </label>
                <label className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-pointer">
                  <span>Show Manual Arrows</span>
                  <input
                    type="checkbox"
                    checked={settings.showArrows}
                    onChange={(e) => onUpdateSettings({ ...settings, showArrows: e.target.checked })}
                    className="w-4 h-4 accent-blue-600 rounded cursor-pointer"
                  />
                </label>
                <label className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-pointer">
                  <span>Show Captions & Badges</span>
                  <input
                    type="checkbox"
                    checked={settings.showCaptions}
                    onChange={(e) => onUpdateSettings({ ...settings, showCaptions: e.target.checked })}
                    className="w-4 h-4 accent-blue-600 rounded cursor-pointer"
                  />
                </label>
              </div>
            </div>
          )}

          {/* LOGO TAB */}
          {activeTab === 'logo' && (
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Logo Title
                </label>
                <input
                  type="text"
                  value={logo.text}
                  onChange={(e) => onUpdateLogo({ ...logo, text: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg text-sm border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  placeholder="Brand Name"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Tagline / Subtitle
                </label>
                <input
                  type="text"
                  value={logo.tagline}
                  onChange={(e) => onUpdateLogo({ ...logo, tagline: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg text-sm border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  placeholder="Tagline"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Logo Badge Variant
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(['transparent', 'glass', 'solid', 'minimal', 'gradient'] as const).map((variant) => (
                    <button
                      key={variant}
                      onClick={() => onUpdateLogo({ ...logo, variant })}
                      className={`py-2 px-3 rounded-lg text-xs font-semibold capitalize border transition-all cursor-pointer ${
                        logo.variant === variant
                          ? 'bg-blue-50 dark:bg-blue-950/80 border-blue-500 text-blue-600 dark:text-blue-400'
                          : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      {variant === 'transparent' ? 'No Background (Clean)' : variant}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Custom Logo Image URL (Optional)
                </label>
                <input
                  type="text"
                  value={logo.imageUrl || ''}
                  onChange={(e) => onUpdateLogo({ ...logo, imageUrl: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg text-sm border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  placeholder="https://example.com/logo.png"
                />
              </div>

              <label className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-pointer pt-2">
                <span>Show Tagline under Logo</span>
                <input
                  type="checkbox"
                  checked={logo.showTagline}
                  onChange={(e) => onUpdateLogo({ ...logo, showTagline: e.target.checked })}
                  className="w-4 h-4 accent-blue-600 rounded cursor-pointer"
                />
              </label>
            </div>
          )}

          {/* SLIDES TAB */}
          {activeTab === 'slides' && (
            <div className="space-y-5">
              {/* Add New Slide Form */}
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Plus className="w-4 h-4 text-blue-600" />
                  Add Custom Image Slide
                </h4>
                <input
                  type="text"
                  value={newSlideUrl}
                  onChange={(e) => setNewSlideUrl(e.target.value)}
                  placeholder="Image URL (e.g., Unsplash or HTTPS link)"
                  className="w-full px-3 py-1.5 rounded-lg text-xs border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                />
                <input
                  type="text"
                  value={newSlideTitle}
                  onChange={(e) => setNewSlideTitle(e.target.value)}
                  placeholder="Slide Title (optional)"
                  className="w-full px-3 py-1.5 rounded-lg text-xs border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                />
                <button
                  onClick={handleAddSlide}
                  disabled={!newSlideUrl.trim()}
                  className="w-full py-2 rounded-lg text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 transition-all cursor-pointer"
                >
                  Add Slide to Cycling Banner
                </button>
              </div>

              {/* List of current slides */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Active Cycling Banner Images ({slides.length})
                </h4>
                {slides.map((s, idx) => (
                  <div
                    key={s.id}
                    className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 space-y-2 shadow-2xs"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={s.imageUrl}
                        alt={s.title}
                        referrerPolicy="no-referrer"
                        className="w-12 h-10 object-cover rounded-md border border-slate-200 dark:border-slate-700 bg-slate-100 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <span className="text-xs font-bold text-slate-900 dark:text-white block truncate">
                          #{idx + 1}: {s.title}
                        </span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 block truncate">
                          {s.badge || 'Slide'}
                        </span>
                      </div>
                      <button
                        onClick={() => handleRemoveSlide(s.id)}
                        disabled={slides.length <= 1}
                        className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 disabled:opacity-30 cursor-pointer"
                        title="Delete slide"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <input
                      type="text"
                      value={s.title}
                      onChange={(e) => handleSlideChange(s.id, 'title', e.target.value)}
                      className="w-full px-2.5 py-1 text-xs rounded border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CODE EXPORT TAB */}
          {activeTab === 'export' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Copy the code snippet below to embed this 25% screen top banner with cycling images into your own website project:
              </p>
              <div className="relative">
                <pre className="p-3.5 rounded-xl bg-slate-950 text-slate-200 text-[11px] font-mono overflow-x-auto border border-slate-800 leading-relaxed">
                  {exportCodeSnippet}
                </pre>
                <button
                  onClick={copyExportCode}
                  className="absolute top-2 right-2 px-2.5 py-1 rounded bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-bold flex items-center gap-1 shadow-sm cursor-pointer"
                >
                  {copiedCode ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  {copiedCode ? 'Copied!' : 'Copy Snippet'}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center justify-between">
          <button
            onClick={onResetToDefaults}
            className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 flex items-center gap-1 cursor-pointer font-medium"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset Defaults
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-bold bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 shadow-xs cursor-pointer transition-all"
          >
            Apply & Close
          </button>
        </div>
      </div>
    </div>
  );
};
