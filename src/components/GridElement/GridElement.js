import React from "react";
import "./GridElement.css";
import { Container, Row, Col } from 'react-bootstrap';


function GridElement({ text, md, sm, lg, xs }) {
  return (
    <Col lg={lg} md={md} xs={xs} sm={sm} lg={lg} className="grid-element" >
     <div className="grid-content h-100">
      {text}sss{md}
     </div>
    </Col>
  );
}

export default GridElement;