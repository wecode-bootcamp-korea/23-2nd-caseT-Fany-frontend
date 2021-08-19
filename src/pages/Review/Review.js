import React from 'react';
import styled, { css } from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import ReviewHeader from './ReviewHeader';
import ReviewRatingsFilter from './ReviewRatingsFilter';
import ReviewCommentList from './ReviewCommentList';
import ReviewStars from './ReviewStars';
import ReviewCommentForm from './ReviewCommentForm';

function Review() {
  const classes = useStyles();
  return (
    <ReviewWrapper className={classes.root}>
      <ReviewHeader />
      <ReviewRatingsFilter />
      <ReviewStars />
      <ReviewCommentList />
      <ReviewCommentForm />
    </ReviewWrapper>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const ReviewWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 4em;
`;

export default Review;
