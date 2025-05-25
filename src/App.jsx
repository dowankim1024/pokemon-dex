import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import Detail from "./pages/Detail";
import { PokemonProvider } from "./contexts/PokemonContext.jsx"; // 이 경로는 context 위치에 맞게 조정

function App() {
  return (
    <PokemonProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dex" element={<Dex />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </PokemonProvider>
  );
}

export default App;
