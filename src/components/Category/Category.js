import React from "react";
import "./Category.css";
import Button from '../Button/Button'

import { Col } from 'react-bootstrap';


function Category({ title, categoryButtons, toggleTodo }) {
  return (
    <div  className="category mt-4 p-2">
      <h2>{title}</h2>
      {categoryButtons.map((element, idx) => {
        return <Button text={element.buttonText} icon={element.icon} key={idx}/> 
      })}     
    </div>
  );
}

export default Category;