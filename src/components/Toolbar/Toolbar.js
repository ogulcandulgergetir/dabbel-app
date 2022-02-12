import React from "react";
import "./Toolbar.css";
import Button from '../Button/Button'
import { Col } from 'react-bootstrap';



function Toolbar({ toolbarButtonsLeft, toolbarButtonsRight }) {
  return (
    <Col className="grid-element" >
     <div className="grid-content h-100 d-flex justify-content-between py-2">
      <div className="d-flex align-items-center">
        {toolbarButtonsLeft.map((element, idx) => {
          return <Button  key={idx}
                          icon={element.icon}
                          hamburgerMenu={element.hamburgerMenu}
                  /> 
        })} 
      </div>
      <div className="d-flex align-items-center">
        {toolbarButtonsRight.map((element, idx) => {
          return <Button  key={idx}
                          icon={element.icon}
                          hamburgerMenu={element.hamburgerMenu}
                  /> 
        })} 
        admin
      </div>
     </div>
    </Col>
  );
}

export default Toolbar;