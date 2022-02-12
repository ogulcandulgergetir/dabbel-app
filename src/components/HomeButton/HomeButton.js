import React from "react";
import "./HomeButton.css";
import Button from '../Button/Button'

import { Col } from 'react-bootstrap';


function HomeButton({ button }) {
  return (
    <div  className="home-button px-2">
      <Button text={button.buttonText} 
              icon={button.icon} 
              chevronType={button.chevronType} 
              notificationTextColor={button.notificationTextColor}
              notificationBackgroundColor ={button.notificationBackgroundColor}
              notificationText={button.notificationText}
      />      
    </div>
  );
}

export default HomeButton;