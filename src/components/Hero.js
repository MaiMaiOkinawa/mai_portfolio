import "./Hero.css";
import HeroImg from "../assets/hero.png";
import Button from "./Button";

function Hero(props) {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h2>Hello, I'm</h2>
          <p className="claim">Maï Uchida.</p>
          <h2>A Front End Developer from Okinawa.</h2>
          <p>
            I’m a programmer based in Spain, and I’m very passionate and
            dedicated to my work.
          </p>
          <Button className="btnAbout" href="/#about" text="About me" />
        </div>
        <div class="image">
          <img src={HeroImg} className="image" alt="" />
        </div>
      </section>
    </>
  );
}

export default Hero;