import "./Contact.css";
import maiImg2 from "./../assets/contact.png";

function Contact() {
  return (
    <>
      <section className="contact" id="contact">
        <div className="contact-content">
          <h1>Contact me</h1>
          <p className="claim">I Want To Hear From You</p>
          <p className="email">
            <a href="mailto:mai.uchida.kishaba@gmail.com">
              mai.uchida.kishaba@gmail.com
            </a>
          </p>
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
