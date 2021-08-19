import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { LOGIN_KEY } from '../RedirectPage/Redirect';
import Redirect from '../RedirectPage/Redirect';
import MainBottom from './MainBottom';
import VideoPanel from './VideoPanel';

const Main = () => {
  return (
    <div>
      <StyledSlider {...settings}>
        {SLIDE_IMAGE.map(({ id, url, title }) => {
          return (
            <div key={id}>
              <ImageContainer>
                <Image src={url} />
                <P>{title}</P>
                <Button>구매하기</Button>
              </ImageContainer>
            </div>
          );
        })}
      </StyledSlider>
      <div>
        <MainBottom />
      </div>
      <div>
        <VideoPanel />
      </div>
    </div>
  );
};
export default Main;

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }
  .slick-dots {
    bottom: 90px;
    left: 0px;
  }
  .slick-arrow {
    z-index: 10;
    width: 30px;
    height: 30px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
  }

  .slick-prev {
    left: 10px;
  }
  .slick-next {
    right: 10px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const P = styled.p`
  font-size: 30px;
  margin: 10px 0;
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  background-color: #ea594e;
  color: white;
  font-size: 15px;
  &:hover {
    cursor: pointer;
  }
`;

const Image = styled.img`
  height: 600px;
`;

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  cssEase: 'linear',
};

const SLIDE_IMAGE = [
  {
    id: 1,
    title: 'Teal T-shirt Promotion',
    url: './images/main1.jpg',
  },
  {
    id: 2,
    title: 'Black T-shirts Promotion',
    url: './images/main2.jpg',
  },
  {
    id: 3,
    title: 'White T-shirts Promotion',
    url: './images/main3.jpg',
  },
  {
    id: 4,
    title: 'Color T-shirts Promotion',
    url: './images/main4.jpg',
  },
];
