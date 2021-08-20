import React from 'react';
import styled from 'styled-components';

const CartItem = ({ cartData, deleteItem, minusBtn, plusBtn, id }) => {
  return (
    <div>
      {cartData &&
        cartData.map((e, i) => {
          return (
            <CartItemContainer>
              <ItemImage picture={cartData[i] && cartData[i].main_image} />
              <ItemDescription>
                <h6>{cartData[i] && cartData[i].name}</h6>
                <p>색상: {cartData[i] && cartData[i].color}</p>
                <p>사이즈: {cartData[i] && cartData[i].size}</p>
              </ItemDescription>
              <DeleteBtn id={id} onClick={() => deleteItem(i)} />
              <QuantityBtn>
                <MinusBtn>
                  <p onClick={plusBtn}>-</p>
                </MinusBtn>
                <QuantityControl>
                  <p>{cartData[i].quantity}</p>
                </QuantityControl>
                <PlusBtn>
                  <p onClick={minusBtn}>+</p>
                </PlusBtn>
              </QuantityBtn>
              <ItemCost>₩ {cartData[i] && cartData[i].total_price}</ItemCost>
            </CartItemContainer>
          );
        })}
    </div>
  );
};

const CartItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 30px 0 10px 0;
`;

const ItemImage = styled.div`
  width: 35.3%;
  height: 120px;
  background: center/100% url(${picture => picture});
  border-right: 1px solid #d9d9d9;
  border-radius: 3px;
`;

const ItemDescription = styled.div`
  padding-top: 8px;
  padding-left: 15px;
  width: 62.3%;
  height: 84px;

  h6 {
    font-size: 15px;
  }

  p {
    padding-top: 4px;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.45);
    font-weight: 600;
  }
`;

const DeleteBtn = styled.div`
  margin-top: 8px;
  width: 8px;
  height: 8px;
  background: url('/images/close.png');
  background-size: cover;
  cursor: pointer;
`;

const QuantityBtn = styled.div`
  ${({ theme }) => theme.centerAlignment};
  margin-top: -45px;
  margin-left: 135px;
  font-size: 15px;
`;

const MinusBtn = styled.div`
  ${({ theme }) => theme.centerAlignment};
  width: 32px;
  height: 34px;
  border: 1.5px solid rgba(0, 0, 40, 0.15);
  border-right: 1px solid transparent;
  cursor: pointer;
`;

const QuantityControl = styled.div`
  ${({ theme }) => theme.centerAlignment};
  width: 34px;
  height: 34px;
  border-top: 1.5px solid rgba(0, 0, 40, 0.15);
  border-bottom: 1.5px solid rgba(0, 0, 40, 0.15);

  p {
    padding-top: 2px;
  }
`;

const PlusBtn = styled.div`
  ${({ theme }) => theme.centerAlignment};
  width: 32px;
  height: 34px;
  border: 1.5px solid rgba(0, 0, 40, 0.15);
  border-left: 1px solid transparent;
  cursor: pointer;
`;

const ItemCost = styled.p`
  margin-top: -32px;
  font-size: 15px;
`;

export default CartItem;
