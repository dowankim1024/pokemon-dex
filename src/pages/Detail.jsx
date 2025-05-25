import { useNavigate, useSearchParams } from "react-router-dom";
import MOCK_DATA from "../data/mock";
import styled from "styled-components";

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

export default function Detail() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const pokemon = MOCK_DATA.find((p) => p.id === Number(id));

  if (!pokemon) return <p>존재하지 않는 포켓몬입니다.</p>;

  return (
    <Wrapper>
      <Img src={pokemon.img_url} alt={pokemon.korean_name} />
      <h2>{pokemon.korean_name}</h2>
      <p>타입: {pokemon.types.join(", ")}</p>
      <p>{pokemon.description}</p>
      <BackButton onClick={() => navigate(-1)}>← 뒤로가기</BackButton>
    </Wrapper>
  );
}
