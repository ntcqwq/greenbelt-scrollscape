import { motion } from 'framer-motion';
import { ParallaxSection } from './ParallaxSection';
import { AnimatedText } from './AnimatedText';
import guardiansImage from '@/assets/guardians-team.jpg';

export const GuardiansSection = () => {
  const ways = [
    { title: "Share Your Story", action: "Submit videos, audio, or art", icon: "🎬" },
    { title: "Sign Our Petition", action: "Add your voice to our cause", icon: "✍️" },
    { title: "Follow on Instagram", action: "Stay updated and spread the word", icon: "📱" },
    { title: "Volunteer", action: "Help with outreach and events", icon: "🙋" }
  ];

  return (
    <ParallaxSection 
      id="guardians"
      backgroundImage={guardiansImage}
      parallaxSpeed={0.5}
      overlayOpacity={0.6}
    >
      <div className="text-center">
        <AnimatedText delay={0.2}>
          <h2 className="section-heading glow-text">
            Join the Movement
          </h2>
        </AnimatedText>

        <AnimatedText delay={0.4}>
          <p className="section-text mb-12">
            We&apos;re building a powerful network of young advocates across Ontario. 
            Every voice matters, every story counts, and every action makes a difference.
          </p>
        </AnimatedText>

        <div className="card-grid cols-4">
          {ways.map((way, index) => (
            <AnimatedText key={way.title} delay={0.6 + index * 0.1} direction="up">
              <motion.div
                className="nature-border p-6 rounded-2xl text-center space-y-4 cursor-pointer"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-gradient-hero rounded-full mx-auto flex items-center justify-center">
                  <div className="text-2xl">{way.icon}</div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-primary">{way.title}</h3>
                  <p className="text-sm text-muted-foreground">{way.action}</p>
                </div>
              </motion.div>
            </AnimatedText>
          ))}
        </div>
      </div>
    </ParallaxSection>
  );
};