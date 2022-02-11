import React from "react";
import "./Sidebar.css";
import HomeButton from '../HomeButton/HomeButton'
import Category from '../Category/Category'
import { Col } from 'react-bootstrap';




function Sidebar({ md, index, toggleTodo }) {

  const categoryOneButtons = [
    {
      icon: "feather:mail",
      buttonText: "Email"
    },
    {
      icon: "feather:message-square",
      buttonText: "Chat"
    },
    {
      icon: "feather:check-square",
      buttonText: "Todo"
    },
    {
      icon: "feather:calendar",
      buttonText: "Calendar"
    },
    {
      icon: "feather:shopping-cart",
      buttonText: "eCommerce"
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
    <div md={md} className="sidebar d-none d-md-block p-4">
      <HomeButton/>
      <Category title="CATEOGORY 1" categoryButtons={categoryOneButtons}/>
      <Category title="CATEOGORY 2"categoryButtons={categoryTwoButtons}/>
    </div>
  );
}

export default Sidebar;