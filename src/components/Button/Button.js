import React from "react";
import "./Button.css";
import CircleNotification from '../CircleNotification/CircleNotification'



function Button({ text, icon, chevronType, notificationText, notificationBackgroundColor, notificationTextColor, hamburgerMenu, rightSide, cartItemAmount, onClick }) {
  return (
    <div  className={`button  py-2 ${text ? 'd-flex justify-content-between' : 'd-inline-block'} ${!text && (hamburgerMenu ? 'd-sm-block d-md-none' : (rightSide ? '': 'd-none d-md-block'))}`}>
      <div className="d-flex align-items-center" style={{position: "relative"}} onClick={icon === "feather:shopping-cart" ? onClick : undefined} type="button">
          <span className="iconify" data-icon={icon} style={{display: "block", marginRight: "13px"}}></span>
          {text && <h6 className="mb-0">{text}</h6>}
          {icon === "feather:shopping-cart" &&
            <div className="button-notification">
              <CircleNotification text={notificationText} backgroundColor={notificationBackgroundColor} textColor={notificationTextColor}/>
            </div>
          }
      </div>
      {chevronType &&
      <div className="d-flex align-items-center">
        {notificationText &&
          <CircleNotification text={notificationText} backgroundColor={notificationBackgroundColor} textColor={notificationTextColor}/>
        }        
        <span className="iconify" data-icon={`akar-icons:chevron-${chevronType}`} style={{display: "block", marginLeft: "5px",height: "12px"}}></span>
      </div>      
      }
    </div>
  );
}

export default Button;