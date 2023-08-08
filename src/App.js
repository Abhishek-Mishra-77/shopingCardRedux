import React from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux'
import './App.css'

function App() {

  const cartVisible = useSelector(state => state.cart.cartVisible)

  return (
    <div className='App'>
      <Layout>
        {cartVisible && <Cart />}
        <Products />
      </Layout>
    </div>
  );
}

export default App;
