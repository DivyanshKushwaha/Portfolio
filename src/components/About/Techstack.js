import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiNumpy } from "react-icons/si";
import { SiPowerbi } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { SiApachespark } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { FaAws } from "react-icons/fa";

import { SiMysql } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiMlflow } from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachespark />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMlflow />
      </Col>
     
    </Row>
  );
}

export default Techstack;
