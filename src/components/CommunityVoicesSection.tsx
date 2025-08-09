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
    <section id="community-voices" className="py-20 bg-card">
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

          <div className="card-grid cols-2 gap-6">
            {submissions.map((submission, index) => {
              const IconComponent = submission.icon;
              return (
                <AnimatedText key={`${submission.title}-${index}`} delay={0.6 + index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="h-full nature-border bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <IconComponent className="w-5 h-5 text-primary" />
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {submission.location}
                          </div>
                        </div>
                        <CardTitle className="text-lg font-semibold text-foreground">
                          {submission.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/80 leading-relaxed text-sm">
                          "{submission.content}"
                        </p>
                      </CardContent>
                    </Card>
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