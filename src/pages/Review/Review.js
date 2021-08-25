import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import ReviewHeader from './ReviewHeader';
// import ReviewRatingsFilter from './ReviewRatingsFilter';
import ReviewCommentList from './ReviewCommentList';
import ReviewCommentForm from './ReviewCommentForm';
import axios from 'axios';

function Review() {
  const classes = useStyles();
  const [reviewData, setReviewData] = useState({});

  useEffect(() => {
    axios
      .get('/data/reviewData.json')
      .then(Response => {
        setReviewData(Response.data);
      })
      .catch(Error => {
        console.log(Error);
      });
  }, []);

  return (
    <ReviewWrapper className={classes.root}>
      <ReviewHeader />
      {/* <ReviewRatingsFilter /> */}
      <ReviewCommentList />
      <ReviewCommentForm />
    </ReviewWrapper>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '900px',
  },
}));

const ReviewWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export default Review;
