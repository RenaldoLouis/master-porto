import emoji from "react-easy-emoji";

export const greetings = {
	name: "Fernando Renaldo Louis",
	title: "I'm Fernando Renaldo Louis",
	description:
		"A Full Stack Web Developer and Mobile App Developer having an experience of building Web applications with JavaScript / Reactjs / React / Nodejs  / Golang / Flutter / Springboot and some other cool libraries and frameworks.",
	resumeLink: "https://drive.google.com/file/d/1sn3Nn93Kdo3loDyuQNH76cGdkNJLZO0s/view?usp=sharing",
};

export const openSource = {
	githubUserName: "RenaldoLouis",
};

export const contact = {};

export const socialLinks = {
	instagram: "https://www.instagram.com/renaldo_louis",
	github: "https://github.com/RenaldoLouis",
	twitter: "https://twitter.com/RenaldoLouis5",
	linkedin: "https://www.linkedin.com/in/renaldo-louis-8a2a3017b/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"Curious full stack developer who wants to explore every tech stack",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"Building responsive Single-Page-Apps (SPA) & PWA in React"
				),
				emoji("Building Awesome Mobile Application using Flutter"),
				emoji(
					"Building RESTful APIs with Springboot and Docker"
				),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
				{
					skillName: "Flutter",
					fontAwesomeClassname: "logos:flutter",
				},
			],
		},
		{
			title: "Cloud Infra-Architecture",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("Experience of working on multiple cloud platforms"),
				emoji(
					"Hosting and maintaining websites on virtual machine instances along with integration of databases"
				),
				emoji(
					"Building CI/CD pipelines for automated testing & deployment using Github Actions"
				),
			],
			softwareSkills: [
				// ? Check README To get icon details
				{
					skillName: "Heroku",
					fontAwesomeClassname: "logos:heroku-icon",
				},
				{
					skillName: "PostgreSQL",
					fontAwesomeClassname: "logos:postgresql",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker-icon",
				},
				{
					skillName: "Nginx",
					fontAwesomeClassname: "logos:nginx",
				},
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "Problem Solving",
		progressPercentage: "85",
	},
	{
		Stack: "Leadership",
		progressPercentage: "70",
	},
	{
		Stack: "Teamwork",
		progressPercentage: "90",
	},
];

export const educationInfo = [
	{
		schoolName: "Universitas Multimedia Nusantara",
		subHeader: "Master of Science in Computer Science",
		duration: "September 2017 - August 2021",
	},
];

export const experience = [
	{
		role: "Software Engineer",
		company: "Google",
		companylogo: "/img/icons/common/google.svg",
		date: "June 2018 – Present",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		descBullets: [
			"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		],
	},
	{
		role: "Front-End Developer",
		company: "Github",
		companylogo: "/img/icons/common/github.svg",
		date: "May 2017 – May 2018",
		desc: "Lorem ipsum dolor sit amet, consefdctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		role: "Software Engineer Intern",
		company: "Airbnb",
		companylogo: "/img/icons/common/airbnbLogo.png",
		date: "Jan 2015 – Sep 2015",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
];

export const projects = [
	{
		name: "Jumlaty",
		desc: "Application to help grocery shopping in saudi arabia",
		link: "https://play.google.com/store/apps/details?id=com.jumlaty.customer&hl=en_US&gl=US&pli=1",
	},
	{
		name: "Hisabi",
		desc: "App to help record and track store inventory",
		link: "https://play.google.com/store/apps/details?id=com.hisabi",
	},
	{
		name: "Masareefy",
		desc: "Apps to help company to track their expenses",
		link: "https://play.google.com/store/apps/details?id=com.appsqueue.masareef&hl=en&gl=US",
	},
	{
		name: "Alphaverse",
		desc: "Ethereum Wallet Apps to trade NFT",
	},
];

export const feedbacks = [
	{
		name: "Hassan Mehmood",
		feedback:
			"We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose FRL web developer services for u.",
	},
	{
		name: "Maheen Altaf",
		feedback:
			"the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
	},
];
