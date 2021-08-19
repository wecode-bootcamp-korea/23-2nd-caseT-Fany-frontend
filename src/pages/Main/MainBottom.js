import React from 'react';
import styled from 'styled-components';

function MainBottom() {
  return (
    <Div>
      {GO_TO_SOCIAL_PAGE.map(({ id, url }) => {
        return (
          <BorderDiv>
            <ImageWrapper key={id}>
              <Img src={url} />
              <P>@201_steve X color Collection</P>
            </ImageWrapper>
          </BorderDiv>
        );
      })}
    </Div>
  );
}

export default MainBottom;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding: 0 10%;
`;

const Img = styled.img`
  width: 300px;
`;

const ImageWrapper = styled.div`
  text-align: center;
`;

const P = styled.p`
  margin: 10px 0;
  color: #999999;
`;

const BorderDiv = styled.div`
  border: 15px solid red;
  &:nth-child(1) {
    border: 15px solid #2c5dab;
  }
  &:nth-child(2) {
    border: 15px solid #f6e163;
  }
  &:nth-child(3) {
    border: 15px solid #f6a19b;
  }
  &:nth-child(4) {
    border: 15px solid #354a46;
  }
`;

const GO_TO_SOCIAL_PAGE = [
  {
    id: 1,
    title: 'Teal T-shirt Promotion',
    url: './images/bottom1.jpg',
  },
  {
    id: 2,
    title: 'Black T-shirts Promotion',
    url: './images/bottom2.jpg',
  },
  {
    id: 3,
    title: 'White T-shirts Promotion',
    url: './images/bottom3.jpg',
  },
  {
    id: 4,
    title: 'White T-shirts Promotion',
    url: './images/bottom4.jpg',
  },
];
