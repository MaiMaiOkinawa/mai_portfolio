import CardOne from "./CardOne";
import Icon from "./Icon";
import "./Skill.css";
import htmlImg from "../assets/html.svg";
import cssImg from "../assets/css.svg";
import sassImg from "../assets/sass.svg";
import jsImg from "../assets/js.svg";
import reactImg from "../assets/react.svg";
import nodeImg from "../assets/node.svg";
import phpImg from "../assets/php.svg";
import sqlImg from "../assets/mysql.svg";

function Skill() {
  return (
    <section className="skill" id="skill">
      <CardOne
        className="skill-content"
        title="What I do"
        subTitle="My skills"
        text="I'm skilled in many programming languages, crafting user-friendly web interfaces. Proficient in React and responsive design, I create engaging and dynamic experiences. I collaborate effectively with cross-functional teams, translating designs into functional code. Adept at debugging and problem-solving, I ensure high-quality outcomes. Eager to learn and adaptable, I stay updated with industry trends. My attention to detail and creativity result in visually appealing websites. I embrace feedback and seek growth opportunities to enhance my skills. With a passion for frontend development, 
I contribute to seamless user interactions."
      />

      <div class="icon-container">
        <Icon className="icon" src={htmlImg} alt="html icon" />
        <Icon className="icon" src={cssImg} alt="css icon" />
        <Icon className="icon" src={sassImg} alt="sass icon" />
        <Icon className="icon" src={jsImg} alt="js icon" />
        <Icon className="icon" src={reactImg} alt="react icon" />
        <Icon className="icon" src={nodeImg} alt="node icon" />
        <Icon className="icon" src={phpImg} alt="php icon" />
        <Icon className="icon" src={sqlImg} alt="sql icon" />
      </div>
    </section>
  );
}

export default Skill;
