import { CgClose } from "react-icons/cg";
import { motion } from "framer-motion";
import Image from "next/image";

const animateModal = {
  hidden: { opacity: 0, scale: 0.2 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: "easeIn",
      duration: 1,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    y: "100vh",
    transition: {
      delay: 0.2,
      duration: 1,
    },
  },
};

function Modal({ setOpenModal, imgSrc }) {
  const closeModal = () => {
    setOpenModal(prev => {
      return { ...prev, open: false, imgSrc: null };
    });
  };

  return (
    <motion.div
      className="modal-open"
      variants={animateModal}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={() => closeModal()}
    >
      <span className="close-modal" onClick={() => closeModal()} title="close-menu">
        <CgClose size="30" />
      </span>
      <div className="modal-img-box modal" onClick={e => e.stopPropagation()}>
        <Image src={imgSrc} alt="" />
      </div>
    </motion.div>
  );
}

export default Modal;
