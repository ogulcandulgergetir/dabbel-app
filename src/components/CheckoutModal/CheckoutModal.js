import React from "react";
import "./CheckoutModal.css";
import Button from '../Button/Button'
import { Modal } from 'react-bootstrap';



function CheckoutModal({show, onHide}) {
  return (
    <Modal
    show={show}
    onHide={onHide}
    size="md"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    className="checkout-modal"
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Purchase Successful!
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h5>Thank you for choosing us :)</h5>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
        consectetur ac, vestibulum at eros.
      </p>
    </Modal.Body>
  </Modal>
  );
}


export default CheckoutModal;