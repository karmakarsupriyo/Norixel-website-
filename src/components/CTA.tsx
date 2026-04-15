import { BRAND } from "@/src/constants";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { motion } from "motion/react";

export default function CTA() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 -z-10" />
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-primary rounded-[3rem] p-12 md:p-24 text-center text-primary-foreground relative overflow-hidden shadow-2xl shadow-primary/30"
        >
          {/* Decorative Circles */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />

          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 max-w-4xl mx-auto leading-tight">
            Ready to Scale Your Business to the <span className="text-accent">Next Level?</span>
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
            Get your free marketing strategy plan today and see how we can help you grow digitally and earn smartly.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="rounded-full px-12 py-8 text-xl font-bold shadow-xl hover:scale-105 transition-transform group" 
            render={<a href={`https://wa.me/${BRAND.whatsapp}?text=Hi, I want a free marketing plan for my business`} />}
            nativeButton={false}
          >
            <MessageSquare className="mr-3 w-6 h-6" />
            Get Free Marketing Plan
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
