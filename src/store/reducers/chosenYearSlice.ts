import { createSlice } from "@reduxjs/toolkit";

const chosenYearSlice = createSlice({
  name: "chosenYear",
  initialState: "",
  reducers: {
    addChosenYear: (state, action) => {
      return state = action.payload.state;
    },
  },
});

export const { addChosenYear } = chosenYearSlice.actions;
export const chosenYearReducers = chosenYearSlice.reducer;
