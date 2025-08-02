import { motion } from 'framer-motion';
import { useScrollProgress } from '@/hooks/useParallax';

export const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="scroll-indicator"
      style={{
        scaleX: progress,
      }}
    />
  );
};