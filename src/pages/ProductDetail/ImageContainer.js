import React from 'react';
import styled from 'styled-components';
import ImageSlide from './ImageContainer/ImageSlide';

const ImageContainer = ({ canvas, productData, changeImage, mainImage }) => {
  return (
    <ImageBox>
      <Image picture={productData.main_image} ref={canvas}></Image>
      <ImageSlide
        changeImage={changeImage}
        productData={productData}
        mainImage={mainImage}
      />
    </ImageBox>
  );
};

const ImageBox = styled.div`
  ${({ theme }) => theme.CenterAlignment};
  flex-wrap: wrap;
  position: -webkit-sticky;
  position: sticky;
  top: 20px;
  flex: 0 0 58.33333%;
  max-width: 58.33333%;
  height: 715.672px; ;
`;

const Image = styled.canvas`
  width: 527.672px;
  height: 527.672px;
  overflow: hidden;
  background: no-repeat center/100% url('${({ picture }) => picture}');
`;

export default ImageContainer;
