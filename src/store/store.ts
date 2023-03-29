import { configureStore } from "@reduxjs/toolkit";
import { products } from "../data/products";
import databaseSlice from "./reducers/reducer";

interface RootState {
    products: Products[];
  }
const initialState: RootState = { products };

export const store = configureStore({
  reducer: databaseSlice.reducer,
  preloadedState: initialState as any,
});
