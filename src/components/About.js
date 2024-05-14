import "./About.css";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
import Button from "./Button";
import Icon from "./Icon";
import inImg from "../assets/linkedin.svg";
import gitImg from "../assets/github.svg";

function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="content-left">
          <CardOne
            title="Who I am"
            subTitle="I'm a Communicative Programmer"
            text="I'm a Language Data Specialist based in Spain, driven by a fervent passion for AI innovation. With extensive experience in linguistic analysis and technology integration, I bring a unique blend of skills to the table. My journey, engaging with over 100 nationalities and leading diverse teams, reflects my adaptability and leadership prowess. Currently exploring the realms of Data Engineering and Machine Learning, I seamlessly blend linguistic expertise with tech skills. Thriving in solo missions and collaborative environments, I consistently deliver user-centric designs, reflecting a commitment to excellence and continuous improvement."
          />
          <div className="btn-container">
            <Button
              classNameBtn="btnCv"
              href="https://flowcv.com/resume/9637gs47l5"
              label="Download my CV"
            />
            <a
              href="https://www.linkedin.com/in/mai-uchida-okinawa/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon className="iconIn" src={inImg} alt="linkedin icon" />
            </a>
            <a
              href="https://github.com/MaiMaiOkinawa"
              target="_blank"
              rel="noreferrer"
            
              <Icon className="iconGit" src={gitImg} alt="GuiHub icon" />
            </a>
          </div>
        </div>
        <div className="content-right">
          <CardTwo
            className="diversity"
            subTitle="Diversity"
            text="Traveling the world has broadened my perspective and given me a profound appreciation for the beauty of diversity. From my hometown of Okinawa to eight different countries, I’ve had the privilege of working alongside over 100 individuals from a wide range of cultures and backgrounds. Having visited 55 countries and counting, I’m always eager to hear about others’ experiences and share my own stories. Where would you recommend for my next adventure?"
          />
          <CardTwo
            className="curiosity"
            subTitle="Curiosity"
            text="Curiosity is at the core of who I am, and it extends to my love of meeting new people and learning about their unique perspectives. Whether it’s a fellow programmer or someone from a completely different background, I always find something to learn and appreciate. My endless excitement keeps me on my toes and makes me eager to explore new ideas and experiences, making me an open-minded member of any team."
          />
          <CardTwo
            className="pif"
            subTitle="Pay it forward"
            text="As someone who values growth and community, I believe in paying it forward through education. Teaching English to young learners has become my passion project, allowing me to not only educate others but to continue my own personal and professional development. Seeing my students reach their full potential brings me a sense of fulfillment and purpose, and I am eager to continue giving back to society in any way I can."
          />
        </div>
      </section>
    </>
  );
}

export default About;
