import { Button } from "./ui/enhanced-button";
import { Play, Volume2, Headphones, Music } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-primary/20 rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-12 h-12 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-20 w-20 h-20 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-slide-up">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground leading-tight">
            Your Music,
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Elevated</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover your next favorite artist, dive into exclusive content, and experience music like never before with our premium streaming platform.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="hero" size="xl" className="min-w-[200px]">
              <Play className="w-6 h-6" />
              Start Listening
            </Button>
            <Button variant="premium" size="xl" className="min-w-[200px]">
              <Headphones className="w-6 h-6" />
              Explore Premium
            </Button>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-8 md:gap-16 pt-12 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-accent">50M+</div>
              <div className="text-muted-foreground text-sm">Songs</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary-glow">2M+</div>
              <div className="text-muted-foreground text-sm">Artists</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-secondary-glow">100K+</div>
              <div className="text-muted-foreground text-sm">Playlists</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};