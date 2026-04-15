import { useState } from "react";
import { BRAND } from "@/src/constants";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, MoreVertical, Phone } from "lucide-react";
import { motion } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Careers", href: "#careers" },
  ];

  const moreLinks = [
    { name: "Our Work", href: "#work" },
    { name: "Pricing", href: "#pricing" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Blog", href: "#blog" },
    { name: "Free Tools", href: "#tools" },
    { name: "Download App", href: "#download" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl">
              N
            </div>
            <span className="text-2xl font-bold tracking-tighter text-primary">{BRAND.name}</span>
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="ghost" size="icon" className="rounded-full" />}>
              <MoreVertical className="w-5 h-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {moreLinks.map((link) => (
                <DropdownMenuItem 
                  key={link.name} 
                  render={<a href={link.href} className="w-full cursor-pointer" />}
                  nativeButton={false}
                >
                  {link.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button 
            render={<a href={`tel:${BRAND.call}`} />} 
            className="rounded-full px-6"
            nativeButton={false}
          >
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger render={<Button variant="ghost" size="icon" />}>
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-8 mt-12">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-bold hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="h-px bg-border w-full" />
                <div className="grid grid-cols-2 gap-4">
                  {moreLinks.map((link) => (
                    <a 
                      key={link.name} 
                      href={link.href} 
                      onClick={() => setIsOpen(false)}
                      className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
                <Button 
                  render={<a href={`tel:${BRAND.call}`} />} 
                  className="w-full rounded-full py-6 text-lg"
                  nativeButton={false}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
