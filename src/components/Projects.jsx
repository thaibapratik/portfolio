import ProjectCard from "./ProjectCard";
import { FaReact as ReactIcon } from "react-icons/fa";
import { SiExpress as ExpressIcon } from "react-icons/si";
import { FaNodeJs as NodeIcon } from "react-icons/fa";
import { RiTailwindCssFill as TailwindIcon } from "react-icons/ri";
import { SiMongodb as MongoDbIcon } from "react-icons/si";
import { SiNextui as NextUIIcon } from "react-icons/si";
import organizeme from "../assets/OrganizeMe.png";
import portfolio from "../assets/portfolio.png";

const Projects = () => {
	const projects = [
		{
			title: "My portfolio",
			languages: [
				{ name: "React", icon: ReactIcon },
				{ name: "Tailwind", icon: TailwindIcon },
				{ name: "NextUI", icon: NextUIIcon },
			],
			imageURL: portfolio,
			siteURL: "https://thaibapratik.github.io/portfolio",
		},
		{
			title: "OrganizeMe",
			languages: [
				{ name: "React", icon: ReactIcon },
				{ name: "Node", icon: NodeIcon },
				{ name: "Express", icon: ExpressIcon },
				{ name: "MongoDb", icon: MongoDbIcon },
			],
			imageURL: organizeme,
			siteURL: "https://organize-me-thaibapratik.netlify.app",
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
