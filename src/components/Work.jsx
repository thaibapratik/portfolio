import cct from "../assets/cct.jpg";
import ExperienceTable from "./ExperienceTable";

const Work = () => {
	const works = [];

	return (
		<div className="border border-white m-10 rounded-xl text-white flex justify-start flex-col pr-32 pl-20 max-sm:pl-10 max-sm:pr-10 max-sm:rounded-none">
			{works.length === 0 ? (
				<h2 className="text-2xl text-white text-center w-full p-10 max-sm:text-xl">
					No results found!
				</h2>
			) : (
				<div className="border-l border-white w-[35rem] pt-14">
					{works.map((work, index) => (
						<ExperienceTable key={index} experience={work} />
					))}
				</div>
			)}
		</div>
	);
};
export default Work;
