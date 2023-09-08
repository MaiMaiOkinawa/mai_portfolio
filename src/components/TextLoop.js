import "./TextLoop.css";
import StarImg from "../assets/star.svg";

function TextLoop() {
  return (
    <>
      <div class="scroll">
        <div className="loop-texts">
          <p>Frontend</p>
          <img src={StarImg} alt="star" />
          <p>Programmer</p>
          <img src={StarImg} alt="star" />
          <p>HTML</p>
          <img src={StarImg} alt="star" />
          <p>CSS</p>
          <img src={StarImg} alt="star" />
          <p>JavaScript</p>
          <img src={StarImg} alt="star" />
          <p>React</p>
          <img src={StarImg} alt="star" />
          <p>Communicative</p>
          <img src={StarImg} alt="star" />
          <p>Attention to details</p>
          <img src={StarImg} alt="star" />
          <p>Diversity</p>
          <img src={StarImg} alt="star" />
          <p>Curiosity</p>
          <img src={StarImg} alt="star" />
        </div>
      </div>
    </>
  );
}

export default TextLoop;
