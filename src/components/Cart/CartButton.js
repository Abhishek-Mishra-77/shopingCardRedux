import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartReducer';

const CartButton = () => {

  const dispatch = useDispatch();

  const onCartHandler = () => {
    dispatch(cartActions.visiblity())
  }

  return (
    <>
      <button
        onClick={onCartHandler}
        className={classes.button}>
        <span>My Cart</span>
        <span className={classes.badge}>1</span>
      </button>
    </>
  );
};

export default CartButton;
