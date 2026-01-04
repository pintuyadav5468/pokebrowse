import React from "react";
import "./SearchBar.css";

function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <div className="search-input-wrapper">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          className="search-input"
          placeholder="Search Pokémon by name..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        {value && (
          <button
            className="clear-search"
            onClick={() => onChange("")}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBar;

