import React from "react";
import "./Sidebar.css";
import HomeButton from '../HomeButton/HomeButton'
import Category from '../Category/Category'
import { Col } from 'react-bootstrap';




function Sidebar({ md, index, toggleTodo }) {

  const categoryOneButtons = [
    {
      icon: "feather:check-square",
      buttonText: "buttonText"
    },
    {
      icon: "icon2",
      buttonText: "buttonText2"
    },
    {
      icon: "icon3",
      buttonText: "buttonText3"
    },
    {
      icon: "icon4",
      buttonText: "buttonText4"
    },
    {
      icon: "icon5",
      buttonText: "buttonText5"
    },
  ]
  
  const categoryTwoButtons = [
    {
      icon: "icon",
      buttonText: "buttonText"
    },
    {
      icon: "icon2",
      buttonText: "buttonText2"
    },
    {
      icon: "icon3",
      buttonText: "buttonText3"
    }
  ]

  return (
    <div md={md} className="sidebar d-none d-md-block p-3">
      <HomeButton/>
      <Category title="CATEOGORY1" categoryButtons={categoryOneButtons}/>
      <Category title="CATEOGORY2"categoryButtons={categoryTwoButtons}/>
    </div>
  );
}

export default Sidebar;