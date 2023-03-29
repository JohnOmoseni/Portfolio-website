import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import me from "@assets/images/people-01.png";

const imgVariant = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1 },
  },
};

function AboutImage() {
  return (
    <motion.div variants={imgVariant} className="img-container">
      <Image src={me} alt="" placeholder="blur" />
    </motion.div>
  );
}

export default AboutImage;
