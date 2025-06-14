import React from "react";
import { Link } from "react-router-dom";
import homeIcon from "../../assets/home.png";
import sheepIcon from "../../assets/sheeps.png";
import saleIcon from "../../assets/sale.png";
import userIcon from "../../assets/user.png";
import calenderIcon from "../../assets/calendar.png";
import paymentIcon from "../../assets/paymen.png";
import "../../components/header.css";
import "../../components/sidebare.css";
import "./admindashboard.css"; 
import usersIcon from "../../assets/users-photon.png";
import calendarsIcon from "../../assets/calendar-photon.png";
import sheepsIcon from "../../assets/sheep-photon.png";
import shopsIcon from "../../assets/shop-photon.png";
import augmenteIcon from "../../assets/augmente.png";
import grapheImg from "../../assets/graphe.png";
import graphe2Img from "../../assets/graphe2.png";
import users2Icon from "../../assets/users2.png";
import calendar2Icon from "../../assets/calendr2.png";
import warningIcon from "../../assets/warning.png";

export default function AdminDashboard() {
  return (
    <div className="admin-root">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <img src="/logo.png" alt="Sheepfy Logo" className="header-logo" />
          <span className="header-title">Sheepfy</span>
          <span className="header-page">Dashboard</span>
        </div>
        <div className="header-avatar" />
      </header>

      {/* Croix de séparation */}
      <div className="cross-separator"></div>

      {/* Main content with sidebar */}
      <div className="admin-main">
        <aside className="sidebar">
          <ul className="sidebar-menu">
            <li className="sidebar-item">
              <Link to="/admin" className="sidebar-link">
                <span className="icon-wrapper">
                  <img src={homeIcon} alt="Home" className="icon" />
                </span>
                <span className="sidebar-text">Dashboard</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/admin/sheeps" className="sidebar-link">
                <span className="icon-wrapper">
                  <img src={sheepIcon} alt="Sheeps" className="icon" />
                </span>
                <span className="sidebar-text">Sheeps</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/admin/appointments" className="sidebar-link">
                <span className="icon-wrapper">
                  <img src={saleIcon} alt="Appointments" className="icon" />
                </span>
                <span className="sidebar-text">Point of sale</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/admin/payment" className="sidebar-link">
                <span className="icon-wrapper">
                  <img src={userIcon} alt="Payment" className="icon" />
                </span>
                <span className="sidebar-text">Users</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/admin/payments" className="sidebar-link">
                <span className="icon-wrapper">
                  <img src={calenderIcon} alt="Payments" className="icon" />
                </span>
                <span className="sidebar-text">Appointments</span>
              </Link>
            </li>
          </ul>
          <div className="sidebar-item sidebar-logout">
            <Link to="/logout" className="sidebar-link">
              <span className="icon-wrapper">
                <img src={paymentIcon} alt="Logout" className="icon" />
              </span>
              <span className="sidebar-text">Payments</span>
            </Link>
          </div>
        </aside>
        <main className="admin-content">
          {/* DASHBOARD CARDS */}
        <div className="dashboard-cards">
  <div className="dashboard-card">
    <div className="card-title">
      Total Users
      <img src={usersIcon} alt="Users" className="dashboard-icon" />
    </div>
    <div className="card-value">1234</div>
    <div className="card-sub green">
  <img src={augmenteIcon} alt="Augmentation" className="card-sub-icon" />
  +12% from last month
</div>
  </div>
  <div className="dashboard-card">
    <div className="card-title">
      Appointment
      <img src={calendarsIcon} alt="Appointment" className="dashboard-icon" />
    </div>
    <div className="card-value">45</div>
    <div className="card-sub">45 this week</div>
  </div>
  <div className="dashboard-card">
    <div className="card-title">
      Total Sheeps
      <img src={sheepsIcon} alt="Sheeps" className="dashboard-icon" />
    </div>
    <div className="card-value">127778</div>
    <div className="card-sub">129 sold this week</div>
  </div>
  <div className="dashboard-card">
    <div className="card-title">
      Points of sale
      <img src={shopsIcon} alt="Points of sale" className="dashboard-icon" />
    </div>
    <div className="card-value">557</div>
    <div className="card-sub">All operational</div>
  </div>
</div>

          {/* DASHBOARD GRAPHS */}
         <div className="dashboard-graphs">
  <div className="dashboard-graph-card">
    <div className="graph-title">Sheep Purchases Over Time</div>
    <div className="graph-placeholder">
      <img src={grapheImg} alt="Sheep Purchases Graph" style={{width: "100%", height: "180px", objectFit: "contain"}} />
    </div>
  </div>
  <div className="dashboard-graph-card">
    <div className="graph-title">Appointments per Point of Sale</div>
    <div className="graph-placeholder">
      <img src={graphe2Img} alt="Appointments Graph" style={{width: "100%", height: "180px", objectFit: "contain"}} />
    </div>
  </div>
</div>

          {/* DASHBOARD ACTIVITY */}

<div className="dashboard-bottom">
  <div className="dashboard-activity-card">
    <div className="activity-title">Recent Activity</div>
    <ul className="activity-list">
      <li>
        <span className="activity-icon">
          <img src={users2Icon} alt="User" />
        </span>
        <div className="activity-info">
          <div className="activity-main">New user registered</div>
          <div className="activity-sub">Alla Maya</div>
        </div>
        <span className="activity-time">2 min ago</span>
      </li>
      <li>
        <span className="activity-icon">
          <img src={calendar2Icon} alt="Calendar" />
        </span>
        <div className="activity-info">
          <div className="activity-main">Appointment scheduled</div>
          <div className="activity-sub">SH0006</div>
        </div>
        <span className="activity-time">8 min ago</span>
      </li>
    </ul>
  </div>
  <div className="dashboard-approvals-card">
    <div className="approvals-title">Pending Approvals</div>
    <div className="approval-item">
      <span className="approval-badge yellow">
        <img src={warningIcon} alt="Warning" />
      </span>
      Document Verification
      <span className="approval-count">12</span>
    </div>
  </div>
</div>
        </main>
      </div>
    </div>
  );
}