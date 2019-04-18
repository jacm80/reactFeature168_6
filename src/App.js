/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import { View, Text } from 'react-native';

// import CartDetailsProvider from './features/context/cart/context/CartDetailsProvider';
import CartDetailsContext from './features/context/cart/context/CartDetails.context';
import AppNavigator from './navigator/AppNavigator';
// Create a Context
export const NumberContext = React.createContext(null);

const App = () => {
  const [products, setProducts] = useState([
    { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
    { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
    { id: 'p3', title: 'Used plastic bottle', price: 7.99 },
    { id: 'p4', title: 'Half-dried plant', price: 5.99 }
  ]);

  const [currentCartDetail, setCurrentCartDetail] = useState({
    id: '',
    title: '',
    cant: '0',
    price: '0.0',
    pid: ''
  });

  const [cart, setCart] = useState([]);

  const getCartCount = () => {
    const result = cart.reduce((count, item) => count + parseInt(item.cant, 10), 0);
    return (Number.isNaN(result)) ? 0 : result;
  };

  const getCartTotal = () => {
    const result = cart.reduce((total, item) => total + parseInt(item.cant, 10) * parseFloat(item.price), 0);
    return (Number.isNaN(result)) ? 0 : result;
  };

  return (
    <CartDetailsContext.Provider value={{
      cart,
      currentCartDetail,
      setCurrentCartDetail,
      setCart,
      products,
      setProducts,
      getCartCount,
      getCartTotal
    }}
    >
      <NumberContext.Provider value={42}>
        <AppNavigator />
        <DisplayContext />
      </NumberContext.Provider>
    </CartDetailsContext.Provider>
  );
};

const DisplayContext = () => (

  <NumberContext.Consumer>
    {value => (
      <View style={{ backgroundColor: 'black', padding: 10 }}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          {`Context Value: ${value}`}
        </Text>
      </View>
    )}
  </NumberContext.Consumer>
);


export default App;
