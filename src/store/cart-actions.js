import { cartActions } from "./cart";
import { uiActions } from "./ui-slice";

export const fetchCartData = (cart) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-redux-5568d-default-rtdb.firebaseio.com/cart.json",
        {
          method: "GET",
        }
      );
      if (!response.ok) {
        throw new Error("Fetching Data Failed!");
      }
      const data = await response.json();
      return data;
    };
    
    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart(cartData));
    } catch (error) {
      dispatch(
        uiActions.sendNotification({
          status: "error",
          title: "Error!",
          message: "Fetching Cart Data failed!",
        })
      );
    }
  };
};

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
