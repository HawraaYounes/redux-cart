import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { showCart: false, items: [] };

const cartSlice = createSlice({
  name: "Cart",
  initialState: initialCartState,
  reducers: {
    add(state,action) {
      state.items=[...state.items, action.payload]
    },
    toggle(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
