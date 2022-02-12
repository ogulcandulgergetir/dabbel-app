import React from "react";
import "./CartModal.css";
import Button from '../Button/Button'
import { Modal } from 'react-bootstrap';



function CartModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          My Cart
        </Modal.Title>
      </Modal.Header>

      {props.cartItems.map((item) => {
        return <Modal.Body>
                  <div className="d-flex justify-content-between">
                    <div className="">{item.name}
                    </div>
                    <div className="d-flex">
                      <div className="" style={{marginLeft: "6rem",marginRight: "3rem"}}>Title</div>
                      <div className="" style={{marginRight: "1rem"}}>${item.price}</div>
                      <div><span className="iconify" data-icon="fluent:delete-24-regular"></span></div>
                    </div>
                  </div>
              </Modal.Body>
      })}      
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default CartModal;