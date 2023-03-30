import { createSlice } from "@reduxjs/toolkit";
import { years } from "../../data/data";

const yearsSlice = createSlice({
  name: "years",
  initialState: years,
  reducers: {
    addYear: (state, action) => {
      state.push(action.payload.year);
    },
  },
});

export const { addYear } = yearsSlice.actions;
export const yearsReducers = yearsSlice.reducer;
