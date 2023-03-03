import TwitterIcon from "../images/Twitter Icon.png";
import FacebookIcon from "../images/Facebook Icon.png";
import InstagramIcon from "../images/Instagram Icon.png";
import GitHubIcon from "../images/GitHub Icon.png";

function Footer() {
  return (
    <div className="footer">
      <img src={TwitterIcon} alt="twitter icon" />
      <img src={FacebookIcon} alt="Facebook icon" />
      <img src={InstagramIcon} alt="Instagram icon" />
      <img src={GitHubIcon} alt="GitHub icon" />
    </div>
  );
}

export default Footer;
