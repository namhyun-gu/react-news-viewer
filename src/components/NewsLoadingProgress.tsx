import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import useNews from '../hooks/useNews';
import { makeStyles, Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  }
}));

function NewsLoadingProgress() {
  const classes = useStyles();
  const newsState = useNews();
  const isShown = newsState.status === "loading";

  return (
    <Backdrop className={ classes.backdrop } open={ isShown }>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default NewsLoadingProgress;