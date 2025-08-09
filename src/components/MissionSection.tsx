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
          <p className="section-text mb-8">
            At Greenbelt Guardians, we value youth voices, environmental justice, 
            and the power of community to protect the land that protects us.
          </p>
        </AnimatedText>

        <AnimatedText delay={0.5}>
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 mb-12 nature-border">
            <h3 className="text-xl font-bold text-primary mb-4">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
              <div className="space-y-2">
                <div className="text-primary font-semibold">🌱 Youth Leadership</div>
                <div className="text-primary font-semibold">🌍 Environmental Justice</div>
              </div>
              <div className="space-y-2">
                <div className="text-primary font-semibold">🤝 Community Power</div>
                <div className="text-primary font-semibold">📢 Authentic Voices</div>
              </div>
              <div className="space-y-2">
                <div className="text-primary font-semibold">🏞️ Land Protection</div>
              </div>
            </div>
          </div>
        </AnimatedText>

        <div className="card-grid cols-3">
          {[
            {
              title: "Story Collection",
              description: "Gathering authentic youth voices and personal experiences about why the Greenbelt matters.",
              icon: "📝"
            },
            {
              title: "Community Engagement", 
              description: "Building a movement of young people through social media, events, and grassroots organizing.",
              icon: "🤝"
            },
            {
              title: "Government Advocacy",
              description: "Presenting our petition and stories directly to government officials and policymakers.",
              icon: "🏛️"
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