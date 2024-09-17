import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  // Add the Redux DevTools Extension if it's available
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;