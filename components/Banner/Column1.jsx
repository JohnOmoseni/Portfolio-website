import { motion } from "framer-motion";
import AnimatedLetters from "../AnimatedLetters";
import RotateWords from "./RotateWords";

const animateTagLine = {
  hidden: { opacity: 0, x: "-100vw" },
  animate: { opacity: 1, x: 0, transition: { delay: 0.4, duration: 1, type: "spring" } },
};

const animateSubtitle = {
  hidden: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 8, duration: 1.3, type: "tween", ease: "easeIn" } },
};

const animateBtn = {
  hidden: { opacity: 0, x: "-100vw" },
  animate: { opacity: 1, x: 0, transition: { delay: 8.8, duration: 1, type: "spring" } },
};

const textContainer = {
  hidden: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      ease: "easeIn",
      delayChildren: 1,
      when: "beforeChildren",
    },
  },
};

const container = {
  hidden: null,
  animate: null,
};

function Column1() {
  return (
    <motion.div className="column column-1" variants={container} initial="hidden" animate="animate">
      <motion.p className="tagline fs-small ff-variant" variants={animateTagLine}>
        Hey there, my name is
      </motion.p>

      <motion.div variants={textContainer} className="banner-title">
        <AnimatedLetters word="Johnny" />
        <AnimatedLetters word="Omoseni" offset />
      </motion.div>

      <RotateWords />

      <motion.p className="text fw-semi-bold" variants={animateSubtitle}>
        As a frontend software developer, I understand the importance of creative interfaces that
        are intuitive and visually engaging. Whether I'm working on a new project or refining an
        exisiting one, I always strive to create beautiful, user-friendly interfaces that delight
        and inspire. &#129299;
      </motion.p>

      <motion.a href="#contact" className="banner-btn fw-semi-bold" variants={animateBtn}>
        Connect with me!
      </motion.a>
    </motion.div>
  );
}

export default Column1;
