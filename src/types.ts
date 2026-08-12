export interface BannerSlide {
  id: string;
  imageUrl: string;
  title: string;
  subtitle: string;
  badge?: string;
  ctaText?: string;
  ctaLink?: string;
}

export interface LogoConfig {
  text: string;
  tagline: string;
  imageUrl?: string;
  iconName: string; // Lucide icon name fallback
  showTagline: boolean;
  variant: 'glass' | 'solid' | 'minimal' | 'gradient' | 'transparent';
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
}

export type TransitionStyle = 'fade' | 'slide' | 'zoom';

export interface BannerSettings {
  heightVh: number; // Defaults to 25 (25vh)
  cycleIntervalMs: number; // e.g. 4000
  autoPlay: boolean;
  transitionStyle: TransitionStyle;
  showDots: boolean;
  showArrows: boolean;
  showCaptions: boolean;
  overlayOpacity: number; // 0 to 100
  overlayGradient: boolean;
}

export interface TemplateTheme {
  primaryColor: string;
  accentColor: string;
  fontFamily: 'sans' | 'serif' | 'mono';
  darkMode: boolean;
}

export interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  badge?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  price?: string;
  icon: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: string;
  url: string;
  aspectRatio?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}
