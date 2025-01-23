import ProjectCard from "./ProjectCard";
import { FaReact as ReactIcon } from "react-icons/fa";
import { RiTailwindCssFill as TailwindIcon } from "react-icons/ri";
import { SiNextui as NextUIIcon } from "react-icons/si";
import screenshot1 from "../assets/screenshot1.png";

const Projects = () => {
	const projects = [
		{
			title: "My portfolio",
			languages: [
				{ name: "React", icon: ReactIcon },
				{ name: "Tailwind", icon: TailwindIcon },
				{ name: "NextUI", icon: NextUIIcon },
			],
			imageURL: screenshot1,
			siteURL: "https://thaibapratik.github.io/portfoliowebsite",
		},
		{
			title: "My portfolio",
			languages: [
				{ name: "React", icon: ReactIcon },
				{ name: "Tailwind", icon: TailwindIcon },
				{ name: "NextUI", icon: NextUIIcon },
			],
			imageURL: screenshot1,
			siteURL: "https://thaibapratik.github.io/portfoliowebsite",
		},
		{
			title: "My portfolio",
			languages: [
				{ name: "React", icon: ReactIcon },
				{ name: "Tailwind", icon: TailwindIcon },
				{ name: "NextUI", icon: NextUIIcon },
			],
			imageURL: screenshot1,
			siteURL: "https://thaibapratik.github.io/portfoliowebsite",
		},
	];

	return (
		<section>
			<h2 className="heading">Project</h2>
			<div className="grid mt-20 lg:grid-cols-2 gap-20 max-lg:grid-cols-1">
				{projects.map((project) => (
					<ProjectCard project={project} key={project.title} />
				))}
			</div>
		</section>
	);
};
export default Projects;
