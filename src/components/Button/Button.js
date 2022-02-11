import React from "react";
import "./Button.css";
import { Col } from 'react-bootstrap';


function Button({ text, icon, toggleTodo }) {
  return (
    <div  className="button d-flex align-items-center py-2">
      <span className="iconify" data-icon={icon} style={{display: "block", marginRight: "13px"}}></span>
      <h6 className="mb-0">{text}</h6>
    </div>
  );
}

export default Button;