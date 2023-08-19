import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { CartSlice } from "./slices/CartSlice";

const rootReducer = combineReducers({
  cart: CartSlice.reducer,
  // Other reducers can be added here if you have more slices
});

export const store = configureStore({
  reducer: rootReducer,
});
