import { useState } from "react";
import Work from "./Work";
import Education from "./Education";
import LanguageSection from "./LanguageSection";

const Experience = () => {
	const [selectedTab, setSelectedTab] = useState("Education");
	return (
		<div className="flex flex-col items-center ">
			<h1 className="heading">Experience</h1>
			<div className="text-white mt-24 text-center relative">
				<Tabs
					title="Education"
					selectedTab={selectedTab}
					setSelectedTab={setSelectedTab}
				></Tabs>
				<Tabs
					title="Work"
					selectedTab={selectedTab}
					setSelectedTab={setSelectedTab}
				></Tabs>
			</div>

			{selectedTab === "Education" ? <Education /> : <Work />}
			<LanguageSection />
		</div>
	);
};
export default Experience;

const Tabs = ({ title, selectedTab, setSelectedTab }) => {
	return (
		<div
			className={`relative cursor-pointer inline text-center border-2 border-white py-5 px-2.5 max-sm:px-1 max-sm:text-sm
				${
					title === "Education"
						? "rounded-l-full border-r-0"
						: "rounded-r-full border-l-0"
				}
				`}
			onClick={() => setSelectedTab(title)}
		>
			<div
				className={`inline px-20 py-3 ${
					selectedTab === title && "rounded-full bg-darkerGrey"
				}`}
			>
				{title}
			</div>
		</div>
	);
};
