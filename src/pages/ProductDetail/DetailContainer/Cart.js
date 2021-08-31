import React from 'react';
import styled from 'styled-components';

const CartContainer = ({ submitCart }) => {
  return (
    <Cart>
      <CartBtn onClick={submitCart}>카트에 담기</CartBtn>
      <p>전 세계 무료 배송</p>
    </Cart>
  );
};

const Cart = styled.div`
  ${({ theme }) => theme.centerAlignment};
  flex-wrap: wrap;
  margin-top: 15px;
  p {
    margin-top: 10px;
  }
`;
const CartBtn = styled.button`
  margin-top: 5px;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 98%;
  height: 55px;
  color: white;
  background-color: black;
  border: 1px solid transparent;
  border-radius: 3px;
  font-weight: 600;
  font-size: 14px;
  line-height: 8px;
  letter-spacing: 3px;
  cursor: pointer;
`;

export default CartContainer;
