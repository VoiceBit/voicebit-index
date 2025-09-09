// Environment-based configuration
const isProduction = import.meta.env.VITE_ENVIRONMENT === 'prod';

export const seoConfig = {
  siteName: 'VoiceBit',
  siteUrl: isProduction ? 'https://voicebit.ai' : 'https://dev.voicebit.ai',
  defaultTitle: 'VoiceBit – AI Phone Ordering for Restaurants | Never Miss a Call',
  // Prevent dev environment from being indexed
  robotsContent: isProduction ? 'index, follow' : 'noindex, nofollow',
  titleTemplate: '%s | VoiceBit',
  defaultDescription: 'Transform phone calls into revenue with VoiceBit\'s AI-powered ordering system. Handle 10+ calls simultaneously, 99% order accuracy, bilingual support. Start your 30-day free trial.',
  defaultImage: '/og-image.jpg',
  twitterHandle: '@voicebit',
  
  pages: {
    home: {
      title: 'AI Phone Ordering for Restaurants | Never Miss a Call',
      description: 'Transform phone calls into revenue with VoiceBit\'s AI-powered ordering system. Handle 10+ calls simultaneously, 99% order accuracy, bilingual support. Start your 30-day free trial.',
      keywords: 'restaurant direct ordering, bypass 3rd party ordering, restaurant phone ordering, restaurant direct ordering system with delivery, AI call assistant, automated restaurant orders, voice ordering system, restaurant automation, phone order management'
    },
    about: {
      title: 'About VoiceBit | Restaurant Call Automation Leaders',
      description: 'Learn how VoiceBit helps restaurants reclaim customer relationships with AI-powered call automation. Berkeley SkyDeck backed, trusted by 100+ restaurants.',
      keywords: 'VoiceBit team, restaurant technology, Berkeley SkyDeck, AI restaurant solutions'
    },
    howItWorks: {
      title: 'How VoiceBit Works | 6 Simple Steps to Automated Orders',
      description: 'Discover how VoiceBit answers calls, takes orders, processes payments, and manages deliveries automatically. See our restaurant AI in action.',
      keywords: 'how VoiceBit works, restaurant automation process, AI order taking, automated phone orders'
    }
  }
};

export const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VoiceBit",
    "url": "https://voicebit.ai",
    "logo": "https://voicebit.ai/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-925-660-7336",
      "contactType": "Sales",
      "areaServed": "US",
      "availableLanguage": ["English", "Spanish"]
    },
    "sameAs": [
      "https://twitter.com/voicebit",
      "https://linkedin.com/company/voicebit"
    ]
  },
  
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "VoiceBit",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31",
      "description": "30-day free trial"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    }
  }
};