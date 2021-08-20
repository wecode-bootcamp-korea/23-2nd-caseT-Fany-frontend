import React from 'react';
import styled from 'styled-components';

const AddProduct = () => {
  return (
    <AddProductContainer>
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
    </AddProductContainer>
  );
};

const AddProductContainer = styled.div`
  margin-bottom: 10px;
`;

const BundleItem = styled.div`
  ${({ theme }) => theme.centerAlignment};
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

export default AddProduct;
