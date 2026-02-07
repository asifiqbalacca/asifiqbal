import { Mail, Linkedin, MapPin, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      {/* Geometric Accents */}
      <div className="absolute top-32 left-10 w-24 h-24 border-2 border-gold/20 rotate-45 hidden lg:block" />
      <div className="absolute bottom-32 right-20 w-16 h-16 bg-gold/10 rotate-12 hidden lg:block" />
      <div className="absolute top-1/2 right-10 w-1 h-32 bg-gradient-to-b from-gold to-transparent hidden lg:block" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Subtitle */}
          <div className="animate-fade-in mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-sm text-muted-foreground font-medium tracking-wide">
              <span className="w-2 h-2 bg-gold rounded-full" />
              ACCA Candidate • Financial Professional
            </span>
          </div>

          {/* Name */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Md. Asif<br />
            <span className="text-gradient">Iqbal</span>
          </h1>

          {/* Title */}
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Trainee Accountant • Aspiring ACCA Professional
          </p>

          {/* Divider */}
          <div className="flex justify-center mb-8 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="section-divider" />
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-muted-foreground animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="mailto:acca.asifiqbal@gmail.com"
              className="flex items-center gap-2 hover:text-foreground transition-colors group"
            >
              <Mail size={16} className="group-hover:text-gold transition-colors" />
              <span>acca.asifiqbal@gmail.com</span>
            </a>
            <a
              href="tel:+8801325409636"
              className="flex items-center gap-2 hover:text-foreground transition-colors group"
            >
              <Phone size={16} className="group-hover:text-gold transition-colors" />
              <span>+88 01325-409636</span>
            </a>
            <a
              href="https://www.linkedin.com/in/asifiqbal-acca"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-foreground transition-colors group"
            >
              <Linkedin size={16} className="group-hover:text-gold transition-colors" />
              <span>LinkedIn</span>
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-gold" />
              <span>Dhaka, Bangladesh</span>
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-10 animate-slide-up" style={{ animationDelay: "0.5s" }}>
            <a
              href="#contact"
              className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-navy-light transition-colors shadow-soft"
            >
              Get in Touch
            </a>
            <a
              href="#experience"
              className="px-8 py-3 border-2 border-primary text-foreground font-medium rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              View Experience
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-gold rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
