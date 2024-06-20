import { Container, Row, Col } from "react-bootstrap";
import projImg1 from "../assets/img/Taxi.png";       // Imagen para Taxi Manager
import projImg2 from "../assets/img/LogKarvin.jpg";  // Imagen para Karvin Curtiduria
import projImg3 from "../assets/img/Certech.png";    // Imagen para Certech
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Taxi Manager",
      description: "Design of a distributed architecture for a taxi ride management application, with components distributed across multiple servers to improve performance and scalability",
      imgUrl: projImg1,
      link: "https://example.com/taxi-manager"
    },
    {
      title: "Karvin Curtiduria",
      description: "Karvin Curtiduria offers high quality tanned leather, efficiently managing production, inventory and orders through our web platform.",
      imgUrl: projImg2,
      link: "https://dev-karvin-curtiduria.pantheonsite.io/"
    },
    {
      title: "Web application for Certificate Management (FrontEnd)",
      description: "Development of a FrontEnd Web Application for Certificate Management - This project consists of the creation of a web application for the generation and administration of certificates.",
      imgUrl: projImg3,
      link: "https://github.com/karenlizbeth03/Web-application-for-Certificate-Management-FrontEnd-"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Explore some of my projects! Browse through the creations I've developed and check out my latest work.</p>
                  <p>
                  I'm eager to share my projects with you!
                  </p>
                  <Row>
                    {projects.map((project, index) => (
                      <Col md={4} key={index} className="project-col">
                        <div className="proj-imgbx">
                          <img src={project.imgUrl} alt={project.title} />
                          <div className="proj-txtx">
                            <h4>{project.title}</h4>
                          </div>
                        </div>
                        <div className="project-description">
                          <div className="description-content">
                            <p><a href={project.link} target="_blank" rel="noopener noreferrer">View project</a></p>
                            <p>{project.description}</p>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
