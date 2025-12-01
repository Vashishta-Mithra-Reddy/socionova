import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import VisionMission from "@/components/VisionMission";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
// import Newsletter from "@/components/Newsletter";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 transition-colors duration-300">
      <Hero />
      <About />
      <Marquee />
      <VisionMission />
      <Services />
      <Pricing />
      <Testimonials />
      {/* <Newsletter /> */}
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
