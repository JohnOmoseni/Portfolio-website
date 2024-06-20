import { motion } from "framer-motion";
import Image from "next/image";

const imgContainer = {
	hidden: { opacity: 0, y: 100 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { ease: "easeIn", duration: 1.5 },
	},
};

function PlaceholderImg({ src, text }) {
	return (
		<motion.span
			className="placeholder-img"
			variants={imgContainer}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
		>
			<Image src={src} alt="" className="section-img" placeholder="blur" />
		</motion.span>
	);
}

export default PlaceholderImg;
