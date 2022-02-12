import React from "react";
import "./CircleNotification.css";
import { Col } from 'react-bootstrap';


function CircleNotification({ backgroundColor, textColor, text }) {
  return (
    <div  className="circle-notification" style={{backgroundColor: backgroundColor, color: textColor }}>
      {text}
    </div>
  );
}

export default CircleNotification;