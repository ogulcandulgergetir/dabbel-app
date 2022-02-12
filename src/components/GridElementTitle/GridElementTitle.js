import React from "react";
import "./GridElementTitle.css";

function GridElementTitle({ title, updatedDate }) {
  return (
    <div className="grid-element-title d-flex justify-content-between">
      <span>{title}</span>
      {updatedDate &&
        <span className="date">{updatedDate}</span>  
      }
    </div>
  );
}

export default GridElementTitle;