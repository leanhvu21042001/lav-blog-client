import { motion } from 'framer-motion';
import React from 'react';

const variants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 },
};

export const AnimatedPage: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <motion.div variants={variants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }}>
      {children}
    </motion.div>
  );
};
