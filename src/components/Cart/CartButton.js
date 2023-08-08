import classes from './CartButton.module.css';
import { cartActions } from '../../store/cartReducer';
import { useDispatch, useSelector } from 'react-redux'


const CartButton = () => {

  const counter = useSelector(state => state.cart.count);
  const dispatch = useDispatch();


  const onShowCartHander = () => {
    dispatch(cartActions.visiblity())
  }

  return (
    <>
      <button
        onClick={onShowCartHander}
        className={classes.button}>
        <span>My Cart</span>
        <span className={classes.badge}>{counter}</span>
      </button>
    </>
  );
};

export default CartButton;
