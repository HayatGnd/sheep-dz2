import React, { useState } from "react";
import Header from '../components/header';
import Sidebar from '../components/sidebare';
import WelcomeCard from '../components/WelcomeCard';
import SheepList from '../components/sheeplist';
import '../App.css';

const sheeps = [
  { id: 1, name: "Sheep #1001", weight: 25, age: 2, price: 40000, image: "./assets/sheep.png" },
  { id: 2, name: "Sheep #1002", weight: 28, age: 2, price: 40000, image: "/sheep2.jpg" },
  { id: 3, name: "Sheep #1003", weight: 29, age: 3, price: 40000, image: "/sheep3.jpg" },
];

function Home() {
  const [selectedSheep, setSelectedSheep] = useState(null);

  return (
    <div className="app-root">
      <Header />
      <div className="app-main">
        <Sidebar />
        <div className="app-content">
          <WelcomeCard />
          {selectedSheep ? (
            <div className="sheep-details">
              <button className="sheep-btn" onClick={() => setSelectedSheep(null)}>
                &larr; Back
              </button>
              <h2>{selectedSheep.name}</h2>
              <img src={selectedSheep.image} alt={selectedSheep.name} className="sheep-img" />
              <div>Weight: {selectedSheep.weight}kg</div>
              <div>Age: {selectedSheep.age} years</div>
              <div>Price: {selectedSheep.price}DA</div>
            </div>
          ) : (
            <SheepList sheeps={sheeps} onViewDetails={setSelectedSheep} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;