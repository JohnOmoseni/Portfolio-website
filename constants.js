import bgImg1 from "@assets/images/bgImg1.png";
import bgImg2 from "@assets/images/bgImg2.jpg";
import bgImg3 from "@assets/images/bgImg3.jpg";
import bgImg4 from "@assets/images/bgImg4.jpeg";

import forexchatroom from "@assets/images/forexchatroom.png";
import movbit from "@assets/images/movbit.png";
import boomplay from "@assets/images/boomplayer-img.png";
import loyalblaze from "@assets/images/loyalblaze-bg.png";
import fontipsums from "@assets/images/fontpalette-bg.png";

import akara from "@assets/images/akara-dashboard.png";
import david_consult from "@assets/images/david-consult.png";
import tripiee from "@assets/images/tripiee.png";
import qataloog from "@assets/images/qataloog.png";
import bundo from "@assets/images/bundo.png";

import gallery1 from "@assets/images/gallery-1.jpg";
import gallery2 from "@assets/images/gallery-2.webp";
import gallery3 from "@assets/images/gallery-3.webp";

import gallery4 from "@assets/images/gallery-4.webp";
import gallery5 from "@assets/images/gallery-5.jpg";
import gallery6 from "@assets/images/gallery-6.png";

import gallery7 from "@assets/images/gallery-7.png";
import gallery8 from "@assets/images/gallery-8.jpeg";
import gallery9 from "@assets/images/gallery-9.jpg";

// Nav-links
export const navLinks = [
	{
		title: "About",
		link: "about",
	},
	{
		title: "Work",
		link: "work",
	},
	{
		title: "Skills",
		link: "skills",
	},
	{
		title: "Projects",
		link: "projects",
	},
	{
		title: "Newsletter",
		link: "newsletter",
	},
	{
		title: "Contact",
		link: "contact",
	},
];

export const bgImages = [
	{ imgSrc: bgImg1 },
	{ imgSrc: bgImg2 },
	{ imgSrc: bgImg3 },
	{ imgSrc: bgImg4 },
];

// Gallery
export const galleryImages = [
	[
		{ id: 1, imgSrc: gallery1 },
		{ id: 2, imgSrc: gallery2 },
		{ id: 3, imgSrc: gallery3 },
	],

	[
		{ id: 4, imgSrc: gallery4 },
		{ id: 5, imgSrc: gallery5 },
		{ id: 6, imgSrc: gallery6 },
	],

	[
		{ id: 7, imgSrc: gallery7 },
		{ id: 8, imgSrc: gallery8 },
		{ id: 9, imgSrc: gallery9 },
	],
];

//Jobs
export const jobs = [
	{
		jobTitle: "Lead Frontend Engineer",
		company: "Qataloog",
		link: "https://github.com/Qataloogtech/",
		year: "September 2024",
		description: [
			"Led the development of a scalable EdTech platform offering curriculum-aligned content and digital classrooms, resulting in increased user retention and engagement.",
			"Translated complex UI/UX designs into high-performing, accessible web interfaces using React, enhancing cross-device responsiveness and user experience.",
			"Collaborated across product, design, and engineering teams to ship new features rapidly while maintaining clean, reusable, and maintainable code architecture.",
		],
	},
	{
		jobTitle: "Frontend Developer",
		company: "Akara Innovations",
		link: "https://github.com/Akarateam/",
		year: "January 2025",
		description: [
			"Spearheaded the development of a seamless property investment platform, enabling users to buy fractional stakes in real estate, leading to increased user acquisition and investor engagement.",
			"Collaborated with backend teams to integrate flexible payment plans and rental income systems, improving platform monetization.",
			"Enhanced platform responsiveness and UX, reducing bounce rates and improving session duration across devices.",
		],
	},

	{
		jobTitle: "Web Developer",
		company: "Aussiecare Staffing Solutions",
		link: "https://github.com/orgs/OctaveIncorporations/repositories",
		year: "December 2024",
		description: [
			"Developed and maintained a robust admin dashboard for a ride-hailing platform, enabling real-time driver and rider management and reducing operational overhead.",
			"Integrated notification systems, role-based access control, and analytics to support informed admin decisions and improve service coordination.",
			"Collaborated with product and design teams to launch features on schedule, contributing to a 30% increase in platform efficiency.",
		],
	},
	{
		jobTitle: "Senior Frontend Engineer",
		company: "iauconsultingservices",
		link: "#",
		year: "Remote",
		description: [
			"Design, development, and implementation of complex frontend features using NextJs, Typescript, React, Redux, JavaScript and other web technologies and leverage REST services and other third-party APIs",
			"Build scalable products that is user friendly with the use of OpenAI integration.",
			"Collaborate closely with designers, product managers, and backend engineers to ensure a seamless user experience and minimize complexity",
			"Troubleshoot and debug issues across multiple browsers and devices",
		],
	},
	{
		jobTitle: "Freelancer",
		link: "https://github.com/JohnOmoseni",
		year: "",
		description: [
			"Interfaced with clients on a weekly basis, providing technological expertise and knowledge",
			"Tested sites in various browsers and devices to ensure cross-browser compatibility and mobile responsiveness",
			"Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and React",
			"Built frontend applications for multiple clients, most especially Javascript and React applications",
			"Worked with a team of designers to build a marketing website and an e-commerce platform for Middle-belt, an ambitious venture originating from Funaab",
		],
	},
];

// Projects
export const projects = [
	{
		heading: "Ed-Tech",
		title: "Qataloog",
		imgSrc: qataloog,
		website: "https://qataloog.com/",
		github: "https://github.com/Qataloogtech/autocreate",
		body: "Qataloog is a global ed-tech platform delivering curriculum-aligned content to students, institutions, and educators. It empowers publishers to monetize their content, while giving teachers tools to create lessons, manage courses, and track learning outcomes. The platform also features an interactive exam module with automatic grading, analytics, and secure online assessments.",
		tools: [
			"React",
			"Typescript",
			"Redux Toolkit",
			"TailwindCSS",
			"AutoProctor",
			"Material UI",
			"TensorFlow",
			"Stripe",
			"i18next",
		],
	},
	{
		heading: "Real Estate",
		title: "Akara",
		imgSrc: akara,
		website: "https://akara.ng",
		github: "https://github.com/JohnOmoseni/akara-website",
		body: "Akara is a revolutionary real estate platform offering fractional property ownership and flexible payment plans. Users can invest in affordable housing, earn passive rental income weekly or monthly, and benefit from long-term property value appreciation. It democratizes property investment, making real estate more accessible to everyone.",
		tools: [
			"React",
			"Typescript",
			"Redux Toolkit",
			"TailwindCSS",
			"Recharts",
			"Flutterwave",
		],
	},
	{
		heading: "Marketplace",
		title: "Bundo",
		imgSrc: bundo,
		website: "https://bundo.app",
		github: "#",
		body: "Bundo is a dynamic digital marketplace that connects buyers with verified vendors in their local area. Vendors can showcase products, manage orders, integrate real-time logistics tracking, and attract nearby customers using powerful geolocation technology. With built-in promotional tools and ad features, vendors can boost visibility, gain new customers, and grow their business effortlessly.",
		tools: [
			"NextJS",
			"Typescript",
			"Redux Toolkit",
			"TailwindCSS",
			"Firebase",
			"Google Maps API",
			"Shadcn UI",
		],
	},
	{
		heading: "Ride Hailing",
		title: "Tripiee - Admin Dashboard",
		imgSrc: tripiee,
		website: "https://tripieeadmin.vercel.app/dashboard",
		github: "#",
		body: "Tripiee is an intuitive admin dashboard built for a ride-hailing platform. It enables admins to seamlessly manage drivers, riders, trip data, and platform settings. With real-time updates and smart analytics, Tripiee empowers operational teams to monitor performance, approve registrations, and maintain a smooth transportation ecosystem.",
		tools: ["React", "Typescript", "Redux Toolkit", "TailwindCSS", "Firebase"],
	},
	{
		heading: "Consultation Firm",
		title: "DavidConsult",
		imgSrc: david_consult,
		website: "https://david-consult.vercel.app/",
		github: "https://github.com/JohnOmoseni/david-consult",
		body: "David Consult is a versatile IT and consulting firm focused on empowering businesses with cutting-edge technology and strategic support. From system supplies and software development to IT training and workforce development, we deliver customized solutions that drive growth, efficiency, and innovation. Whether upgrading your tech stack or enhancing your team's capabilities, David Consult is your trusted partner for sustainable success.",
		tools: ["NextJS", "Typescript", "TailwindCSS", "Shadcn UI"],
	},
	{
		heading: "Finance",
		title: "Forex Chatroom",
		imgSrc: forexchatroom,
		website: "https://fx-business-chatroom.vercel.app",
		github: "https://github.com/JohnOmoseni/FX-business-chatroom",
		body: "An interactive web application designed to facilitate seamless communication and collaboration among users in real-time. Forex-chatroom provides a robust platform for users to exchange currencies, join chat rooms, exchange messages, and share multimedia content effortlessly.",
		tools: [
			"React",
			"Sass",
			"Redux toolkit",
			"TailwindCSS",
			"Javascript",
			"Firebase",
			"Flutterwave SDK",
		],
	},
	{
		heading: "Web3",
		title: "MovBit",
		imgSrc: movbit,
		website: "https://movbit.vercel.app",
		github: "https://github.com/JohnOmoseni/MovBit",
		body: "Movbit is an innovative Move to Earn platform that transforms your physical activities into valuable rewards. With Movbit, every step you take—whether walking, running, or exercising— holds real value. It incentivizes a healthy lifestyle by allowing users to earn rewards for their movements.",
		tools: [
			"NextJS",
			"Typescript",
			"RainbowKit",
			"Viem",
			"wagmi",
			"Redux toolkit",
			"TailwindCSS",
			"Framer Motion",
		],
	},
	{
		heading: "Music",
		title: "Boomplayer Clone",
		imgSrc: boomplay,
		website: "https://boomplayer-clone.vercel.app",
		github: "https://github.com/JohnOmoseni/boomplayer-clone",
		body: "A web based replica of the popular media, Boomplayer. This project is a minimal recreation of the app's key features and user interfaces, designed to offer a seamless and intuitive multimedia experience. The player offers a variety of playback options including repeat, shuffle and playlist support. Built for visualizing personalized shazam data such as top artists, tracks, recommendations, and audio features.",
		tools: [
			"React",
			"Sass",
			"Redux",
			"React Query",
			"SHAZAM",
			"RapidAPI",
			"SwiperJS",
		],
	},
	{
		heading: "Design",
		title: "Loyal Blaze",
		imgSrc: loyalblaze,
		website: "https://loyalblaze-johnny.netlify.app",
		github: "https://github.com/JohnOmoseni/loyal-blaze-design",
		body: "A Figma design implementation using HTML & CSS/SASS. This project involved bringing a static design to life using a rich palette of colors, precise positioning and captivating shadows. This figma implementation displays a visually stunning design that engages the user and draws them into an exciting user-experience.",
		tools: ["HTML", "CSS", "Javascript", "Figma"],
	},
	{
		heading: "Typography",
		title: "Fontsipsums",
		imgSrc: fontipsums,
		website: "https://fontpalette-johnny-dev.vercel.app/",
		github: "https://github.com/JohnOmoseni/fontsipsums",
		body: "As someone who has an eye for pretty letters, I wanted a way to visually see different font combinations together. I whipped up this simple website to display some of my favourite pairings combined with some fun lorem ipsum variations I found on the web. This project lets you explore different font pairings to your heart's content😉.",
		tools: ["HTML", "CSS", "Vercel", "Google-Fonts"],
	},
];
