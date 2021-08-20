import React from 'react';
import styled, { css } from 'styled-components';

const CartOrder = () => {
  return (
    <CartOrderContainer>
      <OrderText>
        <p>소계</p>
        <p>360000</p>
      </OrderText>
      <OrderText>
        <p>배송비</p>
        <p>FREE</p>
      </OrderText>
      <OrderLine />
      <OrderText>
        <p>Total</p>
        <p>360000</p>
      </OrderText>
    </CartOrderContainer>
  );
};

const CartOrderContainer = styled.div`
  padding-top: 15px;
  width: 100%;
`;

const OrderText = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 7px 0;
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.2px;
  p {
    height: 15px;
  }
`;

const OrderLine = styled.div`
  margin-bottom: 2px;
  width: 100%;
  border-top: 1px solid #d9d9d9; ;
`;

export default CartOrder;
