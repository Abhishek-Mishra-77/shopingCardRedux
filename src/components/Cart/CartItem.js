import classes from './CartItem.module.css';
import { cartActions } from '../../store/cartReducer';
import { useDispatch } from 'react-redux'



const CartItem = (props) => {

  const dispatch = useDispatch();

  const onAddTocartHander = (id) => {
    dispatch(cartActions.addProductToCart(id))
  }

  const onRemoveToCartHandler = (props) => {
    dispatch(cartActions.removeProductToCart(props));
  }


  return (
    <li className={classes.item}>
      <header>
        <h3>{props.title}</h3>
        <div className={classes.price}>
          ${props.totalPrice}{' '}
          <span className={classes.itemprice}>(${props.price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{props.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => onRemoveToCartHandler(props.id)}>-</button>
          <button onClick={() => onAddTocartHander(props)}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
