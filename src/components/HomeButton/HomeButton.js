import React from "react";
import "./HomeButton.css";
import Button from '../Button/Button'

import { Col } from 'react-bootstrap';


function HomeButton({ md, index, toggleTodo }) {
  return (
    <div  className="home-button px-2">
      <Button text="Home" icon="feather:home"/>      
    </div>
  );
}

export default HomeButton;