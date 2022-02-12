import React from "react";
import "./Dashboard.css";
import Toolbar from '../Toolbar/Toolbar'
import Grid from '../Grid/Grid'
import { Container, Row, Col } from 'react-bootstrap';



function Dashboard( {cartItems}) {

  const toolbarButtonsLeft = [
    {
      icon: "feather:calendar",
    },
    {
      icon: "feather:message-square",
    },
    {
      icon: "feather:mail",
    },    
    {
      icon: "feather:check-square",
    },    
    {
      icon: "feather:star",
    },
    {
      icon: "charm:menu-hamburger",
      hamburgerMenu: true
    },
  ]

  const toolbarButtonsRight = [
    {
      icon: "feather:search",
      rightSide: true,
    },
    {
      icon: "feather:shopping-cart",
      rightSide: true,
      notificationText: "",
      notificationBackgroundColor: "#7367f0",
      notificationTextColor: "white",
    },
    {
      icon: "feather:bell",
      rightSide: true,
    },
  ]

  const userDetails = {
      username: "Username",
      status: "admin",
  }

  return (
    <Col className="dashboard">
      <Container fluid className="px-0 d-flex justify-content-center h-100">
        <Row className="w-100">          
          <Grid toolbarButtonsLeft={toolbarButtonsLeft}
                toolbarButtonsRight={toolbarButtonsRight}
                userDetails={userDetails}
                cartItems={cartItems}/>
        </Row>
      </Container>
    </Col>
  );
}

export default Dashboard;