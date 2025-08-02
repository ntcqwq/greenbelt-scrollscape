import { motion } from 'framer-motion';
import { ParallaxSection } from './ParallaxSection';
import { AnimatedText } from './AnimatedText';
import heroImage from '@/assets/hero-greenbelt.jpg';
import forestImage from '@/assets/forest-canopy.jpg';
import wetlandsImage from '@/assets/wetlands-wildlife.jpg';
import guardiansImage from '@/assets/guardians-team.jpg';

export const GallerySection = () => {
  const galleryImages = [
    { src: heroImage, title: "Rolling Hills", description: "Protected countryside views" },
    { src: forestImage, title: "Ancient Forests", description: "Old-growth canopy protection" },
    { src: wetlandsImage, title: "Pristine Wetlands", description: "Critical wildlife habitat" },
    { src: guardiansImage, title: "Community Action", description: "Guardians at work" }
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="content-container">
        <div className="text-center space-y-12">
          <AnimatedText delay={0.2}>
            <h2 className="section-heading glow-text">
              Gallery
            </h2>
          </AnimatedText>

          <AnimatedText delay={0.4}>
            <p className="section-text">
              Discover the breathtaking beauty of Ontario&apos;s Greenbelt through our lens. 
              Each image tells a story of conservation, community, and natural wonder.
            </p>
          </AnimatedText>

          <div className="card-grid cols-4">
            {galleryImages.map((image, index) => (
              <AnimatedText key={image.title} delay={0.6 + index * 0.1}>
                <motion.div
                  className="group relative overflow-hidden rounded-2xl nature-border"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="aspect-square overflow-hidden">
                    <motion.img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                  
                  <motion.div
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                  >
                    <div className="p-6 text-white space-y-2">
                      <h3 className="text-xl font-bold">{image.title}</h3>
                      <p className="text-sm opacity-90">{image.description}</p>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatedText>
            ))}
          </div>

          <AnimatedText delay={1.0}>
            <motion.button
              className="px-8 py-4 bg-primary hover:bg-primary-glow text-primary-foreground rounded-xl font-semibold shadow-glow transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Full Gallery
            </motion.button>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
};