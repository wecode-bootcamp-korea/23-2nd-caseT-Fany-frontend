import React from 'react';
import styled from 'styled-components';

const CartHeader = cartModalOff => {
  return (
    <CartHeaderContainer>
      <HeaderIcon>
        <RightArrow onClick={() => console.log()} />
        <ShoppingCart />
      </HeaderIcon>
      <p>Congrats! You get free standard shipping!</p>
      <span></span>
    </CartHeaderContainer>
  );
};

const CartHeaderContainer = styled.div`
  ${({ theme }) => theme.centerAlignment};
  flex-wrap: wrap;
  padding-top: 30px;
  width: 100%;

  p {
    margin: 15px 0 9px 0;
    font-size: 12px;
  }

  span {
    width: 100%;
    height: 6px;
    background-color: #ea594e;
    border-radius: 30px;
    margin-top: 4px;
  }
`;

const HeaderIcon = styled.div`
  display: flex;
  width: 100%;
`;

const RightArrow = styled.div`
  width: 24px;
  height: 24px;
  background: center/100% url('/images/right-arrow.png');
`;

const ShoppingCart = styled.div`
  width: 24px;
  height: 24px;
  margin-left: 40%;
  background: center/100% url('/images/shopping-cart.png');
`;

export default CartHeader;
