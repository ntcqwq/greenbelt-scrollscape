import { motion } from 'framer-motion';
import { ParallaxSection } from './ParallaxSection';
import { AnimatedText } from './AnimatedText';
import wetlandsImage from '@/assets/wetlands-wildlife.jpg';

export const ImpactSection = () => {
  const stats = [
    { number: "$2.6B", label: "Annual Value", description: "Ecosystem services provided yearly" },
    { number: "2M+", label: "Acres Protected", description: "Countryside, farmland, forests & wetlands" },
    { number: "100%", label: "Flood Control", description: "Natural water management systems" },
    { number: "∞", label: "Clean Air", description: "Natural air filtering and carbon storage" }
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
              The Ontario Greenbelt
            </h2>
        </AnimatedText>

        <AnimatedText delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 nature-border rounded-2xl bg-card/50 backdrop-blur-sm">
              <div className="text-3xl mb-3">🌍</div>
              <div className="text-xl font-bold text-primary mb-2">World's Largest</div>
              <div className="text-sm text-muted-foreground">Protected greenbelt around a major urban area</div>
            </div>
            <div className="text-center p-6 nature-border rounded-2xl bg-card/50 backdrop-blur-sm">
              <div className="text-3xl mb-3">🏞️</div>
              <div className="text-xl font-bold text-primary mb-2">2+ Million Acres</div>
              <div className="text-sm text-muted-foreground">Farmland, forests, wetlands, rivers & lakes</div>
            </div>
            <div className="text-center p-6 nature-border rounded-2xl bg-card/50 backdrop-blur-sm">
              <div className="text-3xl mb-3">🏙️</div>
              <div className="text-xl font-bold text-primary mb-2">Wraps Around GTA</div>
              <div className="text-sm text-muted-foreground">Protecting Canada's most populated region</div>
            </div>
          </div>
        </AnimatedText>

        <AnimatedText delay={0.5}>
          <p className="section-text mb-12">
            Here&apos;s why we fight to protect this incredible natural treasure:
          </p>
        </AnimatedText>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <AnimatedText key={stat.label} delay={0.6 + index * 0.1}>
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

        <AnimatedText delay={1.0}>
          <p className="section-text pt-8">
            From supporting local food systems worth billions annually to providing 
            recreational access and well-being benefits, the Greenbelt is essential 
            for Ontario&apos;s environmental and economic future.
          </p>
        </AnimatedText>
      </div>
    </ParallaxSection>
  );
};