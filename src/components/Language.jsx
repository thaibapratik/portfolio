const Language = ({ icon, name }) => {
	return (
		<div
			className={`flex flex-col gap-2 items-center h-[100px] w-[180px] justify-end`}
		>
			<img src={icon} alt={`${name} icon`} height={40} width={40} />
			<p className="text-white">{name}</p>
		</div>
	);
};
export default Language;
