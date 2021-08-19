import React from 'react';
import styled, { css } from 'styled-components';

function ReviewRatings() {
  return (
    <RatingAlignWrapper>
      <p>별점순으로 정렬</p>
      <RatingFilter>
        {RATING_SCORE_LIST.map(({ id, lable, content, count }) => {
          return (
            <div key={id}>
              <RatingVisible>
                <Lable>{lable}</Lable>
                <ProgressBar>{content}</ProgressBar>
                <AverageReview>({count})</AverageReview>
              </RatingVisible>
            </div>
          );
        })}
      </RatingFilter>
    </RatingAlignWrapper>
  );
}

const display = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RatingAlignWrapper = styled.div`
  ${display}
  margin: 0 auto;
  margin-bottom: 30px;

  li {
    display: flex;
    justify-content: space-between;
  }
`;

const RatingFilter = styled.ul`
  width: 100%;
`;

const ProgressBar = styled.div`
  width: 100px;
  background: gray;
`;

const AverageReview = styled.div``;

const Lable = styled.div``;

const RatingVisible = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 10px;
`;

const RATING_SCORE_LIST = [
  { id: 0, lable: '5 별점', content: 'z', count: '1' },
  { id: 1, lable: '4 별점', content: 'x', count: '3' },
  { id: 2, lable: '3 별점', content: 'd', count: '4' },
  { id: 3, lable: '2 별점', content: 'd', count: '2' },
  { id: 4, lable: '1 별점', content: '2', count: '3' },
];

export default ReviewRatings;
