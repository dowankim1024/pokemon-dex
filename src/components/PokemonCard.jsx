import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon } from "../redux/selectedSlice";
import { toast } from "react-toastify"; // 추가

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

export default function PokemonCard({ pokemon }) {
  const dispatch = useDispatch();
  const selectedPokemons = useSelector((state) => state.selected.pokemons);

  const handleAdd = () => {
    const isDuplicate = selectedPokemons.some((p) => p.id === pokemon.id);
    const isFull = selectedPokemons.length >= 6;

    if (isDuplicate) {
      toast.info("이미 선택한 포켓몬입니다!");
      return;
    }

    if (isFull) {
      toast.warn("덱에는 최대 6마리만 담을 수 있습니다.");
      return;
    }

    dispatch(addPokemon(pokemon));
    toast.success(`${pokemon.korean_name}이(가) 추가되었습니다!`);
  };

  return (
    <Card>
      <StyledLink to={`/detail?id=${pokemon.id}`}>
        <Img src={pokemon.img_url} alt={pokemon.korean_name} />
        <Name>{pokemon.korean_name}</Name>
        <Type>{pokemon.types.join(", ")}</Type>
      </StyledLink>
      <AddButton onClick={handleAdd}>추가</AddButton>
    </Card>
  );
}
