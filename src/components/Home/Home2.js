import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/pic3.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <br />
            <br />
            <p className="home-about-body">
            I'm well-versed in a variety of programming languages, including C++, Java, Kotlin, and JavaScript. My expertise extends to database management with Firebase and MongoDB, ensuring seamless data integration and management in my projects.
              <br />
              <br />
              Equipped with tools like Android Studio and VSCode, I bring my projects to life with precision and efficiency.{" "}
              and more with ease. I approach my work with a relaxed and natural
              style, always striving for excellence.
              <br />
              <br />
              Throughout my journey, I've crafted an array of impactful projects, including a Social Media app, News app, Memes app, and Movies app, each designed to engage users and deliver valuable experiences.
              <br />
              <br />In addition to frontend prowess, I'm familiar with backend technologies like Node.js and Express, allowing me to build robust and scalable applications from end to end.
              <br />
              
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <br />
          <br />
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Shani-kumar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shani-rana"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
