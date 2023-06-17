import { motion } from 'framer-motion';
import React from 'react';

const transition = { duration: 0.5, yoyo: Infinity, ease: 'easeInOut' };

const WaveLineAnimation = () => {
  return (
    <svg
      width="132"
      height="12"
      viewBox="0 0 132 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M1 5.44537C7.19048 0.747265 11.8333 -0.226933 14.9286 2.52277C18.0238 5.27248 21.119 6.35453 24.2143 5.76893C27.3095 5.18332 30.4048 5.83244 33.5 7.71628C36.5952 9.60012 39.6905 10.5234 42.7857 10.4862C45.8809 10.4489 48.9762 10.1204 52.0714 9.50068C55.1667 8.88095 58.2619 7.42727 61.3571 5.13966C64.4524 2.85204 67.5476 2.95542 70.6429 5.44979C73.7381 7.94415 76.8333 8.80165 79.9286 8.0223C83.0238 7.24294 86.119 6.12192 89.2143 4.65925C92.3095 3.19658 95.4048 3.76536 98.5 6.3656C101.595 8.96584 104.69 9.38362 107.786 7.61895C110.881 5.85427 113.976 6.09446 117.071 8.33951C120.167 10.5846 123.262 11.4088 126.357 10.8121C129.452 10.2154 131 9.46766 131 8.56888"
        stroke="black"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={transition}
      />
    </svg>
  );
};

export default WaveLineAnimation;
