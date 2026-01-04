import React from "react";
import "./Filters.css";

function Filters({ types, selectedType, onTypeChange }) {
  return (
    <div className="filters">
      <label htmlFor="type-filter" className="filter-label">
        Filter by Type:
      </label>
      <select
        id="type-filter"
        className="filter-select"
        value={selectedType}
        onChange={(e) => onTypeChange(e.target.value)}
      >
        <option value="">All Types</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filters;


