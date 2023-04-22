import { motion } from "framer-motion";
import Image from "next/image";
import aboutme from "@assets/images/johnny.jpg";

const imgVariant = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, delay: 0.6 },
  },
};

function AboutImage() {
  return (
    <motion.div variants={imgVariant} className="img-container">
      <Image src={aboutme} alt="" placeholder="blur" priority />
    </motion.div>
  );
}

export default AboutImage;
