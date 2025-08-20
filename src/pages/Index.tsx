import { Navigation } from '@/components/Navigation';
import { ScrollProgress } from '@/components/ScrollProgress';
import { HeroSection } from '@/components/HeroSection';
import { MissionSection } from '@/components/MissionSection';
import { ImpactSection } from '@/components/ImpactSection';
import { CommunityVoicesSection } from '@/components/CommunityVoicesSection';
import { GuardiansSection } from '@/components/GuardiansSection';
import { GallerySection } from '@/components/GallerySection';

const Index = () => {
  return (
    <div className="bg-background text-foreground">
      <ScrollProgress />
      <Navigation />
      
      <main>
        <HeroSection />
        <MissionSection />
        <ImpactSection />
        <CommunityVoicesSection />
        <GuardiansSection />
        <GallerySection />
      </main>

      {/* Footer */}
      <footer className="bg-card py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-bold bg-gradient-text bg-clip-text text-transparent mb-4">
            Gen-Greenbelt
          </div>
          <p className="text-muted-foreground mb-6">
            Protecting Ontario's natural heritage for future generations
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 Gen-Greenbelt. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
