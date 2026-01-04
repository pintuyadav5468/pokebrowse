import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import ResultList from "./components/ResultList";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorMessage from "./components/ErrorMessage";
import EmptyState from "./components/EmptyState";
import { searchPokemon, getPokemonTypes } from "./services/api";
import useDebounce from "./hooks/useDebounce";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [types, setTypes] = useState([]);

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    const loadTypes = async () => {
      try {
        const typeList = await getPokemonTypes();
        setTypes(typeList);
      } catch (err) {
        console.error("Failed to load types:", err);
      }
    };
    loadTypes();
  }, []);

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      setError(null);

      try {
        const results = await searchPokemon(debouncedSearch, selectedType);
        setPokemon(results);
      } catch (err) {
        setError(err.message || "Failed to fetch Pokémon. Please try again.");
        setPokemon([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [debouncedSearch, selectedType]);

  const handleClearFilters = () => {
    setSearch("");
    setSelectedType("");
  };

  const hasActiveFilters = search || selectedType;

  return (
    <div className="app">
      <Layout>
        <div className="hero">
          <h1>🔍 PokéBrowse</h1>
          <p>Search and discover your favorite Pokémon</p>
        </div>

        <div className="search-section">
          <SearchBar value={search} onChange={setSearch} />
          <Filters
            types={types}
            selectedType={selectedType}
            onTypeChange={setSelectedType}
          />

          {hasActiveFilters && (
            <div className="results-info">
              <span className="results-count">
                {loading ? "Searching..." : `Found ${pokemon.length} Pokémon`}
              </span>
              <button className="clear-filters" onClick={handleClearFilters}>
                Clear Filters
              </button>
            </div>
          )}

          {loading && <LoadingSpinner />}
          {error && <ErrorMessage message={error} />}
          {!loading && !error && pokemon.length === 0 && (
            <EmptyState hasSearch={!!debouncedSearch || !!selectedType} />
          )}
          {!loading && !error && pokemon.length > 0 && (
            <ResultList pokemon={pokemon} />
          )}
        </div>
      </Layout>
    </div>
  );
}

export default App;


