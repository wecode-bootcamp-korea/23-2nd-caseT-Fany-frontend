import React, { useState } from 'react';
import styled from 'styled-components';
import CartContainer from './DetailContainer/Cart';
import Custom from './DetailContainer/Custom';
import CustomDropDown from './DetailContainer/CustomDropDown';

const DetailContainer = ({
  productData,
  setInventory,
  setCoordinate,
  setFontStyle,
  setFontColor,
  setFontSize,
  text,
  setText,
}) => {
  const [more, setMore] = useState('hidden');
  const [moreBtn, setMoreBtn] = useState('block');

  return (
    <DetailBox>
      <div>
        <DetailTitle>{productData.name}</DetailTitle>
        <DetailPrice>{productData.price}</DetailPrice>
        <DetailRate>
          {productData.avg_score === 5 && (
            <div>
              <Star>🌟</Star>
              <Star>🌟</Star>
              <Star>🌟</Star>
              <Star>🌟</Star>
              <Star>🌟</Star>
            </div>
          )}
        </DetailRate>
      </div>
      <OptionChoice>
        <OptionTilte>사이즈 선택:</OptionTilte>
        <CustomDropDown productData={productData} setInventory={setInventory} />
      </OptionChoice>
      <OptionChoice>
        <OptionTilte>색상 선택:</OptionTilte>
        {productData.cloth_color_image && productData.cloth_color_image[3] ? (
          <ProductColorS visibility={more}>
            {productData.cloth_color_image &&
              productData.cloth_color_image.map((e, i) => {
                return (
                  <ProductColorBox
                    picture={
                      productData.cloth_color_image &&
                      productData.cloth_color_image[i]
                    }
                    onClick={() => {}}
                  />
                );
              })}
          </ProductColorS>
        ) : (
          <ProductColorL visibility={more}>
            {productData.cloth_color_image &&
              productData.cloth_color_image.map((e, i) => {
                return (
                  <ProductColorBox
                    picture={
                      productData.cloth_color_image &&
                      productData.cloth_color_image[i]
                    }
                    onClick={() => {}}
                  />
                );
              })}
          </ProductColorL>
        )}
        {productData.cloth_color_image && productData.cloth_color_image[3] && (
          <MoreBtn
            onClick={() => {
              setMore('auto');
              setMoreBtn('none');
            }}
            visibilityBtn={moreBtn}
          >
            더 보기
          </MoreBtn>
        )}
      </OptionChoice>
      {productData.cloth_color_image &&
        productData.cloth_color_image.length > 3 &&
        productData.main_image &&
        productData.main_image.includes('custom0') && (
          <Custom
            setCoordinate={setCoordinate}
            setFontStyle={setFontStyle}
            setFontColor={setFontColor}
            setFontSize={setFontSize}
            setInventory={setInventory}
            text={text}
            setText={setText}
          />
        )}
      <CartContainer />
      {console.log(productData.main_image)}
    </DetailBox>
  );
};

const DetailBox = styled.div`
  flex: 0 0 41.66667%;
  max-width: 41.66667%;
  width: 900px;
  padding: 0 24px 0 8px;
`;

const DetailTitle = styled.div`
  display: flex;
  align-items: center;
  margin: 14px 0 4px 0;
  height: 38px;
  font-size: 32px;
  font-weight: 500;
  font-family: 'Hammersmith One';
`;

const DetailPrice = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0 8px 0;
  height: 22px;
  font-size: 22px;
  font-weight: 500;
  font-family: 'HelveticaNeue';
`;

const DetailRate = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 20px 0;
  height: 18px;
`;

const Star = styled.div`
  width: 17px;
  height: auto;
  color: rgb(212, 180, 0);
`;

const OptionChoice = styled.div`
  margin: 8px 0;
  background-color: white;
`;

const OptionTilte = styled.div`
  padding: 15px 3px 5px 3px;
  font-size: 15px;
  font-weight: 600;
`;

const ProductColorS = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
  margin-left: 3px;
  height: 310px;
  overflow: ${({ visibility }) => visibility};
`;

const ProductColorL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
  margin-left: 3px;
`;

const MoreBtn = styled.p`
  display: ${({ visibilityBtn }) => visibilityBtn};
  padding: 10px 0 0 5px;
  color: grey;
  font-weight: 600;
  cursor: pointer;
`;

const ProductColorBox = styled.div`
  margin: 0 3px 6px 3px;
  width: 31.3%;
  height: 150px;
  background: no-repeat center/100% url(${({ picture }) => picture});

  border-radius: 4px;
  border: 1px solid black;
  cursor: pointer;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
`;

export default DetailContainer;
