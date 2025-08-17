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
      overlayOpacity={0.6}
    >
      <div className="text-center">
        <AnimatedText delay={0.2}>
          <h2 className="section-heading glow-text">
            Our Mission
          </h2>
        </AnimatedText>
        
        <AnimatedText delay={0.4}>
          <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 mb-8 nature-border">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">The Fight for Our Future</h3>
            
            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30"></div>
              
              <div className="space-y-8">
                <div className="flex items-center">
                  <div className="flex-1 pr-8 text-right">
                    <div className="bg-red-100 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800/30">
                      <div className="text-lg font-bold text-red-700 dark:text-red-300">2022</div>
                      <div className="text-sm text-red-600 dark:text-red-400">Ford government announces removal of 7,400 acres for housing</div>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-red-500 rounded-full border-4 border-background"></div>
                  </div>
                  <div className="flex-1 pl-8"></div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-1 pr-8"></div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full border-4 border-background"></div>
                  </div>
                  <div className="flex-1 pl-8">
                    <div className="bg-yellow-100 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800/30">
                      <div className="text-lg font-bold text-yellow-700 dark:text-yellow-300">Backlash</div>
                      <div className="text-sm text-yellow-600 dark:text-yellow-400">Citizens protested, watchdogs condemned, RCMP investigated</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-1 pr-8 text-right">
                    <div className="bg-green-100 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800/30">
                      <div className="text-lg font-bold text-green-700 dark:text-green-300">2023</div>
                      <div className="text-sm text-green-600 dark:text-green-400">Government backed down and restored the Greenbelt</div>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-green-500 rounded-full border-4 border-background"></div>
                  </div>
                  <div className="flex-1 pl-8"></div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedText>

        <AnimatedText delay={0.5}>
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-primary/20">
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-primary mb-4">That&apos;s Where We Come In</h3>
              <p className="text-lg text-foreground/90 leading-relaxed">
                <strong>Greenbelt Guardians</strong> - a youth-led movement making sure the government 
                knows the next generation is watching. Our mission is simple:
              </p>
              <div className="text-2xl font-bold text-primary mt-4 glow-text">
                Protect the land that protects us
              </div>
            </div>
          </div>
        </AnimatedText>

        <AnimatedText delay={0.6}>
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 mb-12 nature-border">
            <h3 className="text-xl font-bold text-primary mb-6 text-center">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="text-4xl">🌱</div>
                <div className="text-primary font-semibold">Youth Leadership</div>
              </div>
              <div className="text-center space-y-3">
                <div className="text-4xl">🌍</div>
                <div className="text-primary font-semibold">Environmental Justice</div>
              </div>
              <div className="text-center space-y-3">
                <div className="text-4xl">🤝</div>
                <div className="text-primary font-semibold">Community Power</div>
              </div>
              <div className="text-center space-y-3">
                <div className="text-4xl">📢</div>
                <div className="text-primary font-semibold">Authentic Voices</div>
              </div>
              <div className="text-center space-y-3">
                <div className="text-4xl">🏞️</div>
                <div className="text-primary font-semibold">Land Protection</div>
              </div>
              <div className="text-center space-y-3">
                <div className="text-4xl">⚖️</div>
                <div className="text-primary font-semibold">Government Accountability</div>
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
            <AnimatedText key={item.title} delay={0.8 + index * 0.2}>
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