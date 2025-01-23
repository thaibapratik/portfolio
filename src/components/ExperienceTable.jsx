const ExperienceTable = ({ experience }) => {
	return (
		<div className="border-l-1 border-white py-8">
			<div className="flex gap-8 items-center pl-5 max-sm:pl-2 relative">
				<div className="">
					{experience.icon && (
						<img
							src={experience.icon}
							alt={`${experience.institution} logo`}
							className="rounded-full object-cover h-10 w-10 absolute top-2 -left-5 border-white border-3 max-sm:-left-5 max-sm:top-3"
						/>
					)}
				</div>
				<div>
					<p className="text-sm font-light text-white/60">
						{experience.date}
					</p>
					<h3>{experience.institution}</h3>
					<p className="text-sm font-light text-white/60">
						{experience.major
							? experience.major
							: experience.position}
					</p>
				</div>
			</div>
		</div>
	);
};
export default ExperienceTable;
