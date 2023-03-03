import EmailIcon from "../images/Email Icon.png";
import LinkedinIcon from "../images/Linkedin Icon.png";

function Details() {
  return (
    <div className="details">
      <h1 className="name">Laura Smith</h1>
      <h3 className="designation">Frontend Developer</h3>
      <p className="website">laurasmith.website</p>

      <div className="contact-buttons">
        <div className="email-button">
          <img src={EmailIcon} alt="email icon" />
          Email
        </div>
        <div className="linkedin-button">
          <img src={LinkedinIcon} alt="linkedin icon" />
          LinkedIn
        </div>
      </div>

      <div>
        <h2 className="about-title">About</h2>
        <p className="about-text">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
      </div>

      <div>
        <h2 className="interests-title">Interests</h2>
        <p className="interests-text">
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </div>
  );
}

export default Details;
