import React from 'react';
import useNews from '../hooks/useNews';
import NewsItem from './NewsItem';
import CircularProgress from '@material-ui/core/CircularProgress';

function NewsList() {
  const newsState = useNews();

  if (newsState.status === 'loading') {
    return <CircularProgress />;
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