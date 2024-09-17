import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userReducer from "./userRedux";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer
  },
  // Add the Redux DevTools Extension if it's available
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;