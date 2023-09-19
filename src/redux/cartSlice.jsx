import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productsNumber: 0,
};

export const amazonSlice = createSlice({
  name: "amazon",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push({...action.payload,  quantity: parseInt(action.payload.quantity)});
       
      } state.productsNumber =
        state.productsNumber + parseInt(action.payload.quantity);

    },
    quantityIncrement: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      item.quantity++;
      state.productsNumber =
        state.productsNumber + 1;
    },
    quantityDecrement: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item.quantity !== 0) {
        item.quantity--;
        state.productsNumber =
          state.productsNumber - 1;
      }
    },
  removeFromCart: (state, action) => {
     const item = state.products.find((item) => item.id === action.payload)
      state.productsNumber = state.productsNumber - item.quantity; 
      state.products = state.products.filter(
              (item) => item.id !== action.payload
            ); 
        },
  
  resetCart: (state) => {
   
    state.products = [];
    state.productsNumber = 0;
  },
}});

export const{addToCart, removeFromCart, resetCart, quantityIncrement, quantityDecrement} = amazonSlice.actions;
export default amazonSlice.reducer;
