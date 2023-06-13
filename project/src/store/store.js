import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./Slices/favorites";

export default configureStore({
  reducer: {
    favorites: favoriteSlice,
  },
});
