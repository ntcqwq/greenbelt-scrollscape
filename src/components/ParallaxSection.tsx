import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useParallax } from '@/hooks/useParallax';
import { ReactNode } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  backgroundImage: string;
  className?: string;
  parallaxSpeed?: number;
  overlay?: boolean;
  id?: string;
}

export const ParallaxSection = ({ 
  children, 
  backgroundImage, 
  className = '', 
  parallaxSpeed = 0.5,
  overlay = true,
  id 
}: ParallaxSectionProps) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });
  const parallaxOffset = useParallax(parallaxSpeed);

  return (
    <section 
      id={id}
      ref={ref}
      className={`parallax-container ${className}`}
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 parallax-element"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: `translateY(${parallaxOffset}px)`,
          scale: 1.1,
        }}
      />
      
      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-black/40" />
      )}

      {/* Content Container */}
      <motion.div
        className="content-container"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
};