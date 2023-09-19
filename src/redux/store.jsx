import { configureStore } from "@reduxjs/toolkit";


import amazonReducer from "../redux/cartSlice";


export const store = configureStore({
  reducer:{
    amazonReducer 
  },
});