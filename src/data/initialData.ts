import {
  BannerSlide,
  LogoConfig,
  NavigationItem,
  BannerSettings,
  TemplateTheme,
  FeatureItem,
  ServiceItem,
  GalleryImage,
  Testimonial
} from '../types';

export const defaultSlides: BannerSlide[] = [
  {
    id: 'slide-1',
    imageUrl: '/src/assets/images/space_nebula_banner_1786550929554.jpg',
    title: 'Cosmic Nebula Frontier',
    subtitle: 'Exploring the vibrant depths of interstellar dust pillars and distant star clusters',
    badge: 'Deep Space',
    ctaText: 'Explore Universe',
    ctaLink: '#features'
  },
  {
    id: 'slide-2',
    imageUrl: '/src/assets/images/space_earth_orbit_1786550939031.jpg',
    title: 'Orbital Horizon',
    subtitle: 'Planet Earth viewed from low orbit with atmospheric glow and city lights',
    badge: 'Low Earth Orbit',
    ctaText: 'View Satellite Specs',
    ctaLink: '#slots'
  },
  {
    id: 'slide-3',
    imageUrl: '/src/assets/images/space_galaxy_core_1786550951070.jpg',
    title: 'Galactic Core',
    subtitle: 'Swirling cosmic energy, bright stellar rivers, and shining galactic centers',
    badge: 'Interstellar',
    ctaText: 'Discover Galaxies',
    ctaLink: '#specs'
  }
];

export const fallbackSlides: BannerSlide[] = [
  {
    id: 'slide-fb-1',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80',
    title: 'Deep Space Constellations',
    subtitle: 'Mysterious cosmos filled with sparkling celestial bodies',
    badge: 'Astrophotography',
    ctaText: 'Explore Constellations'
  },
  {
    id: 'slide-fb-2',
    imageUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1920&q=80',
    title: 'Orbital Earth',
    subtitle: 'Vast blue marble floating in the dark void of space',
    badge: 'NASA Vista',
    ctaText: 'Learn More'
  },
  {
    id: 'slide-fb-3',
    imageUrl: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1920&q=80',
    title: 'Milky Way Stardust',
    subtitle: 'Infinite galaxy view over high altitude horizons',
    badge: 'Cosmology',
    ctaText: 'Get Started'
  }
];

export const defaultLogo: LogoConfig = {
  text: 'YOUR LOGO',
  tagline: 'YOUR TAGLINE HERE',
  imageUrl: '',
  iconName: 'Sparkles',
  showTagline: true,
  variant: 'transparent'
};

export const defaultNavItems: NavigationItem[] = [
  { id: 'nav-overview', label: 'Template Overview', href: '#overview' },
  { id: 'nav-slots', label: 'Layout Slots', href: '#slots' },
  { id: 'nav-features', label: 'Banner Specs', href: '#features' },
  { id: 'nav-contact', label: 'Template Specs', href: '#specs' },
];

export const defaultBannerSettings: BannerSettings = {
  heightVh: 25, // 25% of screen height as requested!
  cycleIntervalMs: 4000,
  autoPlay: true,
  transitionStyle: 'fade',
  showDots: true,
  showArrows: true,
  showCaptions: true,
  overlayOpacity: 45,
  overlayGradient: true
};

export const defaultTheme: TemplateTheme = {
  primaryColor: '#4f46e5', // Vibrant Indigo
  accentColor: '#f43f5e', // Vibrant Rose
  fontFamily: 'sans',
  darkMode: false
};

export const defaultFeatures: FeatureItem[] = [
  {
    id: 'f1',
    icon: 'LayoutTemplate',
    title: '25% Screen Top Banner',
    description: 'Precision screen viewport height constraint ensuring seamless hero banner visibility while leaving maximum space for body content.',
    badge: 'Core Feature'
  },
  {
    id: 'f2',
    icon: 'Images',
    title: 'Auto-Cycling Carousel',
    description: 'Smooth hardware-accelerated transitions with custom duration, manual pause controls, touch swipe support, and dot indicators.',
    badge: 'Interactive'
  },
  {
    id: 'f3',
    icon: 'ShieldCheck',
    title: 'Left-Aligned Brand Logo',
    description: 'Prominently anchored logo badge on the left side of the banner with glassmorphism blur framing and high contrast visibility.',
    badge: 'Branding'
  },
  {
    id: 'f4',
    icon: 'Sliders',
    title: 'Live Customizer Panel',
    description: 'Change cycling speed, banner height, logo text, slide images, and color themes on the fly with instantaneous preview.',
    badge: 'Customizable'
  },
  {
    id: 'f5',
    icon: 'Smartphone',
    title: 'Responsive & Accessible',
    description: 'Adaptive touch targets, mobile layout collapsing, aria-labels for screen readers, and optimized viewport rendering.',
    badge: 'UX Standard'
  },
  {
    id: 'f6',
    icon: 'Zap',
    title: 'High Performance',
    description: 'Zero layout shift, lazy loaded imagery with fallbacks, and framer motion transition pipeline for fluid 60fps animations.',
    badge: 'Performance'
  }
];

export const defaultServices: ServiceItem[] = [
  {
    id: 's1',
    title: 'Digital Product Design',
    tagline: 'End-to-end interface crafting',
    description: 'Creating high-conversion, highly responsive web experiences that captivate users and drive engagement.',
    features: ['UI/UX Wireframing', 'Design Systems', 'Interactive Prototypes', 'Responsive Layouts'],
    price: '$2,499 / project',
    icon: 'Palette'
  },
  {
    id: 's2',
    title: 'Custom Web Development',
    tagline: 'Scalable frontend architecture',
    description: 'Building modern React and Tailwind web applications with flawless performance, clean code, and fast builds.',
    features: ['React & TypeScript', 'Tailwind Styling', 'API Integrations', 'SEO Optimization'],
    price: '$3,800 / project',
    icon: 'Code2'
  },
  {
    id: 's3',
    title: 'Brand Identity & Strategy',
    tagline: 'Distinctive visual storytelling',
    description: 'Formulating iconic brand identities, custom logos, visual guidelines, and brand design assets.',
    features: ['Logo Creation', 'Brand Guidelines', 'Typography Specs', 'Marketing Banners'],
    price: '$1,950 / package',
    icon: 'Sparkles'
  }
];

export const defaultGallery: GalleryImage[] = [
  {
    id: 'g1',
    title: 'Modern Metropolis',
    category: 'Architecture',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g2',
    title: 'Cyberpunk Aesthetic',
    category: 'Abstract',
    url: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g3',
    title: 'Nordic Forest Mist',
    category: 'Nature',
    url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g4',
    title: 'Minimal Space Interior',
    category: 'Interior',
    url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g5',
    title: 'Golden Sunset Horizon',
    category: 'Nature',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g6',
    title: 'Neon Gradient Pulse',
    category: 'Abstract',
    url: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80'
  }
];

export const defaultTestimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Lin',
    role: 'Creative Director',
    company: 'Vanguard Media',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    quote: 'The 25% screen top banner with image cycling gives our site an immediate high-end editorial feel without overwhelming the body content.',
    rating: 5
  },
  {
    id: 't2',
    name: 'David Vance',
    role: 'Founder & CEO',
    company: 'Apex Digital',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: 'The logo on the left of the banner stays crystal clear regardless of background brightness thanks to the smart glass background.',
    rating: 5
  },
  {
    id: 't3',
    name: 'Elena Rostova',
    role: 'Lead Architect',
    company: 'Studio Form',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    quote: 'Extremely clean template architecture. The banner customizer allowed us to test image timings and transition styles live in seconds.',
    rating: 5
  }
];
