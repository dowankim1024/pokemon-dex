// redux/selectedSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemons: [],
};

const selectedSlice = createSlice({
  name: "selected",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      if (state.pokemons.find((p) => p.id === action.payload.id)) return;
      if (state.pokemons.length >= 6) return;
      state.pokemons.push(action.payload);
    },
    removePokemon: (state, action) => {
      state.pokemons = state.pokemons.filter((p) => p.id !== action.payload);
    },
  },
});

export const { addPokemon, removePokemon } = selectedSlice.actions;
export default selectedSlice.reducer;
