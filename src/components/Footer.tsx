import { BRAND, SERVICES } from "@/src/constants";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-accent-foreground font-bold text-xl">
                N
              </div>
              <span className="text-2xl font-bold tracking-tighter">{BRAND.name}</span>
            </div>
            <p className="text-primary-foreground/60 leading-relaxed">
              {BRAND.tagline}. We are a high-end digital marketing agency dedicated to helping local businesses dominate their market.
            </p>
            <div className="flex gap-4">
              <a href={BRAND.socials.instagram} className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={BRAND.socials.facebook} className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={BRAND.socials.x} className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-primary-foreground/60">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#careers" className="hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-primary-foreground/60">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.title}>
                  <a href="#services" className="hover:text-accent transition-colors">{service.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-primary-foreground/60">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <a href={`tel:${BRAND.call}`} className="hover:text-accent transition-colors">+{BRAND.call}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <a href="mailto:info@norixel.com" className="hover:text-accent transition-colors">info@norixel.com</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-primary-foreground/10 text-center text-primary-foreground/40 text-sm">
          <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved. Designed for growth.</p>
        </div>
      </div>
    </footer>
  );
}
