import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-navy-dark text-primary-foreground/60">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-semibold text-primary-foreground">
              Asif<span className="text-gold">.</span>
            </span>
            <span className="text-sm">© {currentYear} All rights reserved</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:acca.asifiqbal@gmail.com"
              className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-all"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/asifiqbal-acca"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
