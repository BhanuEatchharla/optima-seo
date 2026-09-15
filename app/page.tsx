
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { IndustriesSection } from "@/components/industries-section";
import { FeaturesSection } from "@/components/features-section";
import { AnalyticsSection } from "@/components/analytics-section";
import { RoadmapSection } from "@/components/roadmap-section";
import { Footer } from "@/components/footer";

import CTASection from "@/components/cta-section";
import { DemoVideoSection } from "@/components/demo-video-section";
// import { Home } from "lucide-react";

export default function Page() {
  

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      <Navigation />
      <main>
      
        <HeroSection />
        <AboutSection />
        <IndustriesSection />
        <FeaturesSection />
        <AnalyticsSection />
        <RoadmapSection />
        <DemoVideoSection/> 
        <CTASection />
        
      </main>
      
      <Footer />
    </div>
  );
};


