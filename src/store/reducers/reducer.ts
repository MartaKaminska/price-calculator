import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/products";

const databaseSlice = createSlice({
  name: "products",
  initialState: products,
  reducers: {
    addYear: (state, action) => {
      const { id, year } = action.payload;
    },
    addProduct: (state, action) => {
      const { id, product } = action.payload;
    },
  },
});

export const { addProduct, addYear } = databaseSlice.actions;
export default databaseSlice;
