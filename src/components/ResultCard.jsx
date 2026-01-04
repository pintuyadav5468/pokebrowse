import React from "react";
import "./ResultCard.css";

function ResultCard({ pokemon }) {
  const typeColors = {
    normal: "#A8A878",
    fire: "#F08030",
    water: "#6890F0",
    electric: "#F8D030",
    grass: "#78C850",
    ice: "#98D8D8",
    fighting: "#C03028",
    poison: "#A040A0",
    ground: "#E0C068",
    flying: "#A890F0",
    psychic: "#F85888",
    bug: "#A8B820",
    rock: "#B8A038",
    ghost: "#705898",
    dragon: "#7038F8",
    dark: "#705848",
    steel: "#B8B8D0",
    fairy: "#EE99AC",
  };

  const mainType = pokemon.types[0];
  const bgColor = typeColors[mainType] || "#68A090";

  return (
    <div className="result-card" style={{ "--card-color": bgColor }}>
      <div className="card-header">
        <span className="pokemon-id">
          #{pokemon.id.toString().padStart(3, "0")}
        </span>
        <h3 className="pokemon-name">
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </h3>
      </div>

      <div className="pokemon-image-wrapper">
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="pokemon-image"
          loading="lazy"
        />
      </div>

      <div className="pokemon-types">
        {pokemon.types.map((type) => (
          <span
            key={type}
            className="type-badge"
            style={{ backgroundColor: typeColors[type] || "#68A090" }}
          >
            {type}
          </span>
        ))}
      </div>

      <div className="pokemon-stats">
        <div className="stat-item">
          <span className="stat-label">Height</span>
          <span className="stat-value">
            {(pokemon.height / 10).toFixed(1)}m
          </span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Weight</span>
          <span className="stat-value">
            {(pokemon.weight / 10).toFixed(1)}kg
          </span>
        </div>
      </div>

      <div className="pokemon-abilities">
        <span className="abilities-label">Abilities:</span>
        <div className="abilities-list">
          {pokemon.abilities.slice(0, 2).map((ability, idx) => (
            <span key={idx} className="ability-badge">
              {ability.replace("-", " ")}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResultCard;


