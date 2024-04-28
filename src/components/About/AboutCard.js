import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Welcome to my corner of the web! I'm Shani Kumar, a passionate and versatile developer originally from the bustling city of Meerut, Uttar Pradesh.
            <br />
            <br />
            My journey into the world of technology began with a strong educational foundation. I completed my High School education at Sanskar Academy, where I cultivated a love for learning and exploration. Building upon this, I pursued my Intermediate education at Spring Dales Public School, where I honed my skills and set the stage for my future endeavors.
          </p>
          
          <p style={{ textAlign: "justify" }}>
          Driven by a deep-seated passion for technology, I embarked on a journey of self-discovery and growth. From scaling mountains of code to navigating the intricacies of software development, each step has been fueled by a relentless pursuit of excellence and innovation.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
