import { configureStore } from "@reduxjs/toolkit";
import cartsReducer from "./cartsSlice";

const store = configureStore({
  reducer: {
    carts: cartsReducer,
  },
});

export default store;
