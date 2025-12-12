import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export const Card = ({ children, className = '', hover = true, gradient = false }: CardProps) => {
  const baseStyles = 'rounded-xl p-6 backdrop-blur-sm';
  const cardStyles = gradient
    ? 'bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20'
    : 'bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700';

  return (
    <motion.div
      className={`${baseStyles} ${cardStyles} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
    >
      {children}
    </motion.div>
  );
};
