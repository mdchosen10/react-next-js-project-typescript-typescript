import Hero from '@/components/sections/Hero';
import PlatformSection from '@/components/sections/PlatformSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import SuperchargeTeam from '@/components/sections/SuperchargeTeam';
import ServiceToSoftware from '@/components/sections/ServiceToSoftware';
import SocialProof from '@/components/sections/SocialProof';
import CaseStudiesPreview from '@/components/sections/CaseStudiesPreview';
import FAQ from '@/components/sections/FAQ';
import ContactCTA from '@/components/sections/ContactCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <PlatformSection />
      <HowItWorksSection />
      <SuperchargeTeam />
      <ServiceToSoftware />
      <SocialProof />
      <CaseStudiesPreview />
      <FAQ />
      <ContactCTA />
    </>
  );
}
