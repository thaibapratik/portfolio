import html from "../assets/html.png";

import Language from "./Language";

const LanguageSection = () => {
	const Icons = [
		{
			name: "HTML",
			url: html,
		},
		{
			name: "CSS",
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png",
		},
		{
			name: "Javascript",
			url: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
		},
		{
			name: "React",
			url: "https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945110.png",
		},
		{
			name: "Git",
			url: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
		},
		{
			name: "GitHub",
			url: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
		},
		{
			name: "MongoDB",
			url: "https://www.svgrepo.com/show/331488/mongodb.svg",
		},
		{
			name: "Node.js",
			url: "https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png",
		},
		{
			name: "Express.js",
			url: "https://img.icons8.com/color/512/express-js.png",
		},
	];

	return (
		<div>
			<h3 className="text-white text-[1.4rem] mt-16 text-center tracking-wide">
				Tech Stack
			</h3>
			<div className="mt-5 grid lg:grid-cols-3 grid-cols-2">
				{Icons.map((icon) => (
					<Language
						icon={icon.url}
						name={icon.name}
						key={icon.name}
					/>
				))}
			</div>
		</div>
	);
};

export default LanguageSection;
