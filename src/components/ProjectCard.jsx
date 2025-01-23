import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";

const ProjectCard = ({ project }) => {
	return (
		<div>
			<Card className="py-4">
				<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
					<h4 className="font-bold text-large">{project.title}</h4>

					<div className="flex gap-2 w-[15rem] flex-wrap h-[4rem]">
						{project.languages.map((language) => (
							<div className="mt-1" key={language.name}>
								<Chip
									color="default"
									startContent={<language.icon />}
									size="sm"
								>
									{language.name}
								</Chip>
							</div>
						))}
					</div>
				</CardHeader>
				<CardBody className="overflow-visible py-2">
					<a
						href={project.siteURL}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							alt="Card background"
							className="object-cover rounded-xl cursor-pointer hover:scale-[1.02] shadow-md hover:shadow-[#918adcc0]"
							src={project.imageURL}
							width={270}
							height={180}
						/>
					</a>
				</CardBody>
			</Card>
		</div>
	);
};

export default ProjectCard;
