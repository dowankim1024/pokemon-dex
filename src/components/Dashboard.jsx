import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { removePokemon } from "../redux/selectedSlice";
import pokeballImg from "../assets/pokeball.png";

const Dash = styled.div`
  background: #f2f2f2;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const Slot = styled.div`
  width: 110px;
  min-height: 150px;
  position: relative;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: visible;
  padding: 0.5rem;
`;

const PokeballBackground = styled.div`
  background-image: url(${pokeballImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 60px;
  height: 60px;
  opacity: 0.3;
`;

const Img = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 0.25rem;
`;

const Type = styled.p`
  margin: 2px 0;
  font-size: 11px;
  color: #666;
`;

const RemoveButton = styled.button`
  margin-top: 4px;
  background: #ff4d4d;
  border: none;
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 10px;
`;

export default function Dashboard() {
  const selected = useSelector((state) => state.selected.pokemons); // Redux에서 선택된 포켓몬
  const dispatch = useDispatch();

  return (
    <Dash>
      {[...Array(6)].map((_, index) => {
        const pokemon = selected[index];
        return (
          <Slot key={index}>
            {pokemon ? (
              <>
                <Img src={pokemon.img_url} alt={pokemon.korean_name} />
                <p>{pokemon.korean_name}</p>
                <Type>{pokemon.types.join(", ")}</Type>
                <RemoveButton onClick={() => dispatch(removePokemon(pokemon.id))}>
                  삭제
                </RemoveButton>
              </>
            ) : (
              <PokeballBackground />
            )}
          </Slot>
        );
      })}
    </Dash>
  );
}