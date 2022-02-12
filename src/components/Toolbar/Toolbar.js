import React from "react";
import "./Toolbar.css";
import Button from '../Button/Button'
import CartModal from '../CartModal/CartModal'
import { Col } from 'react-bootstrap';



function Toolbar({ toolbarButtonsLeft, toolbarButtonsRight, username, status, cartItems }) {

  const [modalShow, setModalShow] = React.useState(false);

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
                          rightSide={element.rightSide}
                          notificationText={cartItems.length}
                          notificationBackgroundColor={element.notificationBackgroundColor}
                          notificationTextColor={element.notificationTextColor}
                          onClick={() => {
                            setModalShow(true)
                          }}
                  /> 
        })} 
        <div className="d-none d-sm-block" style={{position: "relative"}}>
          <p className="toolbar-user toolbar-username ">{username}</p>
          <p className="toolbar-user toolbar-user-status" style={{float: "right"}}>{status}</p>
        </div>
      </div>
      <CartModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
     </div>
    </Col>
  );
}


export default Toolbar;