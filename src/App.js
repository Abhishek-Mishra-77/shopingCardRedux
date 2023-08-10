import React, { Fragment, useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { visibilityActions } from './store/visibilityCart';
import Notifications from './components/UI/Notifications';
import './App.css'

let isVisible = true;

function App() {

  const cartVisible = useSelector(state => state.visibility.visiblity)
  const notification = useSelector(state => state.visibility.notification)
  const cart = useSelector(state => state.cart);

  const dispatch = useDispatch();


  useEffect(() => {
    const fetchProducts = async () => {

      if (isVisible) {
        isVisible = false;
        return;
      }

      dispatch(visibilityActions.showNotification({
        status: 'Pending',
        title: 'Sending',
        message: 'Sending cart data!'
      }))

      try {
        const response = await fetch('https://shopingcartredux-default-rtdb.firebaseio.com/cart.  ', {
          method: 'PUT',
          body: JSON.stringify(cart)
        })

        if (response.ok) {
          dispatch(visibilityActions.showNotification({
            status: 'success',
            title: 'Success',
            message: ' cart data Send Succesfully!'
          }))

        }
        else {
          const data = await response.json();
          let errorMessage = 'fetching fails!';
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }
          throw new Error(errorMessage);
        }
      }
      catch (error) {
        dispatch(visibilityActions.showNotification({
          status: 'error',
          title: 'Fail',
          message: ' cart data Send Fails!'
        }))
      }

    }
    fetchProducts()
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
