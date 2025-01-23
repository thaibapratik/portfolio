import everest from "../assets/everest.jpg";
import cct from "../assets/cct.jpg";
import ExperienceTable from "./ExperienceTable";

const Education = () => {
	const educations = [
		{
			title: "High School",
			institution: "Everest English Boarding Seconday School",
			icon: everest,
			date: "2019-2021",
			major: "Management in Computer Science",
		},

		{
			title: "Bachelor",
			institution: "Crimson College of Technology",
			icon: cct,
			date: "2022-present",
			major: "Bachelor in Computer Application",
		},
	];
	return (
		<div className="border border-white m-10 rounded-xl text-white flex justify-start flex-col pr-32 pl-20 max-sm:pl-10 max-sm:pr-10 max-sm:rounded-none">
			{educations.map((education) => (
				<ExperienceTable key={education.title} experience={education} />
			))}
		</div>
	);
};
export default Education;
