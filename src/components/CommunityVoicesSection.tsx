import { motion } from 'framer-motion';
import { AnimatedText } from './AnimatedText';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Quote, Heart, Camera, Palette } from 'lucide-react';

export const CommunityVoicesSection = () => {
  const submissions = [
    {
      type: "statement",
      icon: Quote,
      title: "Sarah, Age 16",
      content: "Growing up in King City, I've seen firsthand how clean air and green spaces shape our community. The Greenbelt isn't just land – it's our future.",
      location: "King City"
    },
    {
      type: "artwork",
      icon: Palette,
      title: "Digital Art by Alex, Age 17",
      content: "Through my art, I want to show the beauty we're fighting to protect. Every tree, every stream, every field tells a story worth preserving.",
      location: "Richmond Hill"
    },
    {
      type: "photo",
      icon: Camera,
      title: "Photography by Maya, Age 15",
      content: "I captured this sunrise over the Oak Ridges Moraine to remind us what we stand to lose. Nature's beauty deserves our protection.",
      location: "Aurora"
    },
    {
      type: "statement",
      icon: Heart,
      title: "Jordan, Age 18",
      content: "As someone who grew up playing in Greenbelt parks, I can't imagine my childhood without these protected spaces. We must preserve them for future generations.",
      location: "Newmarket"
    }
  ];

  return (
    <section id="community" className="py-20 bg-card">
      <div className="content-container">
        <div className="text-center space-y-12">
          <AnimatedText delay={0.2}>
            <h2 className="section-heading glow-text">
              Community Voices
            </h2>
          </AnimatedText>

          <AnimatedText delay={0.4}>
            <p className="section-text">
              Young voices from across the GTA are speaking up for the Greenbelt. 
              Here are some of the powerful statements, artworks, and stories shared by our community.
            </p>
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {submissions.map((submission, index) => {
              const IconComponent = submission.icon;
              const stickyColors = [
                'bg-yellow-200 dark:bg-yellow-300/20 border-yellow-300 dark:border-yellow-400/30',
                'bg-pink-200 dark:bg-pink-300/20 border-pink-300 dark:border-pink-400/30',
                'bg-blue-200 dark:bg-blue-300/20 border-blue-300 dark:border-blue-400/30',
                'bg-green-200 dark:bg-green-300/20 border-green-300 dark:border-green-400/30'
              ];
              const rotations = ['rotate-1', '-rotate-1', 'rotate-2', '-rotate-2'];
              
              return (
                <AnimatedText key={`${submission.title}-${index}`} delay={0.6 + index * 0.1}>
                  <motion.div
                    className={`${stickyColors[index]} ${rotations[index]} relative p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-solid rounded-lg`}
                    whileHover={{ scale: 1.05, rotate: 0 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Sticky note "tape" effect */}
                    <div className="absolute -top-2 left-1/4 w-16 h-4 bg-white/30 dark:bg-gray-600/30 rounded-sm shadow-sm"></div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <IconComponent className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                        {submission.location}
                      </span>
                    </div>
                    
                    <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-3">
                      {submission.title}
                    </h3>
                    
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed italic">
                      "{submission.content}"
                    </p>
                  </motion.div>
                </AnimatedText>
              );
            })}
          </div>

          <AnimatedText delay={1.2}>
            <div className="bg-primary/5 rounded-2xl p-8 nature-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Share Your Voice
              </h3>
              <p className="text-foreground/80 mb-6">
                Have a story, artwork, or statement about why the Greenbelt matters to you? 
                We want to hear from you and feature your voice in our movement.
              </p>
              <motion.a
                href="https://forms.gle/ky1N9sEuLsnVat1t5"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-primary hover:bg-primary-glow text-primary-foreground rounded-lg font-semibold shadow-glow transition-all duration-300 inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit Your Story
              </motion.a>
            </div>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
};