import React from 'react';
import styled from 'styled-components';

const AddProduct = () => {
  return (
    <AddProductContainer>
      <BundleItem>
        <BundleItemImage picture={'/images/shirt10.png'} />
        <BundleItemDescription>
          <BundleItemName>
            <h6>김훈태 스페셜 티셔츠</h6> <p>색상: Lime</p>
          </BundleItemName>

          <BundleIteamAdd>
            <p>ADD+</p>
            <BundleIteamCost>₩25000</BundleIteamCost>
          </BundleIteamAdd>
        </BundleItemDescription>
      </BundleItem>
      <BundleItem>
        <BundleItemImage picture={'/images/shirt3.png'} />
        <BundleItemDescription>
          <BundleItemName>
            <h6>한승휸 스페셜 티셔츠</h6> <p>색상: Palegreen</p>
          </BundleItemName>

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
  height: 95px;
  background-color: rgba(0, 0, 0, 0.03);
`;

const BundleItemImage = styled.div`
  margin-right: 15px;
  width: 20%;
  height: 72px;
  background: center/120% url(${({ picture }) => picture});
`;

const BundleItemDescription = styled.div`
  margin-top: -30px;
  width: 70%;
  display: flex;
  font-size: 12px;
`;

const BundleItemName = styled.p`
  margin-top: 10px;
  font-weight: 500;

  h6 {
    font-size: 15px;
  }

  p {
    padding-top: 5px;
    color: rgba(0, 0, 0, 0.45);
  }
`;

const BundleIteamAdd = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
  margin-left: 110px;
  width: 10%;

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
