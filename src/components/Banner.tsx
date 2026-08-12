import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Sparkles,
  Layers,
  Globe,
  Compass,
  Building,
  Maximize2,
  Minimize2
} from 'lucide-react';
import { BannerSlide, LogoConfig, BannerSettings } from '../types';

interface BannerProps {
  slides: BannerSlide[];
  logo: LogoConfig;
  settings: BannerSettings;
  onOpenCustomizer?: () => void;
  activeNavTab?: string;
  onSelectNavTab?: (id: string) => void;
}

export const Banner: React.FC<BannerProps> = ({
  slides,
  logo,
  settings,
  onOpenCustomizer,
  activeNavTab,
  onSelectNavTab
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(settings.autoPlay);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
  const [isHovered, setIsHovered] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Fallback image if loaded image errors out
  const getSlideImage = (slide: BannerSlide) => {
    if (imgErrors[slide.id]) {
      return 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80';
    }
    return slide.imageUrl;
  };

  const nextSlide = useCallback(() => {
    if (slides.length <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    if (slides.length <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Handle auto-cycling timer
  useEffect(() => {
    setIsPlaying(settings.autoPlay);
  }, [settings.autoPlay]);

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);

    if (isPlaying && !isHovered && slides.length > 1) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, settings.cycleIntervalMs);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, isHovered, slides.length, settings.cycleIntervalMs, nextSlide]);

  const currentSlide = slides[currentIndex] || slides[0];

  // Helper icon render for logo fallback
  const renderLogoIcon = () => {
    switch (logo.iconName) {
      case 'Layers':
        return <Layers className="w-6 h-6 text-blue-400" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-indigo-400" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-cyan-400" />;
      case 'Building':
        return <Building className="w-6 h-6 text-teal-400" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-6 h-6 text-blue-400" />;
    }
  };

  // Keyboard navigation for banner carousel
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    } else if (e.key === ' ') {
      e.preventDefault();
      setIsPlaying((prev) => !prev);
    }
  };

  return (
    <div
      id="top-banner"
      id-selector="top-banner-container"
      role="region"
      aria-roledescription="carousel"
      aria-label="Space photo banner carousel"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="relative w-full overflow-hidden select-none bg-slate-950 text-white shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
      style={{
        height: isFullscreen ? '100vh' : `${settings.heightVh}vh`,
        minHeight: '180px'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Screen Reader Live Announcement for Active Slide */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {`Displaying slide ${currentIndex + 1} of ${slides.length}: ${currentSlide.title || 'Space View'}`}
      </div>

      {/* Background Cycling Image Slider */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentSlide.id + '-' + currentIndex}
          role="group"
          aria-roledescription="slide"
          aria-label={`Slide ${currentIndex + 1} of ${slides.length}`}
          initial={
            settings.transitionStyle === 'slide'
              ? { x: '100%', opacity: 0.8 }
              : settings.transitionStyle === 'zoom'
              ? { scale: 1.15, opacity: 0 }
              : { opacity: 0 }
          }
          animate={{ x: '0%', scale: 1, opacity: 1 }}
          exit={
            settings.transitionStyle === 'slide'
              ? { x: '-100%', opacity: 0.8 }
              : settings.transitionStyle === 'zoom'
              ? { scale: 0.95, opacity: 0 }
              : { opacity: 0 }
          }
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={getSlideImage(currentSlide)}
            alt={currentSlide.title || 'Space view image'}
            referrerPolicy="no-referrer"
            onError={() => {
              setImgErrors((prev) => ({ ...prev, [currentSlide.id]: true }));
            }}
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark & Vibrant Overlay for optimal design theme */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 pointer-events-none ${
          settings.overlayGradient
            ? 'bg-gradient-to-r from-indigo-950/90 via-slate-950/65 to-slate-950/40 dark:from-black/90 dark:via-black/70 dark:to-transparent'
            : 'bg-slate-950'
        }`}
        style={{
          opacity: (settings.overlayOpacity ?? 45) / 100
        }}
        aria-hidden="true"
      />

      {/* Decorative Vibrant Palette Skew Shapes in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-35 z-5" aria-hidden="true">
        <div className="w-1/3 h-full bg-rose-500 transform skew-x-[-12deg] -translate-x-12 blur-xl" />
        <div className="w-1/4 h-full bg-amber-400 transform skew-x-[-12deg] translate-x-48 blur-2xl" />
      </div>

      {/* BANNER CONTENT WRAPPER */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* LOGO ON THE LEFT OF THE BANNER */}
        <div
          id="banner-logo"
          id-selector="banner-logo-wrapper"
          className="flex items-center gap-3 sm:gap-4 shrink-0"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            className={`flex items-center gap-3 transition-all ${
              logo.variant === 'transparent'
                ? 'bg-transparent border-none p-0 shadow-none text-white drop-shadow-lg'
                : logo.variant === 'solid'
                ? 'p-2 sm:p-2.5 sm:pr-5 rounded-2xl border backdrop-blur-md shadow-2xl bg-slate-900 border-indigo-500/50 text-white'
                : logo.variant === 'minimal'
                ? 'p-2 sm:p-2.5 sm:pr-5 rounded-2xl border backdrop-blur-md shadow-2xl bg-slate-900/50 border-white/20 text-white'
                : logo.variant === 'gradient'
                ? 'p-2 sm:p-2.5 sm:pr-5 rounded-2xl border backdrop-blur-md shadow-2xl bg-gradient-to-r from-indigo-600/90 via-indigo-700/90 to-rose-600/90 border-amber-400/40 text-white shadow-indigo-500/20'
                : 'p-2 sm:p-2.5 sm:pr-5 rounded-2xl border backdrop-blur-md shadow-2xl bg-slate-900/75 border-white/20 text-white'
            }`}
          >
            {/* Logo Image or Rotated Icon Badge */}
            {logo.imageUrl ? (
              <div
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl overflow-hidden shrink-0 flex items-center justify-center ${
                  logo.variant === 'transparent'
                    ? 'bg-transparent'
                    : 'border-2 border-white/40 bg-white shadow-xl rotate-2 hover:rotate-0 transition-transform'
                }`}
              >
                <img
                  src={logo.imageUrl}
                  alt={logo.text}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>
            ) : (
              <div
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                  logo.variant === 'transparent'
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                    : 'bg-white border-2 border-white/40 shadow-xl rotate-3 hover:rotate-0 transition-transform'
                }`}
              >
                <div
                  className={
                    logo.variant === 'transparent'
                      ? 'w-6 h-6 flex items-center justify-center text-white'
                      : 'w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center text-white'
                  }
                >
                  {renderLogoIcon()}
                </div>
              </div>
            )}

            {/* Logo Text and Tagline */}
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tighter text-white flex items-center gap-1.5 leading-none drop-shadow-md">
                {logo.text}
                <span className="w-2 h-2 rounded-full bg-amber-400 inline-block animate-pulse shadow-xs" aria-hidden="true" />
              </span>
              {logo.showTagline && (
                <span className="text-[10px] sm:text-[11px] tracking-widest text-indigo-200 uppercase font-black mt-0.5">
                  {logo.tagline}
                </span>
              )}
            </div>
          </motion.div>
        </div>



        {/* RIGHT ACTION CONTROLS */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Customizer Launcher Button */}
          {onOpenCustomizer && (
            <button
              id="open-customizer-btn"
              onClick={onOpenCustomizer}
              className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-all flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              title="Customize Banner & Logo"
              aria-label="Customize Banner & Logo"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-300" aria-hidden="true" />
              <span className="hidden sm:inline">Customize Banner</span>
            </button>
          )}

          {/* Fullscreen Toggle */}
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-1.5 sm:p-2 rounded-lg bg-black/40 hover:bg-black/60 text-slate-200 hover:text-white border border-white/10 backdrop-blur-md transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            title={isFullscreen ? 'Restore Banner Height' : 'View Fullscreen Banner'}
            aria-label={isFullscreen ? 'Restore Banner Height' : 'View Fullscreen Banner'}
            aria-pressed={isFullscreen}
          >
            {isFullscreen ? (
              <Minimize2 className="w-4 h-4" aria-hidden="true" />
            ) : (
              <Maximize2 className="w-4 h-4" aria-hidden="true" />
            )}
          </button>

          {/* Play / Pause Auto-Cycling */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 sm:p-2 rounded-lg bg-black/40 hover:bg-black/60 text-slate-200 hover:text-white border border-white/10 backdrop-blur-md transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            title={isPlaying ? 'Pause Slideshow' : 'Play Slideshow'}
            aria-label={isPlaying ? 'Pause Slideshow' : 'Play Slideshow'}
            aria-pressed={isPlaying}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 text-amber-400" aria-hidden="true" />
            ) : (
              <Play className="w-4 h-4 text-emerald-400" aria-hidden="true" />
            )}
          </button>

          {/* Manual Arrow Controls */}
          {settings.showArrows && slides.length > 1 && (
            <div className="flex items-center gap-1" role="group" aria-label="Slide navigation controls">
              <button
                onClick={prevSlide}
                className="p-1.5 sm:p-2 rounded-lg bg-black/40 hover:bg-black/60 text-white border border-white/10 backdrop-blur-md transition-all cursor-pointer active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                title="Previous Slide"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                onClick={nextSlide}
                className="p-1.5 sm:p-2 rounded-lg bg-black/40 hover:bg-black/60 text-white border border-white/10 backdrop-blur-md transition-all cursor-pointer active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                title="Next Slide"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* BOTTOM DOT INDICATORS */}
      {settings.showDots && slides.length > 1 && (
        <div
          className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/60 border border-white/10 backdrop-blur-md"
          role="tablist"
          aria-label="Slideshow slide selectors"
        >
          {slides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentIndex(idx)}
              role="tab"
              aria-selected={idx === currentIndex}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                idx === currentIndex
                  ? 'w-6 h-1.5 bg-blue-400 shadow-sm'
                  : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      )}

      {/* AUTO-PLAY PROGRESS BAR AT BOTTOM OF BANNER */}
      {isPlaying && !isHovered && slides.length > 1 && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-20 overflow-hidden" aria-hidden="true">
          <motion.div
            key={currentIndex + '-' + isPlaying}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{
              duration: settings.cycleIntervalMs / 1000,
              ease: 'linear'
            }}
            className="h-full bg-blue-500 shadow-sm"
          />
        </div>
      )}
    </div>
  );
};
