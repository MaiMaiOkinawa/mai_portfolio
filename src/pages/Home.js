import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TextLoop from "../components/TextLoop";
import About from "../components/About";
import Skill from "../components/Skill";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TextLoop />
      <About />
      <Skill />
    </>
  );
}

export default Home;
