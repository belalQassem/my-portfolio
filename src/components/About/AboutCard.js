import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Belal Qassem </span>
            from <span className="purple"> Palestine, gaza.</span>
            <br /><br />As a full stack developer, I specialize in designing and developing high-performance, responsive web applications using the latest frameworks and technologies. My skills include React, Next, Redux, Laravel php, and MySQL, among others. I have extensive experience building clean, readable code that is easy to maintain and modify. Additionally, I have a strong background in API development using Laravel, which allows me to create powerful, scalable solutions for a wide range of applications. I am passionate about creating user-friendly, elegant web apps that deliver superior performance and user experience. If you are looking for a talented full stack developer, feel free to connect with me to discuss potential collaborations or to learn more about my experience.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Belal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
