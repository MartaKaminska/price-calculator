import { configureStore } from "@reduxjs/toolkit";
import {
  addChosenProduct,
  addChosenYear,
  addService,
  addYear,
  chosenProductReducers,
  chosenYearReducers,
  servicesReducer,
  yearsReducers,
} from "./reducers";

const store = configureStore({
  reducer: {
    services: servicesReducer,
    years: yearsReducers,
    chosenProduct: chosenProductReducers,
    chosenYear: chosenYearReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export { store, addService, addYear, addChosenProduct, addChosenYear };
