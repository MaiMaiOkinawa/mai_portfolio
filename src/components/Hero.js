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
          <Button classNameBtn="btnAbout" href="/#about" label="About me" />
        </div>
        <div class="image">
          <img
            src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            className="image"
            alt=""
          />
        </div>
      </section>
    </>
  );
}

export default Hero;
