import { motion } from 'framer-motion';
import { ParallaxSection } from './ParallaxSection';
import { AnimatedText } from './AnimatedText';
import guardiansImage from '@/assets/guardians-team.jpg';

export const GuardiansSection = () => {
  const guardians = [
    { name: "Dr. Sarah Chen", role: "Conservation Biologist", expertise: "Wetland Ecosystems" },
    { name: "Marcus Thompson", role: "Community Organizer", expertise: "Public Engagement" },
    { name: "Elena Rodriguez", role: "Policy Advocate", expertise: "Environmental Law" },
    { name: "James Mitchell", role: "Field Researcher", expertise: "Wildlife Monitoring" }
  ];

  return (
    <ParallaxSection 
      id="guardians"
      backgroundImage={guardiansImage}
      className="relative"
      parallaxSpeed={0.5}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedText delay={0.2}>
            <h2 className="text-5xl md:text-7xl font-bold text-center text-foreground mb-16 glow-text">
              Meet the Guardians
            </h2>
          </AnimatedText>

          <AnimatedText delay={0.4}>
            <p className="section-text text-center max-w-3xl mx-auto mb-16">
              Our team brings together scientists, advocates, educators, and community 
              leaders united by a shared commitment to protecting Ontario's natural heritage.
            </p>
          </AnimatedText>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guardians.map((guardian, index) => (
              <AnimatedText key={guardian.name} delay={0.6 + index * 0.1} direction="up">
                <motion.div
                  className="nature-border bg-card/40 p-6 rounded-2xl text-center"
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-20 h-20 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="text-2xl">🌿</div>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{guardian.name}</h3>
                  <p className="text-accent font-medium mb-2">{guardian.role}</p>
                  <p className="text-sm text-muted-foreground">{guardian.expertise}</p>
                </motion.div>
              </AnimatedText>
            ))}
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
};