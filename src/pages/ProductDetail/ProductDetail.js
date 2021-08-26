import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ImageContainer from './ImageContainer';
import DetailContainer from './DetailContainer';
import FeatureContainer from './FeatureContainer';
import { API } from '../../config';
import axios from 'axios';

function ProductDetail(props) {
  const canvas = useRef();
  const [text, setText] = useState('');
  const [coordinate, setCoordinate] = useState('right');
  const [fontSize, setFontSize] = useState('20');
  const [fontStyle, setFontStyle] = useState('Permanent Marker');
  const [fontColor, setFontColor] = useState('#9370DB');
  const [inventory, setInventory] = useState('');
  const [cartState, setCartState] = useState(false);
  const [productData, setProductData] = useState({});
  const [mainImage, setMainImage] = useState({});

  const changeImage = e => {
    let newData = { ...productData };
    newData.main_image = mainImage.slideImage[e].cloth_color_image;
    setProductData(newData);
    setText('');
  };

  const changeMainImage = e => {
    let newData = { ...productData };
    newData.main_image = productData.cloth_color_image[e];
    setProductData(newData);
  };
  useEffect(() => {
    console.log(productData);
  });

  // Canvas
  let ctx = null; // => 유지되는값 , useRef

  useEffect(() => {
    // ctx -> getContext
  }, []);

  useEffect(() => {
    const canvasEle = canvas.current;
    canvasEle.width = canvasEle.clientWidth;
    canvasEle.height = canvasEle.clientHeight;
    ctx = canvasEle.getContext('2d');
  }, [text, coordinate, fontStyle, fontColor]);

  const writeText = (info, style = {}) => {
    const { text, x, y } = info;
    const {
      fontSize = 15,
      fontFamily = 'Arial',
      color = 'black',
      textAlign = 'left',
      textBaseline = 'top',
    } = style;
    ctx.beginPath();
    ctx.font = fontSize + 'px ' + fontFamily;
    ctx.textAlign = textAlign;
    ctx.textBaseline = textBaseline;
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
    ctx.stroke();
  };

  useEffect(() => {
    writeText(
      { text: text, ...COORDINATES[coordinate] },
      {
        textAlign: 'center',
        color: fontColor,
        fontSize: fontSize,
        fontFamily: fontStyle,
        fontWeight: 700,
      }
    );
    console.log(coordinate);
  }, [text, coordinate, fontStyle, fontColor]);

  useEffect(() => {
    axios
      .get('/data/ImageSlideData.json')
      .then(res => {
        setMainImage({ ...mainImage, ...res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${API.PRODUCTLIST}/${props.match.params.id}`)
      .then(res => {
        setProductData({ ...productData, ...res.data.MESSAGE });
        console.log(productData);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Container>
        <ProductBox>
          <ImageContainer
            productData={productData}
            canvas={canvas}
            changeImage={changeImage}
            cartState={cartState}
            setCartState={setCartState}
          />
          <DetailContainer
            productData={productData}
            text={text}
            setText={setText}
            setCoordinate={setCoordinate}
            setFontSize={setFontSize}
            setFontStyle={setFontStyle}
            setFontColor={setFontColor}
            setInventory={setInventory}
            changeMainImage={changeMainImage}
          />
        </ProductBox>
        <FeatureBox>
          <FeatureContainer />
        </FeatureBox>
      </Container>
    </>
  );
}

const COORDINATES = {
  left: { x: 200, y: 225 },
  center: { x: 265, y: 210 },
  right: { x: 320, y: 225 },
};

const Container = styled.div`
  ${({ theme }) => theme.centerAlignment};
  padding: 20px;
  flex-wrap: wrap;
`;

const ProductBox = styled.div`
  width: 1000px;
  display: flex;
`;

const FeatureBox = styled.div`
  width: 1200px;
  height: 1000px;
`;

export default ProductDetail;
