import sectionImg1 from "@assets/images/img8.png";
import sectionImg2 from "@assets/images/img3.png";

import About from "./About";
import Projects from "./Projects";
import NewsLetter from "./NewsLetter";
import Contact from "./Contact";
import Services from "./Services";
import Gallery from "./Gallery";
import Work from "./Work";
import PlaceholderImg from "./PlaceholderImg";

function Main({ setOpenModal }) {
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

      <>
        <PlaceholderImg src={sectionImg2} />
        <h3>Let's be internet BFFs &#127754; </h3>
      </>
    </main>
  );
}

export default Main;
