import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TextLoop from "../components/TextLoop";
import About from "../components/About";
import Skill from "../components/Skill";
import Project from "../components/Project";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TextLoop />
      <About />
      <Skill />
      <Project />
    </>
  );
}

export default Home;
