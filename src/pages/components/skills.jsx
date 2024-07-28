import Titles from "./titles";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiCypress } from "react-icons/si";
import { SiStorybook } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import Logos from "./logos";

const Skills = () => {
  return (
    <>
    <div className="my-24 skills">
    <Titles title="Skills" />
      <p className="mt-4 mb-12">The skills, tools and technologies I am really good at:</p>
      <div className="icons text-6xl flex flex-wrap gap-16 justify-between">
        <Logos logos={<SiJavascript className="jslogo" />} texts="JavaScript"/>
        <Logos logos={<SiTypescript className="tslogo"/>} texts="TypeScript"/>
        <Logos logos={<FaReact className="reactlogo" />} texts="React"/>
        <Logos logos={<SiNextdotjs className="nextlogo"/>} texts="Next.js"/>
        <Logos logos={<SiNodedotjs className="nodelogo"/>} texts="Node.js"/>
        <Logos logos={<SiExpress className="expresslogo"/>} texts="Express.js"/>
        <Logos logos={<SiNestjs className="nestlogo"/>} texts="Nest.js"/>
        <Logos logos={<SiSocketdotio className="socketlogo"/>} texts="Socket.io"/>
        <Logos logos={<BiLogoPostgresql className="postgre"/>} texts="PostgreSQL"/>
        <Logos logos={<SiMongodb className="mongologo"/>} texts="MongoDB"/>
        <Logos logos={<FaSass className="sasslogo"/>} texts="Sass/Scss"/>
        <Logos logos={<SiTailwindcss className="tailwindlogo"/>} texts="Tailwindcss"/>
        <Logos logos={<SiFigma className="figmalogo"/>} texts="Figma"/>
        <Logos logos={<SiCypress className="cypresslogo"/>} texts="Cypress"/>
        <Logos logos={<SiStorybook className="storybooklogo"/>} texts="Storybook"/>
        <Logos logos={<FaGitAlt className="gitlogo"/>} texts="Git"/>
      </div>
    </div>

    </>
  );
};

export default Skills;
