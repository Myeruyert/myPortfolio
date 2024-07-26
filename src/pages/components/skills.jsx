import Titles from "./titles";
import { IoLogoJavascript } from "react-icons/io5";

const Skills = () => {
  return (
    <>
      <Titles title="Skills" />
      <p>The skills, tools and technologies I am really good at:</p>
      <div className="icons">
        <IoLogoJavascript className="jslogo" />
        <img src="@/react_project/src/pages/images/js.png" alt="" />
      </div>
    </>
  );
};

export default Skills;
