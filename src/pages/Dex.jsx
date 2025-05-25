import MOCK_DATA from "../data/mock";
import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2rem;
`;

export default function Dex() {
  return (
    <Wrapper>
      <Dashboard />
      <PokemonList data={MOCK_DATA} />
    </Wrapper>
  );
}
