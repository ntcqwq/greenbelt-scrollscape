import { motion } from 'framer-motion';
import { ParallaxSection } from './ParallaxSection';
import { AnimatedText } from './AnimatedText';
import wetlandsImage from '@/assets/wetlands-wildlife.jpg';

export const ImpactSection = () => {
  const stats = [
    { number: "2M+", label: "Acres Protected", description: "Of pristine countryside and farmland" },
    { number: "78", label: "Species Safeguarded", description: "Including endangered and at-risk wildlife" },
    { number: "15K", label: "Volunteers", description: "Active community guardians" },
    { number: "25", label: "Years", description: "Of dedicated conservation work" }
  ];

  return (
    <ParallaxSection 
      id="impact"
      backgroundImage={wetlandsImage}
      className="relative"
      parallaxSpeed={0.6}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedText delay={0.2}>
            <h2 className="text-5xl md:text-7xl font-bold text-center text-foreground mb-16 glow-text">
              Our Impact
            </h2>
          </AnimatedText>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <AnimatedText key={stat.label} delay={0.4 + index * 0.1}>
                <motion.div
                  className="text-center nature-border bg-card/30 p-6 rounded-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="text-4xl md:text-5xl font-bold bg-gradient-text bg-clip-text text-transparent mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-primary font-semibold mb-2">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </motion.div>
              </AnimatedText>
            ))}
          </div>

          <AnimatedText delay={0.8}>
            <div className="text-center">
              <p className="section-text max-w-3xl mx-auto">
                Through partnerships with local communities, government agencies, and 
                environmental organizations, we've created a network of protection 
                that spans across the Greater Golden Horseshoe region.
              </p>
            </div>
          </AnimatedText>
        </div>
      </div>
    </ParallaxSection>
  );
};