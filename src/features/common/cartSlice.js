import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems:    JSON.parse(localStorage.getItem("cartItems"))||[],
};
export const cartSlice = createSlice({
  name: "Cart Slice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      action.payload.count = 1;
      state.cartItems.push(action.payload);
      localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
    },
    incItemCount: (state, action) => {
      // console.log(action)
      state.cartItems.map((item) => {
        if (item.id === action.payload) {
          item.count++;
        }
        return item;
      });
      localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
    },
    decItemCount: (state, action) => {
      // console.log(action)
      state.cartItems.map((item) => {
        if (item.id === action.payload) {
          item.count--;
        }
        return item;
      });
      localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
    },
    clearCart: (state) => {
      state.cartItems =localStorage.setItem("cartItems",JSON.stringify(state.cartItems))|| [];
    },
    removeFromCart: (state, action) => {
      var x = state.cartItems.filter((item) => item.id !== action.payload);
      // console.log(x)
      state.cartItems = x;
      localStorage.setItem("cartItems",JSON.stringify(state.cartItems))

    },
 setCartItems:(state,action)=>{
state.cartItems=action.payload;
localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
    }
  },
});
const cartReducer = cartSlice.reducer;
export default cartReducer;
export const {
  addToCart,
  incItemCount,
  decItemCount,
  removeFromCart,
  clearCart,
  setCartItems
} = cartSlice.actions;
