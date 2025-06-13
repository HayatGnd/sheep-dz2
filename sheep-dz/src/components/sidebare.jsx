import React from "react";
import { Link } from "react-router-dom"; // Ajoute ceci

import homeIcon from "../assets/home.png";
import sheepIcon from "../assets/card.png";
import calendarIcon from "../assets/calendar.png";
import paymentIcon from "../assets/paymen.png";
import logoutIcon from "../assets/logout.png";
import "./sidebare.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li className="sidebar-item">
          <Link to="/" className="sidebar-link">
            <span className="icon-wrapper">
              <img src={homeIcon} alt="Home" className="icon" />
            </span>
            <span className="sidebar-text">Home</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <span className="icon-wrapper">
            <img src={sheepIcon} alt="Sheeps" className="icon" />
          </span>
          <span className="sidebar-text">Sheeps</span>
        </li>
        <li className="sidebar-item">
          <span className="icon-wrapper">
            <img src={calendarIcon} alt="Appointments" className="icon" />
          </span>
          <span className="sidebar-text">Appointments</span>
        </li>
        <li className="sidebar-item">
          <span className="icon-wrapper">
            <img src={paymentIcon} alt="Payment" className="icon" />
          </span>
          <span className="sidebar-text">Payment</span>
        </li>
      </ul>
      <div className="sidebar-item sidebar-logout">
        <span className="icon-wrapper">
          <img src={logoutIcon} alt="Logout" className="icon" />
        </span>
        <span className="sidebar-text">Logout</span>
      </div>
    </div>
  );
}

export default Sidebar;