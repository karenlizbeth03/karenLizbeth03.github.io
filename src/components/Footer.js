import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import githubIcon from '../assets/img/github.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="text-center text-sm-start">
            <img src={logo} alt="Logo" className="logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/karen-moyolema-871013224/"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://www.facebook.com/karen.moyolema.71/"><img src={navIcon2} alt="Facebook" /></a>
              <a href="https://www.instagram.com/karen_lizbeth25/"><img src={navIcon3} alt="Instagram" /></a>
              <a href="https://github.com/karenlizbeth03"><img src={githubIcon} alt="GitHub" /></a>
              </div>
            <p>Copyright Karen Moyolema. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
