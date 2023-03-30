import { createSlice } from "@reduxjs/toolkit";
import { services } from "../../data/data";

const servicesSlice = createSlice({
  name: "services",
  initialState: services,
  reducers: {
    addService: (state, action) => {},
  },
});

export const { addService } = servicesSlice.actions;
export const servicesReducer = servicesSlice.reducer;
