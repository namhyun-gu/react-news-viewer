import React from 'react';
import useNews from '../hooks/useNews';
import NewsItem from './NewsItem';

function NewsList() {
  const newsState = useNews();

  if (newsState.status === 'loading') {
    return <div></div>;
  }

  if (newsState.data.length === 0) {
    return <p>Noting</p>;
  }

  return (
    <div>
      {
        newsState.data.map(news => (
          <NewsItem key={ news.id } news={ news } />
        ))
      }
    </div>
  );
}

export default NewsList;