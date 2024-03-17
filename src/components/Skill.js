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
        text="Skilled in crafting user-friendly web interfaces using various programming languages like React for dynamic experiences. Effective collaboration with cross-functional teams to translate designs into functional code, adept at debugging and problem-solving. Eager to learn and adaptable, staying updated with industry trends. Attention to detail and creativity result in visually appealing websites. Proficient in Python, Numpy, Pandas, BeautifulSoup, Jupyter Notebook, Linux, and Bash Shell Scripting."
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
