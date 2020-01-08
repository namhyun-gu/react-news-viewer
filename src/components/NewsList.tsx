import React from 'react';
import useNews from '../hooks/useNews';
import NewsItem from './NewsItem';
import { makeStyles, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles({
  progress: {
    marginTop: 16
  }
});


function NewsList() {
  const newsState = useNews();
  const classes = useStyles();

  if (newsState.status === 'loading') {
    return <CircularProgress className={ classes.progress } />;
  }

  if (newsState.data.length === 0) {
    return <p>Noting</p>;
  }

  return (
    <ul>
      {
        newsState.data.map(news => (
          <NewsItem key={ news.id } news={ news } />
        ))
      }
    </ul>
  );
}

export default NewsList;