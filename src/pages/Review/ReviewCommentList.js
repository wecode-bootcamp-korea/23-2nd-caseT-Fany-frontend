import React from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import { Divider } from '@material-ui/core';

const stars = Array(5).fill(0);

export default function ReviewCommentList({
  reviewData,
  modifyReview,
  deleteReview,
  currentValue,
}) {
  return (
    <CommentList>
      {reviewData.map(comment => {
        return (
          <Box key={comment.user}>
            <ReviewHeader>
              <span>리뷰어: {comment.user}</span>
              <span>{comment.create_at}</span>

              <div style={styles.stars}>
                {stars.map((_, index) => {
                  return (
                    <FaStar
                      key={index}
                      size={24}
                      color={
                        (currentValue || comment.score) > index
                          ? colors.orange
                          : colors.grey
                      }
                      style={{
                        marginRight: 10,
                        cursor: 'pointer',
                      }}
                    />
                  );
                })}
              </div>
            </ReviewHeader>
            <CommentText>{comment.text}</CommentText>
            <ReviewPhoto src={comment.image} alt="리뷰 이미지" />
            <Buttons>
              <button onClick={modifyReview}>리뷰 수정</button>
              <button onClick={deleteReview}>리뷰 삭제</button>
            </Buttons>
            <div classes={styles.divider}>
              <Divider />
            </div>
          </Box>
        );
      })}
    </CommentList>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  stars: {
    display: 'flex',
    flexDirection: 'row',
    margin: '20px 0px',
  },
  textarea: {
    border: '1px solid #a9a9a9',
    borderRadius: 5,
    padding: 10,
    margin: '20px 0',
    minHeight: 100,
    width: 300,
  },
  button: {
    border: '1px solid #a9a9a9',
    borderRadius: 5,
    width: 300,
    padding: 10,
  },
  divider: {
    marginTop: '10px',
  },
};

const colors = {
  orange: '#FFBA5A',
  grey: '#a9a9a9',
};

const CommentList = styled.ul`
  ${({ theme }) => theme.CenterAlignment};
  flex-wrap: wrap;
  margin-bottom: 50px;
  flex-direction: column;
`;

const Buttons = styled.button`
  button {
    margin-top: 20px;
    margin-right: 10px;
    border: 1px solid #2b5dab;
    border-radius: 10px;
    background-color: #2b5dab;
    color: white;
    padding: px;
  }
  padding-bottom: 10px;
`;

const ReviewHeader = styled.div`
  span {
    margin: 5px 0px;
  }
  display: flex;
  flex-direction: column;
`;

const ReviewPhoto = styled.img`
  width: 200px;
  height: 200px;
`;

const CommentText = styled.div`
  margin: 10px 0px;
`;

const Box = styled.li`
  margin: 50px 50px;
`;
