import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';

const CartButton = (props) => {
  const dispatch=useDispatch();

  const cartHandler=()=>{
    dispatch(cartActions.toggle())
  }
  return (
    <button className={classes.button} onClick={cartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
