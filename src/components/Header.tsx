import { useState } from "react";
import { Button } from "./ui/enhanced-button";
import { Menu, X, Play, User, Search, Heart } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-card/10 backdrop-blur-md border-b border-border/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
              <Play className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-2xl font-display font-bold text-foreground">Sonic</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Discover</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Browse</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Artists</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Playlists</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Premium</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="w-4 h-4" />
            </Button>
            <Button variant="glass" size="sm">
              <User className="w-4 h-4" />
              Profile
            </Button>
            <Button variant="hero" size="sm">
              Get Premium
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border/20">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-foreground hover:text-primary transition-colors py-2">Discover</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors py-2">Browse</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors py-2">Artists</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors py-2">Playlists</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors py-2">Premium</a>
              <div className="flex space-x-2 pt-4">
                <Button variant="glass" size="sm" className="flex-1">
                  <User className="w-4 h-4" />
                  Profile
                </Button>
                <Button variant="hero" size="sm" className="flex-1">
                  Premium
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};