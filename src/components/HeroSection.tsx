import { motion } from 'framer-motion';
import { ParallaxSection } from './ParallaxSection';
import { AnimatedText } from './AnimatedText';
import heroImage from '@/assets/hero-greenbelt.jpg';

export const HeroSection = () => {
  return (
    <ParallaxSection 
      backgroundImage={heroImage}
      className="relative"
      parallaxSpeed={0.3}
    >
      <div className="container mx-auto px-6 text-center">
        <AnimatedText delay={0.2}>
          <h2 className="text-lg md:text-xl text-primary-glow mb-4 tracking-wide uppercase">
            Protecting Ontario's
          </h2>
        </AnimatedText>
        
        <AnimatedText delay={0.4}>
          <h1 className="hero-text glow-text mb-8">
            GREEN BELT
          </h1>
        </AnimatedText>
        
        <AnimatedText delay={0.6}>
          <p className="section-text max-w-3xl mx-auto mb-12">
            We are the guardians of Ontario's most precious natural heritage. 
            Through dedicated conservation, community engagement, and sustainable practices, 
            we protect the vital ecosystems that sustain our province.
          </p>
        </AnimatedText>

        <AnimatedText delay={0.8}>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            whileHover={{ scale: 1.02 }}
          >
            <motion.button
              className="px-8 py-4 bg-primary hover:bg-primary-glow text-primary-foreground rounded-xl font-semibold shadow-glow transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "var(--shadow-glow)" }}
              whileTap={{ scale: 0.95 }}
            >
              Join Our Mission
            </motion.button>
            
            <motion.button
              className="px-8 py-4 nature-border bg-background/20 text-foreground rounded-xl font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </AnimatedText>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-primary rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </div>
        </motion.div>
      </div>
    </ParallaxSection>
  );
};