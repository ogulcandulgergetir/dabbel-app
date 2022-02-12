import React from "react";
import "./GridElementBody.css";
import GridElementText from '../GridElementText/GridElementText'


function GridElementBody({ text }) {
  return (
    <GridElementText text={text}/>
  );
}

export default GridElementBody;