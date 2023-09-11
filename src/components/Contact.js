import "./Contact.css";
import maiImg2 from "./../assets/contact.png";

function Contact() {
  return (
    <>
      <section className="contact">
        <div className="contact-content">
          <h1>Contact me</h1>
          <p className="claim">I Want To Hear From You</p>
          <p className="email">mai.uchida.kishaba@gmail.com</p>
        </div>
        <img src={maiImg2} alt="mai looking up" />
      </section>
      <div class="color-cards">
        <div className="card orange"></div>
        <div className="card coral"></div>
        <div className="card green"></div>
        <div className="card big"></div>
      </div>
    </>
  );
}

export default Contact;
