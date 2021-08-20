import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';

const CommunitySlide = () => {
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
  };

  const [slide, setSlide] = useState({});

  useEffect(() => {
    axios
      .get('/data/CommunitySlideData.json')
      .then(res => {
        setSlide({ ...slide, ...res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <CommunitySlideContainer>
      <FeatureTitle>#CASETiFANYCommunity</FeatureTitle>
      <SlideBox>
        <Slider {...settings}>
          {slide.communitySlide &&
            slide.communitySlide.map((e, i) => {
              return (
                <div key={i}>
                  <Image picture={e.url} />
                  <p>{e.name}</p>
                </div>
              );
            })}
        </Slider>
      </SlideBox>
    </CommunitySlideContainer>
  );
};

const CommunitySlideContainer = styled.div`
  ${({ theme }) => theme.CenterAlignment};
  flex-wrap: wrap;
  margin-top: 150px;
`;

const SlideBox = styled.div`
  margin-top: 40px;
  width: 100%;
  p {
    margin-top: 10px;
    margin-left: 105px;
    font-size: 18px;
  }
`;

const FeatureTitle = styled.h1`
  font-size: 30px;
  font-family: 'Hammersmith One';
`;

const Image = styled.div`
  margin-left: 10px;
  height: 285px;
  width: 285px;
  background: center/100% url(${props => props.picture});
`;

export default CommunitySlide;
