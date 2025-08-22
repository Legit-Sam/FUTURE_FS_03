import { Button } from "./ui/enhanced-button";
import { Play, Instagram, Twitter, Facebook, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border/20 pt-16 pb-8">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                <Play className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-2xl font-display font-bold text-foreground">Sonic</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Premium music streaming platform connecting you to artists worldwide. Experience music like never before.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Premium</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Mobile App</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Desktop</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Web Player</a></li>
            </ul>
          </div>

          {/* Discover */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Discover</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Charts</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">New Releases</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Genres</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Podcasts</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Press</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Investors</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2024 Sonic Music. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};