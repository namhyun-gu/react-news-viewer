import React from 'react';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import { capitalize } from '../utils/stringUtil';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5)
    }
  }
}));

const categories = [
  "General",
  "Business",
  "Entertainment",
  "Health",
  "Science",
  "Sports",
  "Technology",
];

function NewsCategoryFilter() {
  const classes = useStyles();

  return (
    <Box className={ classes.root } mb={ 2 }>
      {
        categories.map((category) => (
          <Chip key={ category } label={ capitalize(category) } onClick={ () => { } } variant="outlined" />
        ))
      }
    </Box>
  );
}

export default NewsCategoryFilter;