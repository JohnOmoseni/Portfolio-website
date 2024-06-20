import bgImg1 from "@assets/images/bgImg1.png";
import bgImg2 from "@assets/images/bgImg2.jpg";
import bgImg3 from "@assets/images/bgImg3.jpg";
import bgImg4 from "@assets/images/bgImg4.jpeg";

import forexchatroom from "@assets/images/forexchatroom.png";
import bugupay from "@assets/images/bugupay.png";
import movbit from "@assets/images/movbit.png";
import betbinary from "@assets/images/betbinary.png";
import iwebchat from "@assets/images/iwebchat.png";
import boomplay from "@assets/images/boomplayer-img.png";
import gamersmart from "@assets/images/gamersmart-bg.png";
import fontipsums from "@assets/images/fontpalette-bg.png";

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
		jobTitle: "Frontend Engineer",
		company: "Octave Incorporations",
		link: "https://github.com/orgs/OctaveIncorporations/repositories",
		year: "October 2023",
		description: [
			"Worked closely with designers, backend developers and management team to develop, document and manage the Octave platform",
			"Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with the Octave platform",
			"Conduct code reviews and ensure adherence to coding standards",
		],
	},
	{
		jobTitle: "Senior Frontend Engineer",
		company: "iauconsultingservices",
		link: "",
		year: "Remote",
		description: [
			"Design, development, and implementation of complex frontend features using NextJs, Typescript, React, Redux, JavaScript and other web technologies and leverage REST services and other third-party APIs",
			"Build scalable products that is user friendly with the use of OpenAI integration.",
			"Collaborate closely with designers, product managers, and backend engineers to ensure a seamless user experience and minimize complexity",
			"Troubleshoot and debug issues across multiple browsers and devices",
			"Optimize applications for maximum speed and scalability",
		],
	},
	{
		jobTitle: "Freelancer",
		link: "https://github.com/JohnOmoseni",
		year: "Present",
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
		heading: "Finance & Social Media",
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
		heading: "Finance",
		title: "BuguPay",
		imgSrc: bugupay,
		website: "https://bugupay.vercel.app",
		github: "https://github.com/JohnOmoseni/bugupay",
		body: "BuguPay is a cutting-edge web application designed for smart and convenient bill payments. It offers users a fast, transparent, and secure platform to manage and pay all their bills online with ease.",
		tools: [
			"NextJS",
			"Typescript",
			"Redux toolkit",
			"TailwindCSS",
			"ShadCN",
			"Paystack SDK",
			"Firebase",
			"Framer Motion",
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
		heading: "Betting",
		title: "BetBinary",
		imgSrc: betbinary,
		website: "https://bet-binary.vercel.app",
		github: "https://github.com/JohnOmoseni/bet-binary",
		body: "Bet-Binary is a revolutionary Web3 betting platform that allows users to bet and win on a wide range of events, including sports, stocks, and cryptocurrencies. Leveraging the power of blockchain technology, Bet-Binary ensures a transparent, secure, and decentralized betting experience.",
		tools: [
			"NextJS",
			"Javascript",
			"Tanstack Query",
			"Tanstack Table",
			"wagmi",
			"Viem",
			"Redux toolkit",
			"TailwindCSS",
		],
	},
	{
		heading: "AI",
		title: "iWebChat",
		imgSrc: iwebchat,
		website: "https://iwebchat.vercel.app",
		github: "https://github.com/JohnOmoseni/iWebChat",
		body: "iWebChat is an advanced web application designed to enhance your chatbot experience with cutting-edge AI technology powered by your own data. The platform ensures more engaging and enjoyable interactions with your audience, making communication seamless and efficient.",
		tools: [
			"NextJS",
			"Typescript",
			"Tanstack Query",
			"Recharts",
			"Redux toolkit",
			"TailwindCSS",
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
		imgSrc: project2,
		website: "https://loyalblaze-johnny.netlify.app",
		github: "https://github.com/JohnOmoseni/loyal-blaze-design",
		body: "A Figma design implementation using HTML & CSS/SASS. This project involved bringing a static design to life using a rich palette of colors, precise positioning and captivating shadows. This figma implementation displays a visually stunning design that engages the user and draws them into an exciting user-experience.",
		tools: ["HTML", "CSS", "Javascript", "Figma"],
	},
	{
		heading: "E-commerce",
		title: "Gamers Mart",
		imgSrc: gamersmart,
		website: "https://gamify-mart.vercel.app",
		github: "https://github.com/JohnOmoseni/Gamers-mart",
		body: "An ecommerce game website where users can indulge in their passion for shopping and taking their gaming experience to the next level. This project is designed to cater to all of your gaming needs, providing you with access to an extensive collection of games, from popular titles to new releases.",
		tools: ["React", "Redux", "Framer-motion", "Sass", "SwiperJS"],
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
