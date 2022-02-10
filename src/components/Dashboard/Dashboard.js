import React from "react";
import "./Dashboard.css";
import Toolbar from '../Toolbar/Toolbar'
import Grid from '../Grid/Grid'
import { Container, Row, Col } from 'react-bootstrap';



function Dashboard({ col, padding, toggleTodo }) {
  return (
    <Col md={col} className="dashboard">
      <Container fluid className="px-0 d-flex justify-content-center h-100">
        <Row className="w-100">          
          <Grid/>
        </Row>
      </Container>
    </Col>
  );
}

export default Dashboard;