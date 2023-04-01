import { createSlice, nanoid} from "@reduxjs/toolkit";
import { services } from "../../data";
import { addYear } from "../store";

const servicesSlice = createSlice({
  name: "services",
  initialState: services,
  reducers: {
    addService: (state, action) => {
      state.push({
        id: nanoid(),
        name: action.payload.product,
        price: action.payload.productPrices,
      });
    },
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
