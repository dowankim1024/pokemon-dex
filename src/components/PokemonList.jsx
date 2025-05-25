import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

export default function PokemonList({ data = [], onAdd }) {
  return (
    <ListWrapper>
      {data.length > 0 ? (
        data.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} onAdd={onAdd} />
        ))
      ) : (
        <p>포켓몬 데이터가 없습니다.</p>
      )}
    </ListWrapper>
  );
}
