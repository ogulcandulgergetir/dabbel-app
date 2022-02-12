import React from "react";
import "./GridElement.css";
import { Col } from 'react-bootstrap';
import GridElementTitle from '../GridElementTitle/GridElementTitle'
import GridElementBody from '../GridElementBody/GridElementBody'



function GridElement({ text, md, sm, lg, xs, title, updatedDate ,textCenter  }) {
  return (
    <Col lg={lg} md={md} xs={xs} sm={sm} className="grid-element" >
     <div className={`grid-content h-100 ${textCenter}`}>
      <GridElementTitle title={title} updatedDate={updatedDate}/>
      <GridElementBody text={text}/>
     </div>
    </Col>
  );
}

export default GridElement;