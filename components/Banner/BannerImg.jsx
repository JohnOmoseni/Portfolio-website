import { motion } from "framer-motion";
import Image from "next/image";
import bannerImg from "@assets/images/img4.png";

const bannerImgVariant = {
  hidden: { opacity: 0, scale: 0 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { type: "tween", duration: 1, delay: 6 },
  },
};

export const BannerImg = () => {
  return (
    <motion.div
      variants={bannerImgVariant}
      initial="hidden"
      animate="animate"
      className="column column-2"
      title="Family is everything to me"
    >
      <Image src={bannerImg} alt="" priority />
    </motion.div>
  );
};
