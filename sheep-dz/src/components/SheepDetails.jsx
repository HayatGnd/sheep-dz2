// SheepDetails.jsx
import React from "react";
import "./sheepdetails.css";
import sheepImg from "../assets/sheep.png"; // adapte le chemin si besoin

const SheepDetails = ({ sheep, onBack }) => {
  if (!sheep) return null;

  return (
    <div className="sheep-details-wrapper">
      <button className="back-btn" onClick={onBack}>
        <span className="back-arrow">←</span> Back
      </button>
      <div className="sheep-details-title">Sheep Information</div>
      <div className="sheep-details-card">
        <img
          src={sheep.image || sheepImg}
          alt={sheep.name || `Sheep #${sheep.id}`}
          className="sheep-details-img"
        />
        <div className="sheep-details-info">
          <div className="sheep-details-row">
            <div>
              <span className="label">Id</span>
              <div className="value"><b>Sh-{sheep.id}</b></div>
            </div>
            <div>
              <span className="label">Whight</span>
              <div className="value"><b>{sheep.weight}Kg</b></div>
            </div>
            <div>
              <span className="label">Origin</span>
              <div className="value"><b>{sheep.origin || "Algiers"}</b></div>
            </div>
          </div>
          <div className="sheep-details-row">
            <div>
              <span className="label">Age</span>
              <div className="value"><b>{sheep.age} years</b></div>
            </div>
            <div>
              <span className="label">Race</span>
              <div className="value"><b>{sheep.race || "kbicho"}</b></div>
            </div>
          </div>
          <div className="sheep-details-price">{sheep.price}DA</div>
          <button className="sheep-details-buy-btn">Buy this sheep</button>
        </div>
      </div>
    </div>
  );
};

export default SheepDetails;