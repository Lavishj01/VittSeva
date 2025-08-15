import { HeroWO, AboutWO, Footer } from "./_components";

// New enhanced sections
import AISection from "./_components/AISection";
import CTASectionWO from "./_components/CTASectionWO";
import ConnectionsSection from "./_components/ConnectionsSection";

export default function EnglishLandingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* All content with white background */}
      <div className="relative">
        <HeroWO />
   
        <AboutWO />
        <AISection />
      
        <CTASectionWO />
        <ConnectionsSection />
       
       <Footer />
      </div>
    </main>
  );
} 