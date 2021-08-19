import React from 'react';
import styled, { css } from 'styled-components';

function ReviewHeader() {
  return (
    <ReviewWrapper>
      <Title>고객리뷰</Title>
      <RatingWrapper>
        <RatingAverageNum>{'별점 숫자 평균'}</RatingAverageNum>
        <RatingStar>{'별점 visible 평균(star)'}</RatingStar>
        <p>기준 {'리뷰개수'} 리뷰</p>
      </RatingWrapper>
    </ReviewWrapper>
  );
}

const display = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ReviewWrapper = styled.section`
  ${display}
  width: 100%;
  margin: 0 auto;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 30px;
  text-align: center;
`;

const RatingAverageNum = styled.h2`
  font-size: 50px;
  font: bold;
  text-align: center;
`;

const RatingStar = styled.div`
  text-align: center;
`;

const RatingWrapper = styled.div`
  ${display}
  p {
    font-size: 10px;
    text-align: center;
  }
`;

export default ReviewHeader;
