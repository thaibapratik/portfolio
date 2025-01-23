import Typewriter from "typewriter-effect";
import profile from "../assets/profile.jpg";
import LanguageSection from "./LanguageSection";
import { FaMapPin } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import { MdOutlineCloudDownload } from "react-icons/md";
import resume from "../assets/Resume.pdf";
import { FaGithub as Github } from "react-icons/fa";
import linkedin from "../assets/linkedin.png";

const Introduction = () => {
	return (
		<section className="flex items-center gap-40 h-full max-sm:flex-col-reverse max-sm:gap-5 max-sm:justify-center">
			<div className="mb-14 z-10">
				<h1 className="font-bold lg:text-4xl text-2xl">
					Hello, my name is <br />
					<span className="lg:text-5xl text-3xl">Pratik Thaiba</span>
				</h1>
				<div className="flex gap-1 py-5 items-center">
					<FaMapPin size={18} />
					<span className="text-md">Nepal, Butwal</span>
				</div>
				<div className="flex gap-[7px] xl:text-lg font-medium items-center text:md">
					<span>I'm a</span>
					<Typewriter
						options={{
							strings: ["Mern-Stack Developer."],
							autoStart: true,
							delay: 120,
							loop: false,
							deleteSpeed: Infinity,
						}}
					/>
				</div>
				{/* social icons */}
				<div className="mt-3 flex gap-4">
					<a href="https://github.com/thaibapratik" target="_blank">
						<Github
							size={40}
							className="hover:-translate-y-2 text-black"
						/>
					</a>

					<a
						href="https://www.linkedin.com/in/pratik-thaiba-6a0a21309/"
						target="_blank"
					>
						<img
							src={linkedin}
							alt=""
							width={42}
							className="hover:-translate-y-2"
						/>
					</a>

					<a
						href={resume}
						target="_blank"
						rel="noopener noreferrer"
						className="ml-5"
					>
						<Button
							endContent={<MdOutlineCloudDownload size={18} />}
							color="default"
							variant="shadow"
							radius="full"
							className="hover:scale-105"
						>
							Resume
						</Button>
					</a>
				</div>
			</div>

			{/* profile image */}
			<div className="h-[300px] w-[200px] xl:h-[350px] xl:w-[250px] max-sm:h-[100px] max-sm:w-[100px]">
				<img
					src={profile}
					alt="profile"
					className="object-cover h-full w-full rounded-[50px] img-shadow max-sm:rounded-full"
				/>
			</div>
		</section>
	);
};
export default Introduction;
