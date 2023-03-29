import { motion } from "framer-motion";

const textVariant = {
  hidden: { y: 50, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: "120", duration: 1.2 },
  },
};

function AnimatedLetters({ word, offset }) {
  return (
    <div className={`flex-container ${offset && "offset"}`}>
      {[...word].map((letter, idx) => (
        <motion.h1 variants={textVariant} className="letter" key={idx}>
          {letter}
        </motion.h1>
      ))}
    </div>
  );
}

export default AnimatedLetters;
