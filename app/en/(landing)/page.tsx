import { Hero, About, Footer,TestimonialsSection } from "./_components";

// New enhanced sections
// import AISection from "./_components/AISection";
// import CTASection from "./_components/CTASection";
// import ConnectionsSection from "./_components/ConnectionsSection";

export default function EnglishLandingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* All content with white background */}
      <div className="relative">
        <Hero />
        <About />
        {/* {/* <AISection />
        <Services />
        <Solutions />
        <CTASection />
        <ConnectionsSection /> */}
        <TestimonialsSection /> 
      
      </div>
    </main>
  );
} 