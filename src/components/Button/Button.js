import React from "react";
import "./Button.css";
import { Col } from 'react-bootstrap';


function Button({ text, icon, toggleTodo }) {
  return (
    <div  className="button m-3 d-flex align-items-center">
      <span className="iconify" data-icon={icon} style={{display: "block", marginRight: "15px"}}></span>
      <h6 className="mb-0">{text}</h6>
    </div>
  );
}

export default Button;