import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlide = ({ mainImage, changeImage }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
  };

  return (
    <SlideBox>
      <Slider {...settings}>
        {mainImage.slideImage &&
          mainImage.slideImage.map((e, i) => {
            return (
              <div key={i}>
                <Image
                  picture={
                    mainImage.slideImage &&
                    mainImage.slideImage[i].cloth_color_image
                  }
                  onClick={() => changeImage(i)}
                />
              </div>
            );
          })}
      </Slider>
    </SlideBox>
  );
};

const SlideBox = styled.div`
  width: 80%;
  height: 124px;
`;

const Image = styled.div`
  height: 114px;
  background: center/100% url(${picture => picture});
  &: hover {
    border-bottom: 3px solid rgba(142, 182, 149, 0.5);
    border-opacity: 0.75;
    opacity: 0.75;
    border-radius: 1px;
    cursor: pointer;
  }
`;

export default ImageSlide;
