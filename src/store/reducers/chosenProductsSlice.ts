import { createSlice } from "@reduxjs/toolkit";

const chosenProductsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    addChosenProduct: (state, action) => {
      return state = action.payload.products;
    },
  },
});

export const { addChosenProduct } = chosenProductsSlice.actions;
export const chosenProductReducers = chosenProductsSlice.reducer;
