import { galleryImages } from "../../constants";
import Heading from "./Heading";
import Image from "next/image";

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
    <section className="gallery-container">
      <Heading name="gallery" title="Gallery" disabled />
      <p className="subtitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, unde.
      </p>

      <div className="gallery-content">
        {galleryImages.map((gallery, idx) => {
          return <GalleryColumn gallery={gallery} idx={idx} key={idx} getImgsrc={getImgsrc} />;
        })}
      </div>
    </section>
  );
}

export default Gallery;
