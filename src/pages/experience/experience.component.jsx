import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCIA</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src="https://play-lh.googleusercontent.com/J9bCy6IC5WJm3J-3H1e9KqFTPYBGmNN3xLavk5Nl_59ySwQpuvQndyUFGEviNw0ygbB8" alt="comit" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Full Stack developer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Estudiante de React JS</strong>
                    <br />
                    <strong>Tecnologías:</strong> React JS, React Router,Material UI, Firebase, React context Api, HTML, CSS, Java Script, Bootstrap, React-Bootstrap, Redux.
                    <br />
                    <strong>Duración:</strong> 
                    <br/> Septiembre 2020 (Egresado)<br/>
                    <strong> Descripción: </strong>
                    <ul className="text-left">
                      <li><strong>Práctica de lenguajes:</strong> más de 60 horas de ejercicios prácticos en los fundamentos y primeros rudimentos de Java Script.</li>
                      <li><strong>Desarrollo de aplicación personal: </strong> Desarrollo desde cero de aplicación estilo red social en React JS y todas las tecnologías mencionadas. Trabajo desplegado en aprox. 100 horas de programación.
                      </li>
                      <li><strong>React JS: </strong>Ejercitación de las herramientas más importantes en el lenguaje. 
                      </li>
                      <li><strong>Scrum y Kanban</strong> Talleres de más de 20 hs. para conocer y llevar adelante metodologías ágiles.</li>
                    </ul>                  
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
