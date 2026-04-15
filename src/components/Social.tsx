import { BRAND } from "@/src/constants";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { motion } from "motion/react";

export default function Social() {
  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: BRAND.socials.instagram, color: "hover:text-[#E4405F]" },
    { name: "Facebook", icon: Facebook, href: BRAND.socials.facebook, color: "hover:text-[#1877F2]" },
    { name: "X (Twitter)", icon: Twitter, href: BRAND.socials.x, color: "hover:text-[#1DA1F2]" },
  ];

  return (
    <section className="py-12 bg-secondary/10 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Follow Our Journey</span>
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className={`flex items-center gap-2 text-lg font-bold transition-colors ${social.color}`}
            >
              <social.icon className="w-6 h-6" />
              <span>{social.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
