import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CartHeader from './CartHeader';
import CartItem from './CartItem';
import CartOrder from './CartOrder';
import CartBox from './CartBox';
import AddProduct from './AddProduct';
import axios from 'axios';
import { API, TOKEN_KEY } from '../../config';

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [totalPrice, setTotalPrice] = useState('');

  const getCart = () =>
    axios
      // .get('data/CartData.json')
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

  return (
    <CartWrapper>
      <CartContainer>
        <Ad />
        <CartHeader></CartHeader>
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
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const CartContainer = styled.div`
  ${({ theme }) => theme.CenterAlignment};
  flex-wrap: wrap;
  width: 400px;
  padding: 0 30px 6px 30px;
  background-color: white;
  border-left: 1px solid white;
`;

const Ad = styled.div`
  postion: absolute;
  width: 400px;
  height: 20px;
  padding: 6px 30px;
  margin: 0 -30px;
  background-color: #f15b41;
`;

export default Cart;
