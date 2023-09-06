import "./Hero.css";
import HeroImg from "../assets/hero.png";

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
          <a className="btn" href="#about">
            About me
          </a>
        </div>
        <div class="image">
          <img src={HeroImg} className="image" alt="" />
        </div>
      </section>
      <div className="test-bar"></div>
    </>
  );
}

export default Hero;
