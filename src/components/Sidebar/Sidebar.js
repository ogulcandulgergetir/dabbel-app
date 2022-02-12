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
      buttonText: "eCommerce",
      chevronType: "right",
    },
  ]
  
  const categoryTwoButtons = [
    {
      icon: "feather:type",
      buttonText: "Typography"
    },
    {
      icon: "feather:eye",
      buttonText: "Feather"
    },
    {
      icon: "feather:credit-card",
      buttonText: "Cards",
      chevronType: "right",
      notificationText: "new",
      notificationBackgroundColor: "rgba(40,199,111,.12)",
      notificationTextColor: "#28c76f",
    },
  ]

  const homeButton = {

      icon: "feather:home",
      buttonText: "Home",
      chevronType: "down",
      notificationText: "2",
      notificationBackgroundColor: "rgba(255,159,67,.12)",
      notificationTextColor: "#ff9f43",

  }

  return (
    <div md={md} className="sidebar d-none d-md-block p-4">
      <HomeButton button={homeButton}/>
      <Category title="CATEOGORY 1" categoryButtons={categoryOneButtons}/>
      <Category title="CATEOGORY 2"categoryButtons={categoryTwoButtons}/>
    </div>
  );
}

export default Sidebar;