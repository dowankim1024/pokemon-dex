import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

export default function PokemonList({ data }) {
  return (
    <ListWrapper>
      {data.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </ListWrapper>
  );
}
