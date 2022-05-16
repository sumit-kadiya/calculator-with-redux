import { createSlice } from "@reduxjs/toolkit";

const calcSlice = createSlice({
  name: "calculator",
  initialState: {
    input: "",
  },
  reducers: {
    display(state, action) {
      state.input = state.input + action.payload;
    },
    calculate(state) {
      state.input = eval(state.input);
    },
    clear(state) {
      state.input = "";
    },
    backSpace(state) {
      state.input = state.input.slice(0, -1);
    },
    square(state) {
      state.input = Math.pow(state.input, 2);
    },
    squareRoot(state) {
      state.input = Math.sqrt(state.input);
    },
    cube(state) {
      state.input = Math.pow(state.input, 3);
    },
    cubeRoot(state) {
      state.input = Math.cbrt(state.input);
    },
  },
});

export const calcActions = calcSlice.actions;

export default calcSlice;
