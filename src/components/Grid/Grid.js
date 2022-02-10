import React from "react";
import "./Grid.css";
import { Container, Row, Col } from 'react-bootstrap';
import GridElement from '../GridElement/GridElement'
import Toolbar from '../Toolbar/Toolbar'



function Grid({ margin, index, toggleTodo }) {
  return (
    <Container fluid className="grid">
      <Row>
        <GridElement md="12"/>
      </Row>
      <Row>
        <GridElement sm="6" md="4" lg="4"/>
        <GridElement sm="6" md="8" lg="8"/>
      </Row>
      <Row>
        <Col className="col-12 col-md-4 p-0">
          <Container fluid style={{paddingLeft:"12px",paddingRight:"12px",}}>
            <Row>
              <GridElement xs="6" sm="3" md="6"/>
              <GridElement xs="6" sm="3" md="6"/>
              <GridElement xs="12" sm="6" md="12"/>
            </Row>
          </Container>
        </Col>
        <GridElement md={8} text="uzun"/>
      </Row>
      <Row>
        <GridElement sm="6" md="6"/>
        <GridElement sm="6" md="6"/>
      </Row>
    </Container>
  );
}

export default Grid;