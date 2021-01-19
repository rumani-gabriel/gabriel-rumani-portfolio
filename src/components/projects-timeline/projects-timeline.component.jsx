import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import portero from "../../assets/img/projects/portero.png";
import uma from "../../assets/img/projects/uma.png";
import landing from "../../assets/img/projects/landing.png";
import formulario from "../../assets/img/projects/formulario.png";
import crud from "../../assets/img/projects/crud.png";
import amazon from "../../assets/img/projects/amazon.png";
import sh from "../../assets/img/projects/sh.png";
import j1 from "../../assets/img/projects/j1.gif";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_ROUTER from "../../assets/img/skills/react-router.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_PYTHON from "../../assets/img/skills/python.svg"; 


import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROYECTOS</h1>
      <Timeline>
        <Events>
        <ImageEvent
            date="10/01/2021"
            className="text-center"
            text="Jarvis IA (Python)"
            src={j1}
            alt="Jarvis"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      Detalles
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Descripción:</strong> Asistente virtual, inspirada en la mítica IA de Iron Man (mi héroe de la infancia y actual). Es un modelo funcional de consola, sin interfaz gráfica aún.
                        <hr />
                        <strong>Funciones:</strong>
                        <ul className="list-styles pt-1">
                          <li>Reconocimiento de voz</li>
                          <li>Respuesta por audio</li>
                          <li>Acceso a diversas aplicaciones</li>
                                                  
                        </ul>
                        <hr />
                        <strong>Tecnologías:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PYTHON}
                                alt="PYTHON"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Python
                            </span>
                          </li>
                                                    
                        </ul>
                        <hr />
                        
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton
                  href="https://rumani-gabriel.github.io/sh5/"
                  target="_blank"
                >
                  Míralo en video
                </UrlButton>
                <UrlButton
                  href="https://github.com/rumani-gabriel/jarvis-python-ia"
                  target="_blank"
                >
                  Código
                </UrlButton>
              </div>
            </div>
        </ImageEvent>
        <ImageEvent
            date="20/12/2020"
            className="text-center"
            text="Second Hand (red social)"
            src={sh}
            alt="second hand"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      Detalles
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Descripción:</strong> La aplocación con la que me gradué, llevó unas 100 hs.. Es una red social para subir fotos y compartir comentarios. La estructura es parecida a Instagram. Está conectado a la base de datos Firebase.
                        <hr />
                        <strong>Funciones:</strong>
                        <ul className="list-styles pt-1">
                          <li>Login</li>
                          <li>Comentar</li>
                          <li>Publicar</li>
                          <li>
                            Buscar artículo en el buscador
                          </li>
                          
                        </ul>
                        <hr />
                        <strong>Tecnologías:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="REACT"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React JS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REDUX}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Redux
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MATERIALUI}
                                alt="MATERIAL UI"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Material UI
                            </span>
                          </li>
                          
                        </ul>
                        <hr />
                        
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton
                  href="https://rumani-gabriel.github.io/sh5/"
                  target="_blank"
                >
                  Visítalo
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          <ImageEvent
            date="20/10/2020"
            className="text-center"
            text="Copia de Amazon (Second Hand)"
            src={amazon}
            alt="Amazon"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      Detalles
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Descrición:</strong> Aplicación desarrollada en 20 hs.. Tiene imágenes aleatorias. Funciona con React JS. Tiene una estructura muy parecida a Amazon.
                        <hr />
                        <strong>Funciones:</strong>
                        <ul className="list-styles pt-1">
                          <li>Renderizar todo el contenido de manera reactiva.</li>
                          <li>El login está presente pero no es funcional.</li>
                          <li>El carrito de compras es funcional.</li>
                          
                        </ul>
                        <hr />
                        <strong>Tecnologías:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React JS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_ROUTER}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React Router
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/rumani-gabriel/amazon-copy/tree/master"
                  target="_blank"
                >
                  Código
                </UrlButton>
                <UrlButton
                  href="https://rumani-gabriel.github.io/amazon-copy/"
                  target="_blank"
                >
                  Visítalo
                </UrlButton>
              </div>
            </div>
          </ImageEvent>         
        
          <ImageEvent
            date="15/08/2020"
            className="text-center"
            text="Portero java Script"
            src={portero}
            alt="portero"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      Detalles
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Descripción:</strong> Éste es un portero eléctrico con toda la lógica expresada en Java Script, CSS y HTML. Todo puro.
                        <hr />
                        <strong>Funciones:</strong>
                        <ul className="list-styles pt-1">
                          <li>Reconocer los pisos y departamentos del edificio.</li>
                          <li>Reconocer si se hace una llamda incorrecta.</li>
                          <li>Informar todo el tiempo desde el visor.</li>
                        </ul>
                        <hr />
                        {/*----------------------------------------*/}
                        <strong>Tecnologías:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="javastcript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Java Script
                            </span>
                          </li>                                                     
                          {/*--------------------------- */}
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://porterogabrielrumani.netlify.app/"
                  target="_blank"
                >
                  Míralo funcionar 
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>


          <ImageEvent
              date="30/08/2020"
              className="text-center"
              text="Página web de UMA Studios"
              src={uma}
              alt="uma"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      Detalles
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Descripción:</strong> Primera página web para UMA Studios (home studio). Está desarrollada en HTML5, CSS3 y Java Script puro. Todos los efectos y demás están confeccionados a mano, sin librerías, todo a pulmón. Tiempo de desarrollo estimado para ser el primer proyecto freelance, 50 hs..
                        <hr />
                        <strong>Funciones:</strong>
                        <ul className="list-styles pt-1">
                          <li>OSP del estudio de grabación.</li>
                          <li>Info y contacto directo, vía formulario, con el Home Studio.</li>
                          <li>Ubicación y redes sociales.</li>
                        </ul>
                        <hr />
                        <strong>Tecnologías:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="javastcript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Java Script
                            </span>
                          </li>                                                     
                          {/*--------------------------- */}
                        </ul>
                        
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton
                  href="https://estudiodegrabaciongabrielrumani.netlify.app/"
                  target="_blank"
                >
                  Míralo funcionar 
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          
          <ImageEvent
            date="10/09/2020"
            className="text-center"
            text="Landing Page"
            src={landing}
            alt="landing"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      Detalles
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Descripción:</strong> Landing Page responsive desarrollada en 2 días.
                        <hr />
                        <strong>Funciones:</strong>
                        <ul className="list-styles pt-1">
                          <li>La página va cambiando de forma a medida que cambia de tamño.</li>
                          <li>Interfaz amigable para el visitante.</li>
                        </ul>
                        <hr />
                        <strong>Tecnologías:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="javastcript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Java Script
                            </span>
                          </li>                                                     
                          {/*--------------------------- */}
                        </ul>
                                                
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://adopciondemascotasgabrielrumani.netlify.app/"
                  target="_blank"
                >
                  Visítala
                </UrlButton>
               
              </div>
            </div>
          </ImageEvent>

          
          <ImageEvent
            date="20/09/2020"
            className="text-center"
            text="Formulario ComIT"
            src={formulario}
            alt="Smart Brain Face Detect"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      Detalles
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Descripción:</strong> Formulario desarrollado para la organización ComIT. Tiempo de desarrollo 4 hs..
                        <hr />
                        <strong>Funciones:</strong>
                        <ul className="list-styles pt-1">
                          <li>Formulario totalmente funcional.</li>
                          <li>Elección de días, horarios y cursos.</li>
                          <li>EL formulario envía datos con Formspree.</li>
                        </ul>
                        <hr />
                        <strong>Tecnologías:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="javastcript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Java Script
                            </span>
                          </li>                                                     
                          {/*--------------------------- */}
                        </ul>
                        <hr />
                        
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://formulariocomitgabrielrumani.netlify.app/"
                  target="_blank"
                >
                  Visítalo
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>

        

          <ImageEvent
            date="10/10/2020"
            className="text-center"
            text="Simple Crud"
            src={crud}
            alt="simple crud"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      Detalles
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Descripción:</strong> Una lista con botones, todo en React JS y React Router. Organizar a manera de "To do List" cualquier contenido.
                        <hr />
                        <strong>Funciones:</strong>
                        <ul className="list-styles pt-1">
                          <li>Sumar items a la lista.</li>
                          <li>Eliminar items de la lista.</li>
                          <li>Navegar entre sus diferentes páginas. </li>
                        </ul>
                        <hr />
                        <strong>Tecnologías:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Ract JS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_ROUTER}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React Router
                            </span>
                          </li>
                         
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://rumani-gabriel.github.io/simple-crud/"
                  target="_blank"
                >
                  Visítalo
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>          
          
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
