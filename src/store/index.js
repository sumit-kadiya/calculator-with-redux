import { configureStore } from "@reduxjs/toolkit";
import calcSlice from "./calc";

const store = configureStore({
  reducer: calcSlice.reducer,
});

export default store;
