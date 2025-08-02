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
      parallaxSpeed={0.5}
    >
      <div className="text-center">
        <AnimatedText delay={0.2}>
          <h2 className="section-heading glow-text">
            Meet the Guardians
          </h2>
        </AnimatedText>

        <AnimatedText delay={0.4}>
          <p className="section-text mb-12">
            Our team brings together scientists, advocates, educators, and community 
            leaders united by a shared commitment to protecting Ontario&apos;s natural heritage.
          </p>
        </AnimatedText>

        <div className="card-grid cols-4">
          {guardians.map((guardian, index) => (
            <AnimatedText key={guardian.name} delay={0.6 + index * 0.1} direction="up">
              <motion.div
                className="nature-border p-6 rounded-2xl text-center space-y-4"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-gradient-hero rounded-full mx-auto flex items-center justify-center">
                  <div className="text-2xl">🌿</div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-primary">{guardian.name}</h3>
                  <p className="text-accent font-medium">{guardian.role}</p>
                  <p className="text-sm text-muted-foreground">{guardian.expertise}</p>
                </div>
              </motion.div>
            </AnimatedText>
          ))}
        </div>
      </div>
    </ParallaxSection>
  );
};