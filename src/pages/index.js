import Header from "@/pages/components/header";
import Intro from "@/pages/components/intro";
import Titles from "./components/titles";
import Work from "./components/work";
import Footer from "./components/footer";
import AboutMe from "./components/aboutMe";
import Skills from "./components/skills";

const Home = () => {
  return (
    <>
      <Header />
      <Intro />
      <AboutMe />
      <Skills />
      <Work />
      <Footer />
    </>
  );
};

export default Home;
