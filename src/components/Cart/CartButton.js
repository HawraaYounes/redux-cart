import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart';

const CartButton = (props) => {
  const items=useSelector((state)=>state.cart.items)
  const dispatch=useDispatch();

  const cartHandler=()=>{
    dispatch(cartActions.toggle())
  }
  return (
    <button className={classes.button} onClick={cartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{items.length}</span>
    </button>
  );
};

export default CartButton;
