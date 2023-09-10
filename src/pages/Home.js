import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TextLoop from "../components/TextLoop";
import About from "../components/About";
import Skill from "../components/Skill";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TextLoop />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
