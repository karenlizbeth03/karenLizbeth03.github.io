import { Container, Row, Col, Carousel } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import fisei from '../assets/img/fisei.jpg'; // Asegúrate de actualizar la ruta de la imagen
import CBA from '../assets/img/CBA.jpg';
import hatunsoft from '../assets/img/hatunsoft.jpg';

export const AboutExperience = () => {
  return (
    <section className="about_experience" id="about">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Experience</h2>
                  
                   </div>}
            </TrackVisibility>
          </Col>
        </Row>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <Carousel>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={CBA}
                        alt="First slide"
                        style={{ height: '500px', objectFit: 'cover' }}
                      />
                      <Carousel.Caption>
                        <div className="carousel-text">
                          <h3>2023 - 2024</h3>
                          <p>Intern Auditor</p>
                          <p>IT Audits in the Department of Technologies and User Support, focusing on the integrity of technological systems in an emergency environment.</p>
                          <p>Ambato Fire Department</p>

                        </div>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={fisei}
                        alt="Second slide"
                        style={{ height: '500px', objectFit: 'cover' }}
                      />
                      <Carousel.Caption>
                        <div className="carousel-text">
                          <h3>2024</h3>
                          <p>IT Intern</p>
                          <p>Laboratory maintenance, technical support for teachers and administrative staff, software development, and laboratory management.</p>
                          <p>Technical University of Ambato</p>
                          </div>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={hatunsoft}
                        alt="Third slide"
                        style={{ height: '500px', objectFit: 'cover' }}
                      />
                      <Carousel.Caption>
                        <div className="carousel-text">
                          <h3>2023</h3>
                          <p>Organizing Member</p>
                          <p>Active participation as a member of the organizing group of the HatunSoft contest at the Technical University of Ambato in the Faculty of Systems Engineering, Electronics, and Industrial Engineering.</p>
                          </div>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutExperience;
