import React from "react";
import "./LoadingSpinner.css";

function LoadingSpinner() {
  return (
    <div className="loading-container">
      <div className="pokeball-spinner">
        <div className="pokeball-top"></div>
        <div className="pokeball-bottom"></div>
        <div className="pokeball-center"></div>
      </div>
      <p className="loading-text">Loading Pokémon...</p>
    </div>
  );
}

export default LoadingSpinner;


