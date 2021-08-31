import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ImageContainer from './ImageContainer';
import DetailContainer from './DetailContainer';
import FeatureContainer from './FeatureContainer';
import Cart from '../Cart/Cart';
import Review from '../Review/Review';
import { API, BASE_URL, TOKEN_KEY } from '../../config';
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
  const [showCart, setShowCart] = useState(false);
  const [colorId, setColorId] = useState(1);
  const [sizeId, setSizeId] = useState(0);
  const [colorLeach, setColorLeach] = useState([
    {
      size_id: 1,
      size: 'S',
      color_id: 1,
      color: 'Red ',
      stock: 6,
      sales: 10,
    },
    {
      size_id: 1,
      size: 'S',
      color_id: 2,
      color: 'DeepPink',
      stock: 7,
      sales: 10,
    },
    {
      size_id: 1,
      size: 'S',
      color_id: 3,
      color: 'Lightpink',
      stock: 6,
      sales: 10,
    },
  ]);

  const changeImage = e => {
    let newData = { ...productData };
    newData.main_image = mainImage.slideImage[e].cloth_color_image;
    setProductData(newData);
    setText('');
  };

  const changeMainImage = i => {
    let newData = { ...productData };
    newData.main_image = productData.cloth_color_image[i];
    setProductData(newData);
    setColorId(
      productData.product_option && productData.product_option[i].color_id
    );
  };

  useEffect(() => {
    console.log(colorId);
    console.log(sizeId);
  }, [colorId, sizeId]);

  const submitCart = () => {
    // let productList = [];
    // productList.push({ });
    axios
      .post(
        `${BASE_URL}/product_id/${props.match.params.id}/custom`,
        {
          size_id: sizeId,
          color_id: colorId,
        },
        {
          headers: {
            Authorization: TOKEN_KEY,
          },
        }
      )
      .then(res => {
        setShowCart(!showCart);
      })
      .catch(error => {
        console.log(error);
      });
  };

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
  }, [text, coordinate, fontStyle, fontColor]);

  const colorFilter = () => {
    const filterList =
      productData.product_option &&
      productData.product_option.filter(
        product => product.color_id === colorId
      );
    setColorLeach(filterList);
  };

  useEffect(() => {
    colorFilter();
  }, [colorId]);

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
      // .get('/data/data.json')
      .get(`${API.PRODUCTLIST}/${props.match.params.id}`)

      .then(res => {
        setProductData({ ...productData, ...res.data.MESSAGE });
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
            mainImage={mainImage}
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
            submitCart={submitCart}
            sizeId={sizeId}
            setSizeId={setSizeId}
            setColorId={setColorId}
            colorLeach={colorLeach}
            setColorLeach={setColorLeach}
          />
        </ProductBox>
        <FeatureBox>
          <FeatureContainer />
        </FeatureBox>
        <Review />
        {showCart && <Cart />}
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
  position: relative;
  top: 10px;
`;

const ProductBox = styled.div`
  width: 1000px;
  display: flex;
`;

const FeatureBox = styled.div`
  width: 1200px;
`;

export default ProductDetail;
