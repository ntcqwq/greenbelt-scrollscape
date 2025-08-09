import { motion } from 'framer-motion';
import { ParallaxSection } from './ParallaxSection';
import { AnimatedText } from './AnimatedText';
import heroImage from '@/assets/hero-greenbelt.jpg';

export const HeroSection = () => {
  return (
    <ParallaxSection 
      backgroundImage={heroImage}
      parallaxSpeed={0.3}
    >
      <div className="text-center space-y-8">
        <AnimatedText delay={0.2}>
          <h2 className="text-lg md:text-xl text-primary-glow tracking-wide uppercase font-medium">
            Youth Guardians of Ontario&apos;s
          </h2>
        </AnimatedText>
        
        <AnimatedText delay={0.4}>
          <h1 className="hero-text glow-text">
            GREEN BELT
          </h1>
        </AnimatedText>
        
        <AnimatedText delay={0.6}>
          <p className="section-text">
            We&apos;re youth guardians of Ontario&apos;s Greenbelt – one voice, one story, one petition at a time.
            Join our movement to protect the land that protects us.
          </p>
        </AnimatedText>

        <AnimatedText delay={0.8}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <motion.button
              className="px-8 py-4 bg-primary hover:bg-primary-glow text-primary-foreground rounded-xl font-semibold shadow-glow transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Share Your Story
            </motion.button>
            
            <motion.button
              className="px-8 py-4 nature-border text-foreground rounded-xl font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign Our Petition
            </motion.button>
          </div>
        </AnimatedText>

        {/* Scroll Indicator */}
        <motion.div
          className="pt-16"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center mx-auto">
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