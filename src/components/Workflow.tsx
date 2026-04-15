import { WORKFLOW_STEPS } from "@/src/constants";
import { Card, CardContent } from "@/components/ui/card";
import * as Icons from "lucide-react";
import { motion } from "motion/react";

export default function Workflow() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Detailed <span className="text-gradient">Workflow</span></h2>
          <p className="text-lg text-muted-foreground">Transparency is at the heart of everything we do. Here's how we work on your project.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WORKFLOW_STEPS.map((step, index) => {
            const IconComponent = (Icons as any)[step.icon];
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border border-border/50 bg-secondary/10 hover:bg-secondary/20 transition-colors group">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
                        {IconComponent && <IconComponent className="w-6 h-6" />}
                      </div>
                      <span className="text-4xl font-black text-primary/10 group-hover:text-primary/20 transition-colors">0{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
