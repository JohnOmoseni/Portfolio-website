import ManU from "components/Svgs/ManU";
import Skills from "./Skills";

function AboutBody({ variant }) {
  return (
    <div variants={variant} className="about-body">
      <p>
        Hello there!&#128075; It's nice that you're taking the time to check out my
        portfolio&#128522;. I'm
        <span className="text-variant"> &nbsp;Johnny</span> and I'm based in Nigeria. I'm passionate
        about converting ideas into real life products and building solutions that runs on the
        internet. Over the last 2 years, I've developed products for businesses, providing solutions
        on small business websites to enterprise web applications with focus on quality, beautiful
        user interfaces, accessibility and fast user experiences.&#128640;
      </p>
      <p>
        I once led the frontend team at&nbsp;
        <a href="https://github.com/Serchservice" target="_blank" rel="noreferrer noopener">
          Serch
        </a>
        , a request service startup through building multiple React applications into a robust
        in-house and outdoor service platform.
      </p>
      <p>
        Frontend development for me is a perfect blend of creativity, critical thinking and
        collaboration. It's a field that consistently pushes me to enhance my skills and knowledge,
        providing me with continual challenges.
      </p>
      <p>
        I'm a well-organized person, problem solver, independent employee with high attention to
        detail. I'm interested in the entire frontend spectrum and working on amibtious projects
        with positive people. I'm also naturally curious and perpetually working on improving my
        skills one design problem at a time. I'm also a big Manchester United Fan {<ManU />}.
      </p>

      <div className="tools">
        <p>
          Currently, I'm looking to transition into Web3 and Blockchain development.
          <br /> Here are a few technologies I&lsquo;ve been working with to that effect
        </p>
        <ul className="skills">
          <Skills title="Web3.js" />
          <Skills title="Three.js" />
          <Skills title="Ether.js" />
          <Skills title="Solidity" />
        </ul>
      </div>
    </div>
  );
}

export default AboutBody;
