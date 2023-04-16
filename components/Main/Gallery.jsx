import { galleryImages } from "../../constants";
import { motion } from "framer-motion";
import Heading from "./Heading";
import Image from "next/image";

const containerVariant = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: "easeIn" },
  },
};

const ImgBox = ({ src, getImgsrc }) => {
  return (
    <div className="img-box">
      <Image src={src} alt="" placeholder="blur" onClick={e => getImgsrc(e.target.src)} />
    </div>
  );
};

const GalleryColumn = ({ gallery, idx, getImgsrc }) => {
  return (
    <div className={`gallery gallery-${idx + 1}`}>
      {gallery.map(img => {
        return <ImgBox src={img.imgSrc} key={img.id} getImgsrc={getImgsrc} />;
      })}

      <ImgBox src={gallery[0].imgSrc} getImgsrc={getImgsrc} />
      <ImgBox src={gallery[1].imgSrc} getImgsrc={getImgsrc} />
      <ImgBox src={gallery[2].imgSrc} getImgsrc={getImgsrc} />
    </div>
  );
};

function Gallery({ setOpenModal }) {
  const getImgsrc = src => {
    console.log(src);

    setOpenModal(prev => {
      return { ...prev, open: true, msg: null, imgSrc: src };
    });
  };

  return (
    <motion.section
      className="gallery-container"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Heading name="gallery" title="Gallery" disabled />
      <p className="subtitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, unde.
      </p>

      <div className="gallery-content">
        {galleryImages.map((gallery, idx) => {
          return <GalleryColumn gallery={gallery} idx={idx} key={idx} getImgsrc={getImgsrc} />;
        })}
      </div>
    </motion.section>
  );
}

export default Gallery;
