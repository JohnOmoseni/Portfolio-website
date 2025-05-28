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

			{/* <PlaceholderImg src={sectionImg1} /> */}

			<Gallery setOpenModal={setOpenModal} />
			<NewsLetter />
			<Contact />

			{/* <PlaceholderImg src={sectionImg2} text /> */}
		</main>
	);
}

export default Main;
