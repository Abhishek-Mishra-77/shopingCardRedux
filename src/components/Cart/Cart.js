import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = () => {

  const products = useSelector(state => state.cart.products)

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {products.map((product) => (
          <CartItem
            key={product.id}
            id={product.id}
            price={product.price}
            title={product.title}
            quantity={product.quantity}
            totalPrice={product.totalPrice}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
