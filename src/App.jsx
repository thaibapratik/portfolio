import Introduction from "./components/Introduction";
import NavBar from "./components/NavBar";
import Experience from "./components/Experience";
import purpleBall from "./assets/purpleball.png";
import greyBall from "./assets/greyball.png";
import ProjectCard from "./components/ProjectCard";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
	return (
		<main className="dark bg-background w-full overflow-hidden">
			{/* home */}
			<div
				className="mesh flex justify-center items-center h-[100vh] "
				id="home"
			>
				<NavBar />

				<Introduction />
			</div>

			{/* experience */}
			<div
				className="bg-darkGrey1 flex justify-center items-center h-fill pb-32 border-b-1 border-white/40"
				id="experience"
			>
				<span className="z-10">
					<Experience />
				</span>
				<div>
					<img
						src={purpleBall}
						alt=""
						className="absolute opacity-50 blur-3xl h-[250px] right-0 top-[40rem]"
					/>
					<img
						src={greyBall}
						alt=""
						className="absolute opacity-50 blur-3xl h-[250px] left-0 mt-[180px] "
					/>
				</div>
			</div>

			{/* Projects */}
			<div
				className="bg-darkGrey1 h-fill flex justify-center pb-52 relative border-b-1 border-white/40"
				id="project"
			>
				<Projects />
				<img
					src={greyBall}
					alt=""
					className="absolute top-0 right-0 opacity-40 h-[250px] blur-3xl"
				/>
				<img
					src={purpleBall}
					alt=""
					className="absolute opacity-20 blur-3xl -left-20 h-[250px] -bottom-20"
				/>
			</div>

			{/* Contact */}
			<div id="contact" className="h-fill w-full bg-darkGrey1">
				<Contact />
			</div>
		</main>
	);
};
export default App;
