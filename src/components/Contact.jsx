import { Button, link } from "@nextui-org/react";
import { IoIosMail } from "react-icons/io";
import { FaGithub as Github } from "react-icons/fa";
import { FaLinkedin as Linkedin } from "react-icons/fa";

const Contact = () => {
	const socials = [
		{
			name: "Github",
			icon: Github,
			link: "https://github.com/thaibapratik",
		},
		{
			name: "Linkedin",
			icon: Linkedin,
			link: "https://www.linkedin.com/in/pratik-thaiba-6a0a21309/",
		},
	];

	return (
		<section className="pb-32">
			<h2 className="heading">Contact</h2>
			<div className="flex justify-center gap-52 max-sm:flex-col max-sm:gap-0 max-sm:text-center">
				<h1 className="text-6xl max-sm:text-4xl text-white mt-32 ml-20 leading-[1.5] max-sm:ml-5">
					Let's start a <br />
					project together
				</h1>
				<div>
					<div>
						<h3 className="text-xl text-white tracking-wider pt-32 max-sm:pt-20">
							Email
						</h3>
						<ul>
							<li className="text-md text-white/60">
								pratikthaiba890.com
							</li>
						</ul>
						<div className="mt-3">
							<a href="mailto:pratikthaiba890@gmail.com">
								<Button size="lg" className="hover:scale-105">
									Send mail <IoIosMail size={20} />
								</Button>
							</a>
						</div>
					</div>
					<div>
						<h3 className="text-xl text-white tracking-wider mt-10">
							Socials
						</h3>
						<div className="flex flex-col gap-1 mt-1 max-sm:items-center">
							{socials.map((social) => (
								<a
									href={social.link}
									target="_blank"
									key={social.link}
								>
									<div className="flex flex-row items-center gap-1 group w-fit hover:translate-x-2 duration-300">
										<social.icon
											size={20}
											className="text-white/60 group-hover:text-white transition-colors duration-75"
										/>
										<span className="text-white/60 group-hover:text-white transition-colors duration-300">
											{social.name}
										</span>
									</div>
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Contact;
