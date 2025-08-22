import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export const SEOHead = ({
  title = "Sonic - Premium Music Experience | Unlimited Streaming",
  description = "Discover music like never before with Sonic - the premium streaming platform featuring 50M+ songs, exclusive artist content, lossless audio quality, and personalized discovery. Stream unlimited music today.",
  keywords = "music streaming, premium audio, lossless music, spotify alternative, online music player, unlimited songs, music discovery, exclusive content, artist streaming, premium music app",
  ogImage = "/sonic-og-image.jpg",
  canonicalUrl = "https://sonic-music.app"
}: SEOHeadProps) => {
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    const updateMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    const updatePropertyTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Update basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    updateMetaTag('theme-color', '#8B5CF6');

    // Update Open Graph tags
    updatePropertyTag('og:title', title);
    updatePropertyTag('og:description', description);
    updatePropertyTag('og:image', ogImage);
    updatePropertyTag('og:url', canonicalUrl);
    updatePropertyTag('og:type', 'website');
    updatePropertyTag('og:site_name', 'Sonic Music');

    // Update Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    updateMetaTag('twitter:site', '@sonic_music');

    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    // Add JSON-LD structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Sonic",
      "description": description,
      "url": canonicalUrl,
      "applicationCategory": "Music Streaming",
      "operatingSystem": "Web Browser, iOS, Android",
      "offers": {
        "@type": "Offer",
        "category": "Premium Music Streaming",
        "price": "9.99",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "50000"
      }
    };

    let script = document.getElementById('structured-data') as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = 'structured-data';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);

  }, [title, description, keywords, ogImage, canonicalUrl]);

  return null; // This component doesn't render anything
};

// Hook for page-specific SEO
export const useSEO = (props: SEOHeadProps) => {
  return <SEOHead {...props} />;
};