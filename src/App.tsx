import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import About from "./components/About";
import Stats from "./components/Stats";
import Workflow from "./components/Workflow";
import Social from "./components/Social";
import Careers from "./components/Careers";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Process />
        <About />
        <Stats />
        <Workflow />
        <Social />
        <Careers />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

