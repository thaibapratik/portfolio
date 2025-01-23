const Button = ({ children, iconUrl: Icon }) => {
	return (
		<div className="bg-darkerGrey hover:bg-vividBlue px-3.5 py-2.5 rounded-full text-white w-fit flex gap-1 items-center cursor-pointer text-sm">
			<span>{children}</span>
			<Icon size={18} />
		</div>
	);
};
export default Button;
