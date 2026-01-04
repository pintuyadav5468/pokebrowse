import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2";
const POKEMON_LIMIT = 1000;

// Cache for all Pokémon data
let allPokemonCache = null;

// Fetch all Pokémon (used for search and filtering)
const fetchAllPokemon = async () => {
  if (allPokemonCache) {
    return allPokemonCache;
  }

  try {
    const response = await axios.get(
      `${BASE_URL}/pokemon?limit=${POKEMON_LIMIT}`
    );
    allPokemonCache = response.data.results;
    return allPokemonCache;
  } catch (error) {
    throw new Error("Failed to fetch Pokémon list");
  }
};

// Fetch detailed Pokémon data
const fetchPokemonDetails = async (nameOrUrl) => {
  try {
    const url = nameOrUrl.includes("http")
      ? nameOrUrl
      : `${BASE_URL}/pokemon/${nameOrUrl}`;
    const response = await axios.get(url);
    const data = response.data;

    return {
      id: data.id,
      name: data.name,
      image:
        data.sprites.other["official-artwork"].front_default ||
        data.sprites.front_default,
      types: data.types.map((t) => t.type.name),
      height: data.height,
      weight: data.weight,
      stats: data.stats.map((s) => ({
        name: s.stat.name,
        value: s.base_stat,
      })),
      abilities: data.abilities.map((a) => a.ability.name),
    };
  } catch (error) {
    console.error(`Failed to fetch details for ${nameOrUrl}:`, error);
    return null;
  }
};

// Search Pokémon with filters
export const searchPokemon = async (searchTerm = "", type = "") => {
  try {
    let pokemonList = await fetchAllPokemon();

    // Filter by search term
    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase();
      pokemonList = pokemonList.filter((p) =>
        p.name.toLowerCase().includes(lowerSearch)
      );
    }

    // Limit results for performance
    const limitedList = pokemonList.slice(0, 50);

    // Fetch detailed data for filtered Pokémon
    const detailedPromises = limitedList.map((p) => fetchPokemonDetails(p.url));
    const detailedPokemon = await Promise.all(detailedPromises);

    let results = detailedPokemon.filter((p) => p !== null);

    // Filter by type if selected
    if (type) {
      results = results.filter((p) => p.types.includes(type));
    }

    return results;
  } catch (error) {
    throw new Error(error.message || "Failed to search Pokémon");
  }
};

// Get all Pokémon types
export const getPokemonTypes = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/type`);
    return response.data.results.map((t) => t.name);
  } catch (_error) {
    throw new Error("Failed to fetch Pokémon types");
  }
};


