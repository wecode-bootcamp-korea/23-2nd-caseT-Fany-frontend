import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ReviewStars from './ReviewStars';

export default function ReviewCommentForm(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} onSubmit={props.handleSubmit}>
      <ReviewStars
        name="score"
        encType="multipart/form-data"
        currentValue={props.currentValue}
        hoverValue={props.hoverValue}
        handleClick={props.handleClick}
        handleMouseOver={props.handleMouseOver}
        handleMouseLeave={props.handleMouseLeave}
      />
      <input
        className={classes.input}
        type="file"
        onChange={props.handleUpload}
      />
      <textarea
        placeholder="리뷰 남기기"
        className={classes.commentBox}
        onChange={props.handleChange}
        maxLength="200"
      />
      <Button
        type="button"
        className={classes.buttonReview}
        onClick={props.registerReview}
      >
        리뷰 등록
      </Button>
    </form>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    display: 'flex',
    flexDirection: 'column',
  },
  commentBox: {
    height: '100px',
    padding: '20px',
    border: '1px solid black',
    borderRadius: '5px',
    overflow: 'scroll',
    resize: 'none',
    border: '1px solid #eaeaea',
  },
  buttonReview: {
    border: '1px solid #2b5dab',
    width: '750px',
    backgroundColor: '#2b5dab',
    color: 'white',
  },
  btnContainer: {
    margin: '10px',
    padding: '10px',
  },
}));
