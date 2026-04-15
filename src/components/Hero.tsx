import { useState, type FormEvent } from "react";
import { BRAND } from "@/src/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    businessType: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = `Hi, I want marketing service. \nName: ${formData.name}\nPhone: ${formData.phone}\nBusiness: ${formData.businessType}`;
    const whatsappUrl = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-premium">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Leading Digital Agency in India</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6">
              We Turn Local Businesses Into <span className="text-gradient">Lead Machines</span> 🚀
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              Digital Marketing | WhatsApp Automation | Ads Growth. We help you scale your business with data-driven strategies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full px-8 py-7 text-lg shadow-xl shadow-primary/20 group">
                Get Free Strategy
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full px-8 py-7 text-lg border-2" 
                render={<a href={`https://wa.me/${BRAND.whatsapp}?text=Hi, I want to know more about your services`} />}
                nativeButton={false}
              >
                <MessageSquare className="mr-2 w-5 h-5" />
                Chat on WhatsApp
              </Button>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/10 blur-[100px] rounded-full" />
            <Card className="border-none shadow-2xl shadow-primary/10 overflow-hidden">
              <div className="bg-primary p-6 text-primary-foreground">
                <h3 className="text-2xl font-bold">Start Your Growth Journey</h3>
                <p className="text-primary-foreground/80">Get a free consultation today</p>
              </div>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Enter your name" 
                      className="rounded-xl h-12"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="Enter your phone number" 
                      className="rounded-xl h-12"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="business">Business Type</Label>
                    <Select 
                      onValueChange={(value) => setFormData({ ...formData, businessType: value })}
                      required
                    >
                      <SelectTrigger id="business" className="rounded-xl h-12">
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ecommerce">E-commerce</SelectItem>
                        <SelectItem value="local-service">Local Service</SelectItem>
                        <SelectItem value="real-estate">Real Estate</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" className="w-full rounded-xl h-14 text-lg font-bold shadow-lg shadow-primary/20">
                    Get Free Strategy Now
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
