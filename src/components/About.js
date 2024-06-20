
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import profileImg from '../assets/img/computer.png'; 

export const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animated_zoomin animate__fadeIn about-content" : "about-content"}>
                  <h2>About Me</h2>
                  <h2>Let me introduce myself</h2>
                  <p>
                  I'm a software engineer passionate about creating impactful 
                  digital experiences. My specialty lies in frontend development, 
                  but I also have solid experience in backend development. 
                  Additionally, I have ventured into interface design and have a 
                  broad knowledge base that includes networks, databases, 
                  and the creation of mobile and web applications.</p>
                  <p>
                  In my free time, I explore emerging fields as personal projects
                   that challenge my skills and knowledge. I also enjoy playing soccer,
                    which keeps me active and alert.
                  </p>
                  <p>
                    I consider every day an opportunity to learn something new 
                    and explore technological advances. I am excited to continue 
                    growing on this exciting technological journey and provide creative 
                    solutions to future challenges!
                  </p>
                </div>}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated  animate__zoomIn" : ""} 
                src={profileImg} alt="Profile"/>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
