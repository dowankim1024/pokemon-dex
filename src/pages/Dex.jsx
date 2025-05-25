import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../data/mock";
import { useContext } from "react";
import { PokemonContext } from "../contexts/PokemonContext";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

export default function Dex() {
  // Dex.jsx
const { selectedPokemons, addPokemon } = useContext(PokemonContext);


  return (
    <Wrapper>
      <Dashboard selected={selectedPokemons} />
      <PokemonList data={MOCK_DATA} onAdd={addPokemon} />
    </Wrapper>
  );
}
