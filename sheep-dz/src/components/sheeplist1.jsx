import React, { useState } from "react";
import './sheeplist1.css'
import sheepImg from "../assets/sheep.png"; // adapte le chemin si besoin

const sheepData = [
  {
    id: 1001,
    weight: 26,
    age: 2,
    price: 40000,
    status: "Good",
    location: "Algiers",
    image: "",
  },
  {
    id: 1002,
    weight: 26,
    age: 2,
    price: 40000,
    status: "Excellent",
    location: "Oran",
    image: "",
  },
  {
    id: 1003,
    weight: 26,
    age: 2,
    price: 40000,
    status: "Good",
    location: "Oran",
    image: "",
  },
  {
    id: 1004,
    weight: 26,
    age: 2,
    price: 40000,
    status: "Excellent",
    location: "Algiers",
    image: "",
  },
];

const locations = ["All locations", "Algiers", "Oran"];
const healths = ["All health", "Good", "Excellent"];

export default function Sheeps() {
  const [location, setLocation] = useState("All locations");
  const [health, setHealth] = useState("All health");

  const filteredSheeps = sheepData.filter(
    (sheep) =>
      (location === "All locations" || sheep.location === location) &&
      (health === "All health" || sheep.status === health)
  );

  return (
    <div>
      {/* Filtres */}
      <div className="filters">
  <select
    className="custom-select"
    value={location}
    onChange={e => setLocation(e.target.value)}
  >
    {locations.map(loc => (
      <option key={loc} value={loc}>{loc}</option>
    ))}
  </select>
  <select
    className="custom-select"
    value={health}
    onChange={e => setHealth(e.target.value)}
  >
    {healths.map(h => (
      <option key={h} value={h}>{h}</option>
    ))}
  </select>
</div>

      {/* Grille */}
      <div className="sheep-grid">
        {filteredSheeps.map((sheep) => (
          <div className="sheep-card" key={sheep.id}>
            <img
              src={sheep.image || sheepImg}
              alt={`Sheep #${sheep.id}`}
              className="sheep-img"
            />
            <div className="sheep-info">
              <div className="sheep-title">
                <strong>Sheep #{sheep.id}</strong>
                <span className={`sheep-status status-${sheep.status.toLowerCase()}`}>
                  {sheep.status}
                </span>
              </div>
              <div className="sheep-details">
                Weight: {sheep.weight}kg • Age: {sheep.age} years
              </div>
              <div className="sheep-price">
                <strong style={{ color: "#27ae60" }}>{sheep.price}DA</strong>
              </div>
              <div className="sheep-actions">
                <button className="btn-details">View Details</button>
                <button className="btn-cart">Buy this sheep</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}