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
      parallaxSpeed={0.6}
    >
      <div className="text-center">
        <AnimatedText delay={0.2}>
          <h2 className="section-heading glow-text">
            Our Impact
          </h2>
        </AnimatedText>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <AnimatedText key={stat.label} delay={0.4 + index * 0.1}>
              <motion.div
                className="text-center nature-border p-6 rounded-2xl space-y-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold bg-gradient-text bg-clip-text text-transparent"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-primary font-semibold text-lg">{stat.label}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{stat.description}</div>
              </motion.div>
            </AnimatedText>
          ))}
        </div>

        <AnimatedText delay={0.8}>
          <p className="section-text pt-8">
            Through partnerships with local communities, government agencies, and 
            environmental organizations, we&apos;ve created a network of protection 
            that spans across the Greater Golden Horseshoe region.
          </p>
        </AnimatedText>
      </div>
    </ParallaxSection>
  );
};