import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anagha Badhe </span>
            from <span className="purple"> Malkapur, Maharshtra</span>
            <br />
            I am currently a student at Shri Sant Gajanan Maharaj College Of Engineering, Shegaon currently pursing Bachlors in Engineering in Computer Science And Engineering.
            <br />
          
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Anagha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
