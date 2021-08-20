import React from 'react';
import styled, { css } from 'styled-components';

const ProductList = () => {
  return (
    <CartContainer>
      <Ad />
      <CartHeader>
        <HeaderIcon>
          <RightArrow />
          <ShoppingCart />
        </HeaderIcon>
        <p>Congrats! You get free standard shipping!</p>
        <span></span>
      </CartHeader>
      <CartItem>
        <ItemImage />
        <ItemDescription>
          <h6>iPhone 12 Pro Max</h6>
          <p>색상: Oat Milk</p>
        </ItemDescription>
        <DeleteBtn></DeleteBtn>
        <QuantityBtn>
          <MinusBtn>
            <p>-</p>
          </MinusBtn>
          <QuantityControl>
            <p>0</p>
          </QuantityControl>
          <PlusBtn>
            <p>+</p>
          </PlusBtn>
        </QuantityBtn>
        <ItemCost>₩ 36000</ItemCost>
      </CartItem>
      <CartItem>
        <ItemImage />
        <ItemDescription>
          <h6>iPhone 12 Pro Max</h6>
          <p>색상: Oat Milk</p>
        </ItemDescription>
        <DeleteBtn></DeleteBtn>
        <QuantityBtn>
          <MinusBtn>
            <p>-</p>
          </MinusBtn>
          <QuantityControl>
            <p>0</p>
          </QuantityControl>
          <PlusBtn>
            <p>+</p>
          </PlusBtn>
        </QuantityBtn>
        <ItemCost>₩ 36000</ItemCost>
      </CartItem>{' '}
      <CartItem>
        <ItemImage />
        <ItemDescription>
          <h6>iPhone 12 Pro Max</h6>
          <p>색상: Oat Milk</p>
        </ItemDescription>
        <DeleteBtn></DeleteBtn>
        <QuantityBtn>
          <MinusBtn>
            <p>-</p>
          </MinusBtn>
          <QuantityControl>
            <p>0</p>
          </QuantityControl>
          <PlusBtn>
            <p>+</p>
          </PlusBtn>
        </QuantityBtn>
        <ItemCost>₩ 36000</ItemCost>
      </CartItem>
      <CartOrder>
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
      </CartOrder>
      <CartBox>
        <p>전 세계 무료 배송</p>
        <CartBtn>CHECK OUT</CartBtn>
      </CartBox>
      <AddProduct>
        <BundleItem>
          <BundleItemImage />
          <BundleItemDescription>
            <BundleItemName>iPhone 12 Pro Max Screen Protector</BundleItemName>
            <BundleIteamAdd>
              <p>ADD+</p>
              <BundleIteamCost>₩25000</BundleIteamCost>
            </BundleIteamAdd>
          </BundleItemDescription>
        </BundleItem>
        <BundleItem>
          <BundleItemImage />
          <BundleItemDescription>
            <BundleItemName>iPhone 12 Pro Max Screen Protector</BundleItemName>
            <BundleIteamAdd>
              <p>ADD+</p>
              <BundleIteamCost>₩25000</BundleIteamCost>
            </BundleIteamAdd>
          </BundleItemDescription>
        </BundleItem>
        <BundleItem>
          <BundleItemImage />
          <BundleItemDescription>
            <BundleItemName>iPhone 12 Pro Max Screen Protector</BundleItemName>
            <BundleIteamAdd>
              <p>ADD+</p>
              <BundleIteamCost>₩25000</BundleIteamCost>
            </BundleIteamAdd>
          </BundleItemDescription>
        </BundleItem>
      </AddProduct>
    </CartContainer>
  );
};

const Center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CartContainer = styled.div`
  ${Center}
  flex-wrap: wrap;
  width: 400px;
  padding: 0 30px 6px 30px;
`;

const Ad = styled.div`
  postion: absolute;
  width: 400px;
  height: 20px;
  padding: 6px 30px;
  margin: 0 -30px;
  background-color: #f15b41;
`;

const CartHeader = styled.div`
  ${Center}
  flex-wrap: wrap;
  padding-top: 30px;
  width: 400px;
  p {
    margin: 15px 0 9px 0;
    font-size: 12px;
  }

  span {
    display: block;
    margin: 0 auto;
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

const CartItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 30px 0 10px 0;
`;

const ItemImage = styled.div`
  width: 35.3%;
  height: 120px;
  background: center/100% url('/images/shirt10.png');
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
  ${Center}
  margin-top: -45px;
  margin-left: 135px;
  font-size: 15px;
`;

const MinusBtn = styled.div`
  ${Center}
  width: 32px;
  height: 34px;
  border: 1.5px solid rgba(0, 0, 40, 0.15);
  border-right: 1px solid transparent;
  cursor: pointer;
`;

const QuantityControl = styled.div`
  ${Center}
  width: 34px;
  height: 34px;
  border-top: 1.5px solid rgba(0, 0, 40, 0.15);
  border-bottom: 1.5px solid rgba(0, 0, 40, 0.15);
  p {
    padding-top: 2px;
  }
`;

const PlusBtn = styled.div`
  ${Center}
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

const CartOrder = styled.div`
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

const CartBox = styled.div`
  ${Center}
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

const AddProduct = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

const BundleItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  margin-bottom: 10px;
  width: 100%;
  height: 87px;
  background-color: rgba(0, 0, 0, 0.03);
`;

const BundleItemImage = styled.div`
  margin-right: 15px;
  width: 72px;
  height: 72px;
  background: center/120% url('/images/shirt10.png');
`;

const BundleItemDescription = styled.div`
  margin-top: -30px;
  display: flex;
  font-size: 12px;
  p {
  }
`;

const BundleItemName = styled.p`
  font-weight: 500;
`;

const BundleIteamAdd = styled.div`
  display: flex;
  justify-content: flex-end;
  p {
    font-size: 14px;
    font-weight: 550;
  }
`;

const BundleIteamCost = styled.div`
  position: absolute;
  margin-top: 40px;
  color: #f15b41;
  font-size: 13px;
`;

export default ProductList;
