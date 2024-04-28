import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import charts from "../../Assets/Projects/todo.jpeg";
import synonymous from "../../Assets/Projects/news.jpeg";
import minigame from "../../Assets/Projects/minigame.png";
import kings from "../../Assets/Projects/kings.png";
import web3 from "../../Assets/next-movie-apps.avif";
import npmtiger from "../../Assets/Projects/socailmedia.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Some <strong className="purple">Works </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={web3}
              isBlog={false}
              title="Movies App"
              description="In the domain of Android Application development, I wield a versatile toolkit comprising Kotlin, XML, Retrofit, and Android Studio. Implementing Retrofit, I've efficiently fetched movie data from external APIs, ensuring swift and seamless access to information. With a keen eye for design, I've crafted intuitive user interfaces that prioritize smooth navigation and elevate the overall user experience. Furthermore, my expertise in asynchronous programming has empowered me to manage network requests effectively, ensuring optimal performance and responsiveness within applications."
              ghLink="https://github.com/Shani-kumar/Movies-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={npmtiger}
              isBlog={false}
              title="Social Media App"
              description="In the realm of Android application development, my expertise shines through a robust skill set encompassing Kotlin, XML, Firebase, and Android Studio. With a focus on security, I've seamlessly implemented secure user authentication using Kotlin and Firebase, ensuring user data remains protected at all times. Leveraging Kotlin and XML, I've enabled image upload and sharing functionalities, enriching the platform with visually engaging content. Through hands-on experience, I've honed my abilities in secure authentication and cloud integration, empowering applications with reliable and scalable backend solutions."
              ghLink="https://github.com/Shani-kumar/social_media_app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={charts}
              isBlog={false}
              title="To-Do-App"
              description="In the dynamic landscape of Android application development, my proficiency shines through a fusion of Kotlin, XML, Firebase, and Android Studio. Crafting intuitive solutions, I've empowered users to note and organize important tasks seamlessly within the application. Leveraging Firebase, I've seamlessly integrated Sign In and Sign Up functionalities, ensuring effortless access across multiple devices. Moreover, I've honed my skills in user authentication and data storage, ensuring secure and efficient cross-device accessibility for users' convenience and peace of mind."
              ghLink="https://github.com/Shani-kumar/To_do_App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={synonymous}
              isBlog={false}
              title="News App"
              description="
              Within the Android Application domain, I've harnessed the power of Kotlin, XML, Volley API, Firebase, and Android Studio to craft seamless user experiences. Utilizing Rest API concepts, I've dynamically fetched random news, keeping users informed and engaged. The integration of Volley API has optimized network requests, ensuring swift data retrieval and smooth app performance. Additionally, I've leveraged Firebase to add supplementary functionalities, enhancing the app's capabilities. Through this process, I've elevated my proficiency in seamlessly integrating third-party APIs and Firebase into Android applications, enabling robust and feature-rich user experiences."
              ghLink="https://github.com/Shani-kumar"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kings}
              isBlog={false}
              title="OpenSource Collaboration"
              description="The Kings League Infojobs API was a popular GLOBAL TRENDING repository OpenSource on GitHub that provided access to data about teams, players, and coaches in the league through an API. The web page also offered information about the results, and rankings... I have the opportunity to be contributor to the project by writing tests, creating documentation, and working on the front-end side."
              ghLink="https://github.com/midudev/kings-league-project"
              demoLink="https://kingsleague.dev/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={minigame}
              isBlog={false}
              title="JavaScript MiniGame"
              description="This was my first project of 2021 for my TechSchool and I'm thrilled to include it in my portfolio. It's a testament to my skills as a JavaScript developer and a great reminder of the good old days when all you needed was a browser and some code to have a good time. So go ahead, give it a try and see if you have what it takes to win"
              ghLink="https://github.com/Fasping/ProjectOneIronHack"
              demoLink="https://project-one-iron-hack.vercel.app//"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
