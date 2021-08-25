import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ReviewStars from './ReviewStars';

export default function ReviewCommentList() {
  const classes = useStyles();
  const [comments, setComments] = useState(['']);

  return (
    <List className={classes.root}>
      <ListItem className={classes.reviewListContainer}>
        {comments.map(list => {
          return (
            <ListItemText
              className={classes.text}
              primary="사용자 ID"
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {'날짜'}
                  </Typography>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {'구매한 상품'}
                  </Typography>
                  <ReviewStars />
                  <div>{list}</div>
                </>
              }
            />
          );
        })}
      </ListItem>
    </List>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  reviewListContainer: {
    display: 'flex',
    alignContent: 'flex-start',
  },
  inline: {
    display: 'inline',
    paddingRight: '30px',
  },
  text: {
    padding: '20px',
    borderBottom: '1px solid #f6f6f6',
  },
}));
