import React from 'react';
import { News } from '../api/NewsAPI';
import { Card, CardContent, Typography, CardActionArea, CardMedia, makeStyles, Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
  card: {
    marginBottom: theme.spacing(1),
  },
  image: {
    height: 240
  }
}));

type NewsItemProps = {
  news: News;
};

function NewsItem({
  news
}: NewsItemProps) {
  const classes = useStyles();

  return (
    <Card className={ classes.card } variant="outlined">
      <CardMedia className={ classes.image } image={ news.image } />
      <CardActionArea onClick={ () => { window.open(news.url); } }>
        <CardContent>
          <Typography color="textSecondary">
            { news.source }
          </Typography>
          <Typography variant="h5">
            { news.title }
          </Typography>
          <Typography variant="body2" color="textSecondary">
            { news.description }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default NewsItem;