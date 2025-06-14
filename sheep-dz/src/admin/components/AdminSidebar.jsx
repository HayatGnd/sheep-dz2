import React from "react";
import { Link } from "react-router-dom";

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
          <Link to="sheeps" className="sidebar-link">
            <span className="icon-wrapper">
              <img src={sheepIcon} alt="Sheeps" className="icon" />
            </span>
            <span className="sidebar-text">Sheeps</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/appointments" className="sidebar-link">
            <span className="icon-wrapper">
              <img src={calendarIcon} alt="Appointments" className="icon" />
            </span>
            <span className="sidebar-text">point of sale</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/payment" className="sidebar-link">
            <span className="icon-wrapper">
              <img src={paymentIcon} alt="Payment" className="icon" />
            </span>
            <span className="sidebar-text">Users</span>
          </Link>
        </li>
      </ul>
      <div className="sidebar-item sidebar-logout">
        <Link to="/logout" className="sidebar-link">
          <span className="icon-wrapper">
            <img src={logoutIcon} alt="Logout" className="icon" />
          </span>
          <span className="sidebar-text">Logout</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;