import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { uiActions } from "./store/ui-slice";

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.cart.showCart);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.sendNotification({
          status: "pending",
          title: "Sending..",
          message: "Sending Cart Data.",
        })
      );
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
      const responseData = response.json();

      dispatch(
        uiActions.sendNotification({
          status: "success",
          title: "Success",
          message: "Data Sent Succesfully!",
        })
      );
    };
    sendCartData().catch((error) => {
      dispatch(
        uiActions.sendNotification({
          status: "pending",
          title: "Sending..",
          message: "Sending Cart Data.",
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
