import { motion } from 'framer-motion';
import { ParallaxSection } from './ParallaxSection';
import { AnimatedText } from './AnimatedText';
import forestImage from '@/assets/forest-canopy.jpg';

export const MissionSection = () => {
  return (
    <ParallaxSection 
      id="mission"
      backgroundImage={forestImage}
      className="relative"
      parallaxSpeed={0.4}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedText delay={0.2}>
            <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-8 glow-text">
              Our Mission
            </h2>
          </AnimatedText>
          
          <AnimatedText delay={0.4}>
            <p className="section-text mb-12">
              The Ontario Greenbelt represents more than 2 million acres of protected 
              countryside, farmland, forests, wetlands, and watersheds. We stand as 
              its guardians, ensuring this irreplaceable natural heritage remains 
              intact for future generations.
            </p>
          </AnimatedText>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "Conservation",
                description: "Protecting critical habitats and biodiversity through scientific research and community action.",
                icon: "🌲"
              },
              {
                title: "Education",
                description: "Raising awareness about the importance of the Greenbelt through outreach and educational programs.",
                icon: "📚"
              },
              {
                title: "Advocacy",
                description: "Working with policymakers to strengthen protections and oppose harmful development.",
                icon: "🛡️"
              }
            ].map((item, index) => (
              <AnimatedText key={item.title} delay={0.6 + index * 0.2}>
                <motion.div
                  className="nature-border bg-card/40 p-8 rounded-2xl"
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              </AnimatedText>
            ))}
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
};