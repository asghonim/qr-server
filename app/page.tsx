import './landing.css'

import { ApiSection } from "@/components/api-section";
import { CtaSection } from "@/components/cta-section";
import { FeaturesSection } from "@/components/features-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { Nav } from "@/components/nav";
import { PricingSection } from "@/components/pricing-section";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <Nav />

      <HeroSection />
      {/* <LogosSection /> */}
      <HowItWorksSection />
      <FeaturesSection />
      <ApiSection />
      <PricingSection />
      <CtaSection />

      <Footer />
    </div>
  )
}
