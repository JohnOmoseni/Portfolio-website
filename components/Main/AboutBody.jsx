import Skills from "./Skills";

function AboutBody({ variant }) {
	return (
		<div variants={variant} className="about-body">
			<p>
				Hello there!&#128075; It's nice that you're taking the time to check out
				my portfolio&#128522;. I'm
				<span className="text-variant"> &nbsp;John</span> and I'm based in
				Lagos, Nigeria. I'm passionate about converting ideas into real life
				products and building solutions that runs on the internet. Over the last
				4 years, I've developed products for businesses, providing solutions on
				small business websites to enterprise web applications with focus on
				quality, beautiful user interfaces, accessibility and fast user
				experiences.&#128640;
			</p>
			<p>
				Frontend development for me is a perfect blend of creativity, critical
				thinking and collaboration. It's a field that consistently pushes me to
				enhance my skills and knowledge, providing me with continual challenges.
			</p>
			<p>
				I'm a well-organized person, problem solver, independent employee with
				high attention to detail. I'm interested in the entire frontend spectrum
				and working on amibtious projects with positive people. I'm also
				naturally curious and perpetually working on improving my skills one
				design problem at a time.
			</p>
		</div>
	);
}

export default AboutBody;
