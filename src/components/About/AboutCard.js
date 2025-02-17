import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Divyansh Kushwaha </span>
            from <span className="purple"> Unnao, Uttar Pradesh, India.</span>
            <br />
            I am currently pursuing Bachelor of Technology (B.Tech) with specialization in Electronics and communication engineering at MMMUT, Gorakhpur.
            <br />
            
            <br />
          </p>


          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Divyansh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
