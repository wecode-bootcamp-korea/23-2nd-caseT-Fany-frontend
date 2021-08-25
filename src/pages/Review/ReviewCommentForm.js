import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export default function ReviewCommentForm() {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      {/* <label htmlFor="containedButtonFile">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label> */}
      <input
        accept="image/*"
        className={classes.input}
        id="containedButtonFile"
        multiple
        type="file"
      />
      <textarea
        placeholder="리뷰 남기기"
        type="text"
        maxlength="100"
        className={classes.commentBox}
      />
      <Button
        className={classes.reviewBtn}
        onClick={() => {
          alert('clicked');
        }}
      >
        리뷰 등록
      </Button>
    </section>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    padding: '30px',

    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    width: '100%',
  },
  input: {
    width: '180px',
  },
  commentBox: {
    width: '100%',
    height: '150px',
    padding: '20px',
    border: '1px solid black',
    borderRadius: '5px',
    overflow: 'scroll',
  },
  reviewBtn: {
    width: '100%',
    border: '1px solid',
  },
}));
