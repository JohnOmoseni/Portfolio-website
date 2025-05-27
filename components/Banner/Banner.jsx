import { useState, useEffect } from "react";
import { bgImages } from "../../constants";
import Column1 from "./Column1";

function Banner() {
	const [currImg, setCurrImg] = useState(0);

	useEffect(() => {
		let i = 0;
		const changeBg = () => {
			if (i >= bgImages.length - 1) {
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
			{/* <div className="bubbles">
        <Bubbles />
        <Bubbles />
        <Bubbles />
        <Bubbles />
        <Bubbles />
        <Bubbles />
      </div> */}
		</div>
	);
}

export default Banner;
