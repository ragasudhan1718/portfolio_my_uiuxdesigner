import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PortfolioGrid from "@/components/PortfolioGrid";
import SkillsSection from "@/components/SkillsSection";
import CTASection from "@/components/CTASection";

/*export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <PortfolioGrid />
      <SkillsSection />
      <CTASection />
      <Footer />
    </div>
  );
}*/
export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />

      <section id="projects">
        <PortfolioGrid />
      </section>

      <section id="skills">
        <SkillsSection />
      </section>

      <section id="contact">
        <CTASection />
      </section>

      <Footer />
    </div>
  );
}
