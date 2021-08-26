import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import ReviewCommentList from './ReviewCommentList';
import ReviewCommentForm from './ReviewCommentForm';
import { BASE_URL, TOKEN_KEY, API } from '../../config';
import axios from 'axios';

function Review() {
  const classes = useStyles();
  const [reviewData, setReviewData] = useState([]);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(0);
  const [file, setFile] = useState([]);
  const [review, setReview] = useState('');

  const handleClick = value => {
    setCurrentValue(value);
  };

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(0);
  };

  const handleUpload = event => {
    event.preventDefault();
    setFile(event.target.files[0]);
  };

  const handleChange = e => {
    setReview(e.target.value);
  };

  const registerReview = () => {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('text', review);
    formData.append('score', currentValue);

    axios({
      method: 'post',
      url: `${BASE_URL}/products/13/review`,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: TOKEN_KEY,
      },
    })
      .then(() => {
        axios
          .get(`${BASE_URL}/product/13`)
          .then(res => {
            console.log('res', res);
            setReviewData([...reviewData, ...res.data.MESSAGE.review]);
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        alert('리뷰작성에 실패하셨습니다.');
      });
  };

  const modifyReview = () => {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('text', review);
    formData.append('score', currentValue);

    axios({
      method: 'post',
      url: `${BASE_URL}/products/34/review`,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: TOKEN_KEY,
      },
    })
      .then(res => {
        if (res.MESSAGE === 'SUCCESS') {
          alert('리뷰를 수정하시겠습니까?');
        }
      })
      .catch(err => {
        if (err.MESSAGE === 'SUCCESS') {
          alert('리뷰수정에 실패했습니다.');
        }
      });
  };

  const deleteReview = () => {
    axios
      .delete(`${BASE_URL}/products/15/review/22`, {
        headers: {
          Authorization: TOKEN_KEY,
        },
        withCredentials: true,
      })
      .then(res => {
        if (res.MESSAGE === 'SUCCESS') {
          alert('리뷰 삭제에 성공했습니다.');
        }
      })
      .catch(err => {
        alert('리뷰 삭제에 실패했습니다.');
      });
  };

  return (
    <ReviewWrapper className={classes.root}>
      <Title>구매 후기</Title>
      <ReviewCommentList
        reviewData={reviewData}
        currentValue={currentValue}
        modifyReview={modifyReview}
        deleteReview={deleteReview}
      />
      <ReviewCommentForm
        currentValue={currentValue}
        hoverValue={hoverValue}
        file={file}
        handleClick={handleClick}
        handleMouseOver={handleMouseOver}
        handleMouseLeave={handleMouseLeave}
        handleUpload={handleUpload}
        handleChange={handleChange}
        registerReview={registerReview}
      />
    </ReviewWrapper>
  );
}

const ReviewWrapper = styled.ul`
  ${({ theme }) => theme.CenterAlignment};
  width: 100%;
`;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const Title = styled.h1`
  margin-top: 100px;
  font-size: 30px;
  text-align: center;
`;

export default Review;
