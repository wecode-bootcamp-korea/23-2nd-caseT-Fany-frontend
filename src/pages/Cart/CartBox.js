import React from 'react';
import styled from 'styled-components';

const CartOrder = () => {
  return (
    <CartBoxContainer>
      <p>전 세계 무료 배송</p>
      <CartBtn>CHECK OUT</CartBtn>
    </CartBoxContainer>
  );
};

const CartBoxContainer = styled.div`
  ${({ theme }) => theme.centerAlignment};
  flex-wrap: wrap;
  width: 100%;
  margin: 30px 0;

  p {
    margin: 10px 0;
    font-size: 14px;
  }
`;
const CartBtn = styled.button`
  width: 100%;
  height: 51px;
  color: white;
  background-color: black;
  border: 1px solid transparent;
  border-radius: 3px;
  font: 600 15px/1 HelveticaNeue;
  line-height: 8px;
  letter-spacing: 3px;
  cursor: pointer;
`;
export default CartOrder;
