import React from "react";
import ResultCard from "./ResultCard";
import "./ResultList.css";

function ResultList({ pokemon }) {
  return (
    <div className="result-list">
      {pokemon.map((p) => (
        <ResultCard key={p.id} pokemon={p} />
      ))}
    </div>
  );
}

export default ResultList;


