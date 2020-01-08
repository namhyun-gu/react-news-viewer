import React from 'react';
import Fab from '@material-ui/core/Fab';
import RefreshIcon from '@material-ui/icons/Refresh';
import useNewsActions from '../hooks/useNewsActions';
import { makeStyles, Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    }
  }),
);

function NewsRefreshFab() {
  const classes = useStyles();
  const { requestFetch } = useNewsActions();

  return (
    <Fab className={ classes.fab } color="primary" onClick={ requestFetch }>
      <RefreshIcon />
    </Fab>
  );
}

export default NewsRefreshFab;