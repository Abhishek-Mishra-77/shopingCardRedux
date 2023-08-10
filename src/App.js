import React, { Fragment, useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import Notifications from './components/UI/Notifications';
import { sendCartData } from './store/cartActions';
import { getCartData } from './store/cartActions';
import './App.css'

let isVisible = true;

function App() {

  const cartVisible = useSelector(state => state.visibility.visiblity)
  const notification = useSelector(state => state.visibility.notification)
  const cart = useSelector(state => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartData())
  }, [dispatch])


  useEffect(() => {

    if (isVisible) {
      isVisible = false;
      return;
    }
    dispatch(sendCartData(cart))
  }, [cart, dispatch]);




  return (
    <Fragment>
      {notification && <Notifications
        status={notification.status}
        title={notification.title}
        message={notification.message}
      />}
      <Layout>
        {cartVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
