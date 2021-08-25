import React from 'react';
import styled, { css } from 'styled-components';

function ReviewHeader() {
  return (
    <ReviewWrapper>
      <Title>고객리뷰</Title>
      <RatingWrapper>
        {/* <RatingStar>{'⭐️⭐️⭐️⭐️⭐️'}</RatingStar> */}
      </RatingWrapper>
    </ReviewWrapper>
  );
}

const ReviewWrapper = styled.section`
  ${({ theme }) => theme.CenterAlignment};
  flex-wrap: wrap;
  width: 100%;
  margin: 100px auto;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  ${({ theme }) => theme.CenterAlignment};
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 30px;
  font-size: 50px;
  text-align: center;
`;

const RatingWrapper = styled.div`
  ${({ theme }) => theme.CenterAlignment};
  flex-wrap: wrap;
  width: 100%;
`;

const RatingStar = styled.div`
  ${({ theme }) => theme.CenterAlignment};
  flex-wrap: wrap;
  width: 100%;
  text-align: center;
`;

export default ReviewHeader;
