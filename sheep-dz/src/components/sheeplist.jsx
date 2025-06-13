import React from "react";
import "./sheeplist.css";

const SheepList = ({ sheeps, onSeeMore, onViewDetails }) => (
  <div className="sheep-list-outer">
    <div className="sheep-list-title">Recommended for You</div>
    <div className="sheep-list-grid">
      {sheeps.map((sheep) => (
        <div className="sheep-card" key={sheep.id}>
          <img src={sheep.image} alt={sheep.name} className="sheep-img" />
          <div className="sheep-name">{sheep.name}</div>
          <div className="sheep-info">
            Weight: {sheep.weight}kg · Age: {sheep.age} years
          </div>
          <div className="sheep-price">{sheep.price}DA</div>
          <button
            className="sheep-btn"
            onClick={() => onViewDetails && onViewDetails(sheep)}
          >
            View Details
          </button>
        </div>
      ))}
    </div>
    <button className="see-more-btn" onClick={onSeeMore}>
      See more
    </button>
  </div>
);

export default SheepList;