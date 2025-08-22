import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedSection } from "@/components/FeaturedSection";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Sonic - Premium Music Experience | Unlimited Streaming"
        description="Discover music like never before with Sonic. Stream 50M+ songs with lossless audio quality, exclusive artist content, and AI-powered discovery. Get premium access today."
        keywords="premium music streaming, lossless audio, music discovery, exclusive content, unlimited songs, artist streaming, spotify alternative, high quality music"
        canonicalUrl="https://sonic-music.app"
      />
      <Header />
      <main>
        <HeroSection />
        <FeaturedSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;