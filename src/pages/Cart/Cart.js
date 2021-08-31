import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CartHeader from './CartHeader';
import CartItem from './CartItem';
import CartOrder from './CartOrder';
import CartBox from './CartBox';
import AddProduct from './AddProduct';
import axios from 'axios';
import { API, TOKEN_KEY } from '../../config';

const Cart = cartModalOff => {
  const [cartData, setCartData] = useState([]);
  const [totalPrice, setTotalPrice] = useState('');

  const getCart = () =>
    axios
      .get(`${API.CART}`, {
        headers: {
          Authorization: TOKEN_KEY,
        },
      })
      .then(res => {
        setCartData(res.data.results);
        setTotalPrice(res.data.final_total_price);
      })
      .catch(error => {
        console.log(error);
      });

  useEffect(() => {
    getCart();
    // console.log(cartData[0] && cartData[0].main_image);
  }, []);

  const deleteItem = e => {
    axios
      .delete(`${API.CART}/carts/${cartData[e].cart_id}`, {
        headers: {
          Authorization: TOKEN_KEY,
        },
      })
      .then(() => {
        getCart();
      });
  };
  console.log(111111, cartModalOff);
  return (
    <CartWrapper>
      <CartContainer>
        <Ad />
        <CartHeader />
        <CartItem cartData={cartData} deleteItem={deleteItem} />
        <CartOrder totalPrice={totalPrice} />
        <CartBox />
        <AddProduct></AddProduct>
      </CartContainer>
    </CartWrapper>
  );
};

const CartWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 500;
`;

const CartContainer = styled.div`
  ${({ theme }) => theme.CenterAlignment};
  flex-wrap: wrap;
  width: 475px;
  height: 1500px;
  padding: 0 30px 6px 30px;
  background-color: white;
  border-left: 3px solid white;
`;

const Ad = styled.div`
  postion: absolute;
  width: 
  height: 0px;
  padding: 6px 30px;
  margin: 0 -30px;
  background-color: #f15b41;
`;

export default Cart;
