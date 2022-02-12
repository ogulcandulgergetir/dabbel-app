import React from "react";
import "./Button.css";
import CircleNotification from '../CircleNotification/CircleNotification'

import { Col } from 'react-bootstrap';


function Button({ text, icon, chevronType, notificationText, notificationBackgroundColor, notificationTextColor }) {
  return (
    <div  className={`button  py-2 ${text ? 'd-flex justify-content-between' : 'd-inline-block'}`}>
      <div className="d-flex align-items-center">
        <span className="iconify" data-icon={icon} style={{display: "block", marginRight: "13px"}}></span>
        {text && <h6 className="mb-0">{text}</h6>}
      </div>
      {chevronType &&
      <div className="d-flex align-items-center">
        {notificationText &&
          <CircleNotification text={notificationText} backgroundColor={notificationBackgroundColor} textColor={notificationTextColor}/>
        }        
        <span class="iconify" data-icon={`akar-icons:chevron-${chevronType}`} style={{display: "block", marginLeft: "5px",height: "12px"}}></span>
      </div>      
      }
    </div>
  );
}

export default Button;