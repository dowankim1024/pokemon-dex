import { createContext, useContext, useState } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [selectedPokemons, setSelectedPokemons] = useState([]);

  const addPokemon = (pokemon) => {
    if (selectedPokemons.find((p) => p.id === pokemon.id)) return;
    if (selectedPokemons.length >= 6) return;
    setSelectedPokemons([...selectedPokemons, pokemon]);
  };

  const removePokemon = (id) => {
    setSelectedPokemons(selectedPokemons.filter((p) => p.id !== id));
  };

  return (
    <PokemonContext.Provider value={{ selectedPokemons, addPokemon, removePokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => useContext(PokemonContext);
