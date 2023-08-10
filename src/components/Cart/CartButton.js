import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux'
import { visibilityActions } from '../../store/visibilityCart';


const CartButton = () => {

  const counter = useSelector(state => state.cart.totalQuantity);
  const dispatch = useDispatch();


  const onShowCartHander = () => {
    dispatch(visibilityActions.Visiblity())
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
