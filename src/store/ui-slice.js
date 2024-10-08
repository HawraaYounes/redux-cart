import { createSlice } from "@reduxjs/toolkit";

const initialUiState = { showCart: false,notification: null };

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    toggle(state) {
      state.showCart = !state.showCart;
    },
    sendNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    clearNotification(state) {
      state.notification = null; // Clear notification
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
