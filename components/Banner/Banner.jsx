import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { bgImages } from "../../constants";
import bannerImg from "@assets/images/img10.png";
import Bubbles from "./Bubbles";
import Column1 from "./Column1";

const bannerImgVariant = {
  hidden: { opacity: 0, scale: 0 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { type: "tween", duration: 1, delay: 4 },
  },
};

function Banner() {
  const [currImg, setCurrImg] = useState(0);
  let i = 0;

  useEffect(() => {
    const changeBg = () => {
      if (i === bgImages.length - 1) {
        i = 0;
        setCurrImg(i);
      } else {
        i++;
        setCurrImg(i);
      }
    };

    const interval = setInterval(changeBg, 12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="banner"
      id="home"
      style={{ backgroundImage: `url(${bgImages[currImg].imgSrc.src})` }}
    >
      <Column1 />
      <motion.div
        variants={bannerImgVariant}
        initial="hidden"
        animate="animate"
        className="column column-2"
      >
        <Image src={bannerImg} alt="" priority />
      </motion.div>

      <div className="bubbles">
        <Bubbles />
        <Bubbles />
        <Bubbles />
        <Bubbles />
        <Bubbles />
        <Bubbles />
      </div>
    </div>
  );
}

export default Banner;
