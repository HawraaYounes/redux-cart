import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { showCart: false, items: [], totalQuantity: 0 };

const cartSlice = createSlice({
  name: "Cart",
  initialState: initialCartState,
  reducers: {
    add(state, action) {
      const newItem = action.payload;
      const exisitingItem = state.items.find((item) => item.id === newItem.id);
      if (!exisitingItem) {
        state.items.push({
          itemId: newItem.id,
          title: newItem.title,
          price: newItem.price,
          totalPrice: newItem.totalPrice,
          quantity: 1,
        });
      } else {
        exisitingItem.quantity++;
        exisitingItem.totalPrice = exisitingItem.totalPrice + newItem.price;
      }
    },
    toggle(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
