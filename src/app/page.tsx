import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import ServiceCards from '@/components/sections/ServiceCards';
import LocalSeo from '@/components/sections/LocalSeo';
import ProjectGallery from '@/components/sections/ProjectGallery';
import SocialProof from '@/components/sections/SocialProof';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import CtaBanner from '@/components/sections/CtaBanner';
import Footer from '@/components/layout/Footer';

export default function Page() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Navbar />
      <Hero />
      <TrustBar />
      <ServiceCards />
      <LocalSeo />
      <ProjectGallery />
      <SocialProof />
      <Pricing />
      <FAQ />
      <CtaBanner />
      <Footer />
    </main>
  );
}
