import "./Hero.css";
import ContactImg from "../assets/contact.png";
import Button from "./Button"
// href="https://silver-noelani-80.tiiny.site"

function Hero(props) {
  return (
    <>
      <section className="hero" id="top">
        <div className="hero-text">
          <h2>Hello, I'm</h2>
          <p className="claim">Maï Uchida.</p>
          <h2>A Front End Developer from Okinawa.</h2>
          <p>
            I’m a programmer based in Spain, and I’m very passionate and
            dedicated to my work.
          </p>
          <Button
            classNameBtn="btnAbout"
            href="https://flowcv.com/resume/9637gs47l5"
            label="About me"
          />
        </div>
        <div class="image">
          <img src={ContactImg} className="image" alt="" />
        </div>
      </section>
    </>
  );
}

export default Hero;
