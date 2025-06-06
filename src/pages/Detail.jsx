import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon, removePokemon } from "../redux/selectedSlice";
import MOCK_DATA from "../data/mock";
import styled from "styled-components";
import { toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";

const Wrapper = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  width: 120px;
  height: 120px;
`;

const BackButton = styled.button`
  margin-top: 2rem;
  background: #aaa;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
`;

const ActionButton = styled.button`
  margin-top: 1rem;
  background: #4caf50;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
`;

export default function Detail() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const pokemon = MOCK_DATA.find((p) => p.id === Number(id));
  const dispatch = useDispatch();
  const selectedPokemons = useSelector((state) => state.selected.pokemons);

  const isSelected = selectedPokemons.some((p) => p.id === pokemon?.id);

  if (!pokemon) return <p>존재하지 않는 포켓몬입니다.</p>;

  const handleToggle = () => {
    if (isSelected) {
      dispatch(removePokemon(pokemon.id));
      toast.info(`${pokemon.korean_name}을(를) 덱에서 제거했습니다.`);
    } else {
      if (selectedPokemons.length >= 6) {
        toast.warn("덱에는 최대 6마리만 담을 수 있습니다.");
        return;
      }
      dispatch(addPokemon(pokemon));
      toast.success(`${pokemon.korean_name}을(를) 덱에 추가했습니다!`);
    }
  };

  return (
    <Wrapper>
      <Img src={pokemon.img_url} alt={pokemon.korean_name} />
      <h2>{pokemon.korean_name}</h2>
      <p>타입: {pokemon.types.join(", ")}</p>
      <p>{pokemon.description}</p>
      <ActionButton onClick={handleToggle}>
        {isSelected ? "삭제" : "추가"}
      </ActionButton>
      <BackButton onClick={() => navigate(-1)}>← 뒤로가기</BackButton>
    </Wrapper>
  );
}
