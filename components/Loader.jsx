import { useEffect } from "react";
import { motion } from "framer-motion";

import { BallSpinner } from "react-spinners-kit";

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
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
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
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
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
        <BallSpinner size={40} className="loader-icon" />
        <span className="loader-text">Loading...</span>
      </motion.div>
    </motion.div>
  );
};

const Image = ({ src, fallback, type = "image/webp", alt }) => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img src={fallback} alt={alt} />
    </picture>
  );
};

export default Loader;
