import { motion } from "framer-motion";
import Image from "next/image";
import bannerImg from "@assets/images/img4.png";

const bannerImgVariant = {
  hidden: { opacity: 0, scale: 0 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { type: "tween", duration: 1, delay: 4 },
  },
};

export const BannerImg = () => {
  return (
    <motion.div
      variants={bannerImgVariant}
      initial="hidden"
      animate="animate"
      className="column column-2"
    >
      <Image src={bannerImg} alt="" priority title="Family is everything to me" />
    </motion.div>
  );
};
