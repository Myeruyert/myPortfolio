import Header from "@/pages/components/headers";
import Intro from "@/pages/components/intro";
// import Titles from "./components/titles";
import Work from "./components/work";
import Footer from "./components/footer";
import AboutMe from "./components/aboutMe";
import { LuCopyright } from "react-icons/lu";
// import Experiences from "./components/sections/experience";
// import ExperienceCard from "./components/sections/experience";
import Skills from "./components/skills";
import ExperienceCard from "./components/experience";
import Titles from "./components/titles";


const experiences = [
  {
    jobTitle: "Sr. Frontend Developer", 
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvwNx5khMD2MHS8BqKjYaSSlj-_arAcPHlGg&s", 
    jobRoles: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Ut pretium arcu et massa semper, id fringilla leo semper.", "Sed quis justo ac magna.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
  },
  {
    jobTitle: "Team Lead", 
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvwNx5khMD2MHS8BqKjYaSSlj-_arAcPHlGg&s", 
    jobRoles: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Ut pretium arcu et massa semper, id fringilla leo semper.", "Sed quis justo ac magna.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
  },
  {
      jobTitle: "FullStack Developer", 
      companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvwNx5khMD2MHS8BqKjYaSSlj-_arAcPHlGg&s", 
      jobRoles: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Ut pretium arcu et massa semper, id fringilla leo semper.", "Sed quis justo ac magna.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
    },
];

const Home = () => {
  return (
    <>
      <Header/>
      <Intro/>
      <AboutMe/>
      <Skills/>
      <div className="experience py-24">
      <Titles title="Experiences"/>
      <p className="mt-4 mb-12">Here is a quick summary of my most recent experiences:</p>
      <div className="px-48">
      {experiences.map((experience)=>(
          <ExperienceCard
          jobTitle = {experience.jobTitle}
          companyLogo={experience.companyLogo} 
          jobRoles={experience.jobRoles}
          />
          ))}
      </div>
      </div>
      <Work/>
      <Footer />
      <div className="copyright flex items-center gap-2 py-6">
      <LuCopyright />
      <span>
      2024 | Greetings with ❤️️ from Ulaanbaatar
      </span>
      </div>
    </>
  );
};

export default Home;
