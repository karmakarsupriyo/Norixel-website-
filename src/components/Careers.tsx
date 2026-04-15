import { useState, type FormEvent } from "react";
import { BRAND } from "@/src/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Send } from "lucide-react";
import { motion } from "motion/react";

export default function Careers() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    skill: "",
    experience: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = `Hi, I want to apply for job at Norixel. \nName: ${formData.name}\nPhone: ${formData.phone}\nSkill: ${formData.skill}\nExperience: ${formData.experience}`;
    const whatsappUrl = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="careers" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 px-4 py-1 text-sm bg-accent text-accent-foreground">Hiring Now</Badge>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">We Are <span className="text-gradient">Hiring</span> 🚀</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join the fastest-growing digital agency and work with a team of passionate creators, marketers, and developers.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Creative & Bold", desc: "We value people who think outside the box." },
                { title: "Growth Mindset", desc: "Continuous learning is part of our DNA." },
                { title: "Remote Friendly", desc: "Work from anywhere with flexible hours." }
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-2xl overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="career-name">Full Name</Label>
                      <Input 
                        id="career-name" 
                        placeholder="Your Name" 
                        className="rounded-xl h-12"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="career-phone">Phone Number</Label>
                      <Input 
                        id="career-phone" 
                        type="tel" 
                        placeholder="Your Phone" 
                        className="rounded-xl h-12"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="career-skill">Primary Skill</Label>
                    <Input 
                      id="career-skill" 
                      placeholder="e.g. Video Editing, SEO, Ads" 
                      className="rounded-xl h-12"
                      required
                      value={formData.skill}
                      onChange={(e) => setFormData({ ...formData, skill: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="career-exp">Experience (Years)</Label>
                    <Input 
                      id="career-exp" 
                      placeholder="e.g. 2+ Years" 
                      className="rounded-xl h-12"
                      required
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    />
                  </div>
                  <Button type="submit" className="w-full rounded-xl h-14 text-lg font-bold group">
                    Apply via WhatsApp
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
