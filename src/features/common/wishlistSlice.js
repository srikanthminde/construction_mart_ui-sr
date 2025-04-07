
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishlistItems: JSON.parse(localStorage.getItem("wishlistItems"))||[],
}
export const WishilistSlice = createSlice({
    name:"WishlistSlice",
    initialState,
    reducers:{
        addToCart: (state, action) => {
            action.payload.count = 1;
            state.cartItems.push(action.payload);
            localStorage.setItem("wishlistItems",JSON.stringify(state.wishlistItems))

          },
        whishlistSaved:(state,action)=>{
          var itemExists = state.wishlistItems.find(item => item === action.payload)
          if(!itemExists){
            state.wishlistItems.push({...action.payload})
            localStorage.setItem("wishlistItems",JSON.stringify(state.wishlistItems))

          } 
        },
        removeFromSaved:(state,action)=>{
            var x  = state.wishlistItems.filter(item => item.id !== action.payload);
            state.wishlistItems = x;
            localStorage.setItem("wishlistItems",JSON.stringify(state.wishlistItems))

        },
        setCartItems:(state,action)=>{
          state.wishlistItems=action.payload;
          localStorage.setItem("wishlist",JSON.stringify(state.wishlistItems))
              }

    }
})
export const {whishlistSaved, removeFromSaved,addToCart} = WishilistSlice.actions;
const wishlistReducer = WishilistSlice.reducer;
export default wishlistReducer;