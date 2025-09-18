import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CollectionSection from "@/components/CollectionSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import AwardsSection from "@/components/AwardsSection";
import RulesSection from "@/components/RulesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <CollectionSection />
      <FacilitiesSection />
      <AwardsSection />
      <RulesSection />
      <Footer />
    </main>
  );
};

export default Index;
