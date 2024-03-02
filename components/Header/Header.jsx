import { motion } from "framer-motion";
import { navLinks } from "../../constants";
import { HiMenuAlt2 } from "react-icons/hi";
import Logo from "../Svgs/Logo";

import NavLinks from "./NavLinks";

const animateHeader = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { type: "tween", ease: "easeOut", duration: 1, delay: 0.8 },
	},
};

function Header({ setOpenMenu, elem }) {
	const downloadResume = (e) => {
		e.target.innerText = "Downloading...";
		fetch("/assets/myresume.pdf")
			.then((res) => res.blob())
			.then((res) => {
				const link = document.createElement("a");
				link.setAttribute("download", "John Omoseni Resume");

				const href = URL.createObjectURL(res);
				link.href = href;
				link.click();
				e.target.innerText = "RESUME";
				URL.revokeObjectURL(href);
			})
			.catch((err) => {
				e.target.innerText = "RESUME";
			});
	};

	return (
		<motion.header
			ref={elem}
			variants={animateHeader}
			initial="hidden"
			animate="visible"
		>
			<div className="logo">
				<Logo />
				<span
					className="menu icon"
					onClick={() => {
						console.log("clicked");
						setOpenMenu((prev) => !prev);
					}}
					title="Menu"
				>
					<HiMenuAlt2 size="30" fill="#ccc" />
				</span>
			</div>

			<nav className="nav-links">
				{navLinks.map((link, idx) => (
					<NavLinks key={idx} {...link} idx={idx} />
				))}
			</nav>

			<button
				className="resume-btn"
				onClick={downloadResume}
				title="Download my resume"
			>
				RESUME
			</button>
		</motion.header>
	);
}

export default Header;
