import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary/20 floating-animation blur-xl" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-32 w-24 h-24 rounded-full bg-secondary/20 floating-animation blur-xl" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-1/4 w-40 h-40 rounded-full bg-accent/20 floating-animation blur-xl" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Main Hero Text */}
        <h1 className="text-6xl md:text-8xl font-bold mb-8 hero-text leading-tight">
          Hello World
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Welcome to the future of web development. Where beautiful design meets cutting-edge technology.
        </p>

        {/* Interactive Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="glass-card p-6 floating-animation hover:scale-105 transition-transform duration-300 pulse-glow" style={{ animationDelay: '0s' }}>
            <div className="text-3xl mb-4">⚛️</div>
            <h3 className="text-lg font-semibold mb-2 text-card-foreground">React</h3>
            <p className="text-muted-foreground text-sm">Modern UI library for building interactive interfaces</p>
          </Card>

          <Card className="glass-card p-6 floating-animation hover:scale-105 transition-transform duration-300 pulse-glow" style={{ animationDelay: '1s' }}>
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-lg font-semibold mb-2 text-card-foreground">Vite</h3>
            <p className="text-muted-foreground text-sm">Lightning-fast build tool for modern development</p>
          </Card>

          <Card className="glass-card p-6 floating-animation hover:scale-105 transition-transform duration-300 pulse-glow" style={{ animationDelay: '2s' }}>
            <div className="text-3xl mb-4">🎨</div>
            <h3 className="text-lg font-semibold mb-2 text-card-foreground">Tailwind</h3>
            <p className="text-muted-foreground text-sm">Utility-first CSS framework for rapid styling</p>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Get Started
          </Button>
          <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};