import { createSlice } from "@reduxjs/toolkit";
import { services } from "../../data/data";
import { addYear } from "./yearsSlice";

const servicesSlice = createSlice({
  name: "services",
  initialState: services,
  reducers: {
    addService: (state, action) => {},
  },
  extraReducers(builder) {
    builder.addCase(addYear, (state, action) => {
      state.forEach((service, index) => {
        service.price.push(action.payload.prices[index]);
      });
    });
  },
});

export const { addService } = servicesSlice.actions;
export const servicesReducer = servicesSlice.reducer;
