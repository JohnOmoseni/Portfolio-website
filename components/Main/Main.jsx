import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import sectionImg1 from "@assets/images/img8.png";
import sectionImg2 from "@assets/images/img3.png";

import About from "./About";
import Projects from "./Projects";
import NewsLetter from "./NewsLetter";
import Contact from "./Contact";
import Services from "./Services";
import Gallery from "./Gallery";
import Modal from "../Modal";
import Work from "./Work";
import PlaceholderImg from "./PlaceholderImg";

function Main() {
  const [openModal, setOpenModal] = useState({ open: false, imgSrc: null });

  return (
    <main>
      <About />
      <Work />
      <Services />
      <Projects />

      <PlaceholderImg src={sectionImg1} />

      <Gallery setOpenModal={setOpenModal} />
      <NewsLetter />
      <Contact />

      <PlaceholderImg src={sectionImg2} />

      <AnimatePresence>
        {openModal?.open && <Modal setOpenModal={setOpenModal} imgSrc={openModal.imgSrc} />}
      </AnimatePresence>
    </main>
  );
}

export default Main;
