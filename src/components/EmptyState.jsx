import React from "react";
import "./EmptyState.css";

function EmptyState({ hasSearch }) {
  return (
    <div className="empty-state">
      <div className="empty-icon">🔍</div>
      {hasSearch ? (
        <>
          <h3 className="empty-title">No Pokémon Found</h3>
          <p className="empty-message">
            Try adjusting your search or filter criteria
          </p>
        </>
      ) : (
        <>
          <h3 className="empty-title">Start Exploring!</h3>
          <p className="empty-message">
            Search for a Pokémon by name or filter by type to get started
          </p>
        </>
      )}
    </div>
  );
}

export default EmptyState;


