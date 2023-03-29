import { motion } from "framer-motion";

import Heading from "./Heading";
import AboutImage from "./AboutImg";
import AboutBody from "./AboutBody";

const containerVariant = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeIn", duration: 1.5, staggerChildren: 0.3, delayChildren: 0.8 },
  },
};

function About() {
  return (
    <motion.section
      className="about"
      id="about"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Heading name="about" number="01." title="About Me" />
      <div className="content">
        <AboutBody />

        <AboutImage />
      </div>
    </motion.section>
  );
}

export default About;
