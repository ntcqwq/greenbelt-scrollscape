import { motion } from 'framer-motion';
import { ParallaxSection } from './ParallaxSection';
import { AnimatedText } from './AnimatedText';
import forestImage from '@/assets/forest-canopy.jpg';

export const MissionSection = () => {
  return (
    <ParallaxSection 
      id="mission"
      backgroundImage={forestImage}
      parallaxSpeed={0.4}
    >
      <div className="text-center">
        <AnimatedText delay={0.2}>
          <h2 className="section-heading glow-text">
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

        <div className="card-grid cols-3">
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
                className="nature-border p-8 rounded-2xl text-center space-y-4"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl">{item.icon}</div>
                <h3 className="text-2xl font-bold text-primary">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            </AnimatedText>
          ))}
        </div>
      </div>
    </ParallaxSection>
  );
};