import "./Project.css";
import CardOne from "./CardOne";
import Button from "./Button";
import mesImg from "../assets/mes.jpeg";
import heianImg from "../assets/heian.jpeg";
import jsImg from "../assets/js.jpg";

function Project() {
  return (
    <>
      <section className="project">
        <h1>My work</h1>
        <div className="project-content">
          <div className="contente-wrapper">
            <CardOne
              className="mes"
              subTitle=".mes English Learning Platform"
              text="I have crafted an English learning platform that is tailored for young learners, drawing inspiration from my primary business of teaching English online. Throughout the development of this project, I adeptly utilized my proficiency in HTML, CSS, and JavaScript to create engaging interfaces that strongly emphasize my dedication to providing exceptional user experiences. Currently, I am in the process of rebuilding this platform using React, further showcasing my commitment to enhancing its capabilities."
            />
            <Button
              classNameBtn="btn"
              href="https://maimaiokinawa-mes.netlify.app/speak"
              label="Visit it"
            />
          </div>
          <img src={mesImg} alt="website" />
        </div>

        <div className="project-content  reverse">
          <div className="content-wrapper">
            <CardOne
              className="heian"
              subTitle="Heian Marin Co. Website"
              text="I embarked on the journey of constructing a company website from scratch, harnessing an array of technologies including HTML, CSS, SCSS/SASS, JavaScript, and PHP. A pivotal aspect of this endeavor was the adept organization of the codebase on GitHub, coupled with the strategic use of development tools like Gulp."
            />
            <Button
              classNameBtn="btn"
              href="https://www.heianmc.com/"
              label="Visit it"
            />
          </div>
          <img src={heianImg} alt="web" />
        </div>

        <div className="project-content">
          <div className="content-wrapper">
            <CardOne
              className="js"
              subTitle="JavaScrip Apps"
              text="These projects stem from my experiences with JavaScript learning exercises, which have inspired me to embark on the creation of educational applications such as quizzes and tests."
            />
            <Button
              classNameBtn="btn"
              href="https://github.com/MaiMaiOkinawa"
              label="Visit it"
            />
          </div>
          <img src={jsImg} alt="javascript app" />
        </div>
      </section>
    </>
  );
}

export default Project;
