import { Button } from "./ui/enhanced-button";
import { Card } from "./ui/card";
import { Play, Heart, MoreHorizontal, Star, TrendingUp } from "lucide-react";
import artistsCollage from "@/assets/artists-collage.jpg";
import musicVisualization from "@/assets/music-visualization.jpg";

export const FeaturedSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Featured Artists */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-display font-bold text-foreground">
              Featured <span className="text-primary">Artists</span>
            </h2>
            <Button variant="ghost">View All</Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Main Featured Artist Card */}
            <Card className="lg:col-span-2 bg-gradient-card border-border/50 overflow-hidden group hover:shadow-premium transition-all duration-500">
              <div className="relative h-64 lg:h-80">
                <img 
                  src={artistsCollage} 
                  alt="Featured Artists" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Trending Now</h3>
                  <p className="text-muted-foreground mb-4">The hottest artists making waves this week</p>
                  <Button variant="hero" size="lg">
                    <Play className="w-5 h-5" />
                    Listen Now
                  </Button>
                </div>
              </div>
            </Card>

            {/* Quick Stats */}
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-card border-border/50 hover:shadow-glow-primary transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-primary/20">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Top Charts</h4>
                    <p className="text-muted-foreground">This week's hits</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-gradient-card border-border/50 hover:shadow-glow-accent transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-accent/20">
                    <Star className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">New Releases</h4>
                    <p className="text-muted-foreground">Fresh music daily</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Music Experience */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">
              Immersive <span className="text-secondary">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every note, every beat, every emotion - delivered with crystal clarity and premium quality.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-primary/20 mt-1">
                    <Play className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Lossless Audio Quality</h3>
                    <p className="text-muted-foreground">Experience every detail with our high-fidelity streaming technology.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-secondary/20 mt-1">
                    <Heart className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Personalized Discovery</h3>
                    <p className="text-muted-foreground">AI-powered recommendations that evolve with your taste.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-accent/20 mt-1">
                    <Star className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Exclusive Content</h3>
                    <p className="text-muted-foreground">Behind-the-scenes, live sessions, and artist exclusives.</p>
                  </div>
                </div>
              </div>

              <Button variant="premium" size="lg" className="w-full sm:w-auto">
                Upgrade to Premium
              </Button>
            </div>

            <div className="relative">
              <img 
                src={musicVisualization} 
                alt="Music Visualization" 
                className="w-full rounded-2xl shadow-premium"
              />
              <div className="absolute inset-0 bg-gradient-primary/10 rounded-2xl animate-pulse-glow" />
            </div>
          </div>
        </div>

        {/* Playlist Grid */}
        <div>
          <h2 className="text-4xl font-display font-bold text-foreground mb-8">
            Curated <span className="text-accent">Playlists</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Array.from({ length: 6 }, (_, i) => (
              <Card key={i} className="p-4 bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 group cursor-pointer">
                <div className="aspect-square bg-muted rounded-lg mb-3 flex items-center justify-center relative overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20" />
                  <Play className="w-8 h-8 text-foreground absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h4 className="font-semibold text-foreground text-sm mb-1 truncate">Playlist {i + 1}</h4>
                <p className="text-muted-foreground text-xs truncate">Curated mix</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};