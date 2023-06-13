const { createSlice } = require("@reduxjs/toolkit");

const INITIAL_STATE = {
  movieFavorites: [],
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: INITIAL_STATE,
  reducers: {
    toggleMovieFavorites: (state, action) => {
      let index = state.movieFavorites.findIndex(
        (m) => m.id === action.payload.id
      );
      if (index === -1) {
        // add  new movie
        state.movieFavorites.push(action.payload);
      } else {
        state.movieFavorites.splice(index, 1);
      }
    },
  },
});

export const { toggleMovieFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;
