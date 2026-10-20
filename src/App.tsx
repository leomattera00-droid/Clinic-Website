import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { TreatmentsExplorer } from '@/components/sections/TreatmentsExplorer';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { ConditionsSection } from '@/components/sections/ConditionsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { BookingSection } from '@/components/sections/BookingSection';
import { StudioSection } from '@/components/sections/StudioSection';
import { Footer } from '@/components/sections/Footer';

function App() {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-ivory-50">
      <Navbar />
      <main>
        <Hero />
        <TreatmentsExplorer />
        <ProcessSection />
        <TeamSection />
        <ConditionsSection />
        <TestimonialsSection />
        <StudioSection />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
