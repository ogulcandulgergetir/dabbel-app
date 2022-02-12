import React from "react";
import "./CartModal.css";
import Button from '../Button/Button'
import { Modal } from 'react-bootstrap';



function CartModal({show, onHide,cartItems, onDecrase, onIncrease, onRemove, totalAmount, onCheckout}) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      className="cart-modal"
      
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          My Cart
        </Modal.Title>
      </Modal.Header>

      {cartItems.length > 0 ? cartItems.map((item, idx) => {
        return <Modal.Body key={idx} scrollable="true">

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="">{item.name}
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="plus-minus-snippet text-center" style={{marginRight: "2rem"}}>
                        <button onClick={() => onDecrase(idx)} style={{float: "left",borderRight: "1px solid rgba(83, 83, 83, 0.349)"}}><span className="iconify" data-icon="akar-icons:minus"></span></button>
                        {item.count}
                        <button onClick={() => onIncrease(idx)} style={{float: "right",borderLeft: "1px solid rgba(83, 83, 83, 0.349)"}}><span className="iconify" data-icon="akar-icons:plus"></span></button>
                      </div>
                      <div className="" style={{ width: "80px"}}>${Math.round(item.price*item.count*100)/100}</div>
                      <div type="button" onClick={() => onRemove(idx)}><span className="iconify" data-icon="fluent:delete-24-regular" data-width="24" data-height="24" style={{paddingBottom: "6px"}}></span></div>
                    </div>
                  </div>
              </Modal.Body>
      }) :
      <div className="p-3">Your cart is empty</div>
      }      
      <Modal.Footer>
        <div className="d-flex justify-content-between w-100">
          <div>Total:</div>
          <div><strong>${totalAmount}</strong></div>
        </div>
        <div className="d-flex justify-content-between w-100">
          <button onClick={()=> {onCheckout();onHide()}} className="w-100">Checkout</button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}


export default CartModal;