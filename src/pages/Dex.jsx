import { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../data/mock";

export default function Dex() {
  const [selected, setSelected] = useState([]);

  const handleAdd = (pokemon) => {
    if (selected.find((p) => p.id === pokemon.id)) {
      alert("이미 선택된 포켓몬입니다.");
      return;
    }
    if (selected.length >= 6) {
      alert("더 이상 선택할 수 없습니다.");
      return;
    }
    setSelected([...selected, pokemon]);
  };

  const handleRemove = (id) => {
    setSelected(selected.filter((p) => p.id !== id));
  };

  return (
    <div>
      <Dashboard selected={selected} onRemove={handleRemove} />
      <PokemonList data={MOCK_DATA} onAdd={handleAdd} />
    </div>
  );
}