import React from 'react';
import { News } from '../api/NewsAPI';

type NewsItemProps = {
  news: News;
};

function NewsItem({
  news
}: NewsItemProps) {
  return (
    <div>
      <p>{ news.title }</p>
      <p>{ news.source }</p>
      <p>{ news.url }</p>
    </div>
  );
}

export default NewsItem;