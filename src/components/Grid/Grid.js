import React from "react";
import "./Grid.css";
import { Container, Row, Col } from 'react-bootstrap';
import GridElement from '../GridElement/GridElement'
import Toolbar from '../Toolbar/Toolbar'



function Grid({ toolbarButtonsRight, toolbarButtonsLeft, userDetails, cartItems, onDecrease, onIncrease, onRemove  }) {

  const gridElements = {
    gridElement1: {
      title: "Title",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    gridElement2: {
      title: "Title",
      updatedDate: "Updated N month(s) ago"
    },
    gridElementCenter: {
      title: "I am a text centered!",
    },
  }

  return (
    <Container fluid className="grid">
      <Row>
        <Toolbar  toolbarButtonsLeft={toolbarButtonsLeft}
                  toolbarButtonsRight={toolbarButtonsRight}
                  username={userDetails.username}
                  status={userDetails.status}
                  cartItems={cartItems}
                  onDecrease={onDecrease}
                  onIncrease={onIncrease}
                  onRemove={onRemove}
        />
      </Row>
      <Row>
        <GridElement sm="6" md="4" lg="4" title={gridElements.gridElement1.title} text={gridElements.gridElement1.text}/>
        <GridElement sm="6" md="8" lg="8" title={gridElements.gridElement2.title} text={gridElements.gridElement2.text} updatedDate={gridElements.gridElement2.updatedDate}/>
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
        <GridElement textCenter="d-flex align-items-center justify-content-center" title={gridElements.gridElementCenter.title} md="8"/>
      </Row>
      <Row>
        <GridElement sm="6" md="6"/>
        <GridElement sm="6" md="6"/>
      </Row>
    </Container>
  );
}

export default Grid;