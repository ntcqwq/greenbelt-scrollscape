import { motion } from 'framer-motion';
import { ParallaxSection } from './ParallaxSection';
import { AnimatedText } from './AnimatedText';
import heroImage from '@/assets/hero-greenbelt.jpg';
import forestImage from '@/assets/forest-canopy.jpg';
import wetlandsImage from '@/assets/wetlands-wildlife.jpg';
import guardiansImage from '@/assets/guardians-team.jpg';

export const GallerySection = () => {
  const reasons = [
    { src: heroImage, title: "Clean Air", description: "Natural air filtering that keeps our communities healthy" },
    { src: forestImage, title: "Climate Action", description: "Carbon sequestration fighting climate change" },
    { src: wetlandsImage, title: "Water Protection", description: "Natural flood control and water purification" },
    { src: guardiansImage, title: "Food Security", description: "Protected farmland feeding Ontario families" }
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="content-container">
        <div className="text-center space-y-12">
        <AnimatedText delay={0.2}>
          <h2 className="section-heading glow-text">
            Why We Fight
          </h2>
        </AnimatedText>

        <AnimatedText delay={0.4}>
          <p className="section-text">
            From cleaner air in our communities to protected farmland that feeds our families,
            the Greenbelt impacts every aspect of our lives. Here&apos;s what we&apos;re protecting.
          </p>
        </AnimatedText>

          <div className="card-grid cols-4">
            {reasons.map((reason, index) => (
              <AnimatedText key={reason.title} delay={0.6 + index * 0.1}>
                <motion.div
                  className="group relative overflow-hidden rounded-2xl nature-border"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="aspect-square overflow-hidden">
                    <motion.img
                      src={reason.src}
                      alt={reason.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                  
                  <motion.div
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center"
                  >
                    <div className="p-6 text-white space-y-3">
                      <h3 className="text-xl font-bold">{reason.title}</h3>
                      <p className="text-sm opacity-90 leading-relaxed">{reason.description}</p>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatedText>
            ))}
          </div>

          <AnimatedText delay={1.0}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-primary hover:bg-primary-glow text-primary-foreground rounded-xl font-semibold shadow-glow transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Take Action Now
              </motion.button>
              <motion.button
                className="px-8 py-4 nature-border text-foreground rounded-xl font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Share Your Story
              </motion.button>
            </div>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
};