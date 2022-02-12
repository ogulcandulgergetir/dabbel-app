import React from "react";
import "./Category.css";
import Button from '../Button/Button'

function Category({ title, categoryButtons }) {
  return (
    <div  className="category mt-4 p-2">
      <h2>{title}</h2>
      {categoryButtons.map((element, idx) => {
        return <Button  key={idx}
                        text={element.buttonText}
                        icon={element.icon}                        
                        chevronType={element.chevronType}
                        notificationText={element.notificationText}
                        notificationBackgroundColor={element.notificationBackgroundColor}
                        notificationTextColor={element.notificationTextColor}
                /> 
      })}     
    </div>
  );
}

export default Category;