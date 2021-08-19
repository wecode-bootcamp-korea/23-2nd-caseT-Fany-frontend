import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export default function ReviewCommentForm() {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <textarea placeholder="리뷰 남기기" className={classes.commentBox} />
      <Button
        className={classes.button}
        onClick={() => {
          alert('clicked');
        }}
      >
        리뷰 등록
      </Button>
      <label htmlFor="containedButtonFile">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
      <input
        accept="image/*"
        className={classes.input}
        id="containedButtonFile"
        multiple
        type="file"
      />
    </section>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    display: 'flex',
    flexDirection: 'column',
    width: '500px',
  },
  commentBox: {
    height: '100px',
    padding: '20px',
    border: '1px solid black',
    borderRadius: '5px',
  },
  button: {
    border: '1px solid',
  },
  btnContainer: {
    margin: '10px',
    padding: '10px',
  },
}));
