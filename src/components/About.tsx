import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                alt="Norixel Team" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/20 blur-3xl rounded-full -z-10" />
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/20 blur-3xl rounded-full -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Building Digital <span className="text-gradient">Success Stories</span></h2>
            <p className="text-lg text-muted-foreground mb-8">
              At Norixel, we believe that every local business has the potential to become a global brand. Our mission is to empower small and medium enterprises with high-end digital marketing tools and strategies that were previously only accessible to big corporations.
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                "Data-driven marketing strategies",
                "WhatsApp automation for seamless sales",
                "High-converting ad campaigns",
                "Dedicated support and transparent reporting"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="rounded-full px-8 group">
              Learn More About Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
