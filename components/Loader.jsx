import { useEffect } from "react";
import { motion } from "framer-motion";

import { SwapSpinner } from "react-spinners-kit";

const container = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeIn",
      staggerChildren: 0.35,
    },
  },
  exit: {
    opacity: 0,
    x: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: "easeIn",
      duration: 3,
    },
  },
};

const Loader = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 7000);
    return () => {
      clearTimeout(timer);
    };
  }, [setLoading]);
  return (
    <motion.div
      className="loader"
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      // onAnimationComplete={() => setLoading(false)}
    >
      <motion.div className="loader-inner" variants={itemMain}>
        <SwapSpinner size={50} className="loader-icon" color="#06a680" />
        <span className="loader-text">Loading...</span>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
