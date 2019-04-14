import React, { useState } from 'react';
import CartDetailsContext from './CartDetails.context';

const CartDetailsProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
    { id: 'p1', title: 'Harry Potter 3', price: 9.99 },
    { id: 'p1', title: 'Used plastic bottle', price: 7.99 },
    { id: 'p1', title: 'Half-dried plant', price: 5.99 }
  ]);

  const [currentCardDetail, setCurrentCardDetail] = useState({
    id: '',
    title: '',
    cant: '0',
    price: '0.0',
  });

  const [cart, setCart] = useState([]);

  const addToCard = () => {
    const carts = [...cart];
    carts.push(currentCardDetail);
    setCart(carts);
  };

  return (
    <CartDetailsContext.Provider value={{ cart, currentCardDetail, setCurrentCardDetail, addToCard, products, setProducts }}>
      {children}
    </CartDetailsContext.Provider>
  );
};

export default CartDetailsProvider;
