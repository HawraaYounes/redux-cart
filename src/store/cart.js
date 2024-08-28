import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const initialCartState = { showCart: false, items: [], totalQuantity: 0 };

const cartSlice = createSlice({
  name: "Cart",
  initialState: initialCartState,
  reducers: {
    add(state, action) {
      const newItem = action.payload;
      const exisitingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!exisitingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          totalPrice: newItem.price,
          quantity: 1,
        });
      } else {
        exisitingItem.quantity++;
        exisitingItem.totalPrice = exisitingItem.totalPrice + newItem.price;
      }
    },
    remove(state, action) {
      const id = action.payload;
      const exisitingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (exisitingItem.quantity === 1) {
        state.items.filter((item) => item.id !== id);
      } else {
        exisitingItem.quantity--;
        exisitingItem.totalPrice =
          exisitingItem.totalPrice - exisitingItem.price;
      }
    },
    toggle(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.sendNotification({
        status: "pending",
        title: "Sending..",
        message: "Sending Cart Data..",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-redux-5568d-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Sending Cart Data Failed!");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.sendNotification({
          status: "success",
          title: "Success",
          message: "Data Sent Succesfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.sendNotification({
          status: "error",
          title: "Error!",
          message: "Sending Cart Data failed!",
        })
      );
    }

    //const responseData = response.json();
  };
};

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
