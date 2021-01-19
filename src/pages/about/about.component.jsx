import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
//acá va mi foto
import GAB from "../../assets/img/profile/GAB.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">Sobre mí</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={GAB} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Mucho gusto! yo soy <strong>&nbsp;Gabriel Rumani </strong>
                <br />Un apasionado por la programación, que a sus 29 años descubrió su verdadera vocación, después de buscar e intentar muchos caminos.
                <br/> Soy un FullStack developer con conocimientos en las tecnologías React JS, Redux, Router, Python, Postgre SQL; además de claramente HTML5, CSS y Java Script.
                <br />
                En el 2020 completé la cursada de la organización ComIT, titulado como FullStack en react JS. Además de completar el curso FullStack con Python, de el programa codo a codo del Gobierno de la Ciudad de Buenos Aires.
                <br />
                Desarrollé mi aplicación en REACT js con la base de datos Firebase. Es una red social.
                La presentación de éste trabajo me graduó del curso FullStack.
                <br />
                Tengo la ambición de formar parte activa en el mundo IT porque me apasiona, me identifica y se volvió mi propósito y dirección.
                <br />Por tal motivo continuo aprendiendo cada día, de varias maneras, pero mi favorita es seguir desarrollando, codificando, creando, mejorando, optimizando programas, sitios web y apps.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Contáctame
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1iiRz75h57gD1WdWYBvjHpN_Msd8gLLZD/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        Mi CV
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/rumani-gabriel" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/gabriel-rumani-react-python-fullstack-developer/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
