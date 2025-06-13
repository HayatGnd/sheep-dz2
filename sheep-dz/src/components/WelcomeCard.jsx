import React from "react";
import warningIcon from "../assets/warning.png";
import checkIcon from "../assets/check.png";
import dotIcon from "../assets/dot.png";
import "./WelcomeCard.css";

const WelcomeCard = () => (
  <div>
    <div className="welcome-card">
      <div className="welcome-title">Welcome back, Maya</div>
      <div className="welcome-subtitle">Ready to explore some sheep today?</div>
    </div>

    <div className="status-row">
      <div className="status-card">
        <span className="status-icon status-warning">
          <img src={warningIcon} alt="Warning" />
        </span>
        <span className="status-text"><b>Payment pending</b></span>
      </div>
      <div className="status-card">
        <span className="status-icon status-success">
          <img src={checkIcon} alt="Confirmed" />
        </span>
        <span className="status-text"><b>Appointment Confirmed</b></span>
      </div>
    </div>

    <div className="doc-section-outer">
      <div className="doc-title">Document Verification Status</div>
      <div className="doc-row">
        <div className="doc-card">
          <span className="doc-dot">
            <img src={dotIcon} alt="Dot" />
          </span>
          <span className="doc-text">CNN</span>
        </div>
        <div className="doc-card">
          <span className="doc-dot">
            <img src={dotIcon} alt="Dot" />
          </span>
          <span className="doc-text">Payslip</span>
        </div>
      </div>
    </div>
  </div>
);

export default WelcomeCard;