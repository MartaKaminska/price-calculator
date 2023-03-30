import { configureStore } from "@reduxjs/toolkit";
import { servicesReducer, addService } from "./reducers/servicesSlice";
import { yearsReducers, addYear } from "./reducers/yearsSlice";

const store = configureStore({
  reducer: {
    services: servicesReducer,
    years: yearsReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export { store, addService, addYear };
