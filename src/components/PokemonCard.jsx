import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled.div`
  width: 120px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Img = styled.img`
  width: 80px;
  height: 80px;
`;

const Name = styled.p`
  font-weight: bold;
  margin: 0.5rem 0 0.25rem;
`;

const Type = styled.p`
  font-size: 12px;
  color: #666;
`;

const AddButton = styled.button`
  margin-top: 0.5rem;
  background: #4CAF50;
  color: white;
  border: none;
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 4px;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function PokemonCard({ pokemon, onAdd }) {
  return (
    <Card>
      <StyledLink to={`/detail?id=${pokemon.id}`}>
        <Img src={pokemon.img_url} alt={pokemon.korean_name} />
        <Name>{pokemon.korean_name}</Name>
        <Type>{pokemon.types.join(", ")}</Type>
      </StyledLink>
      <AddButton onClick={() => onAdd(pokemon)}>추가</AddButton>
    </Card>
  );
}
