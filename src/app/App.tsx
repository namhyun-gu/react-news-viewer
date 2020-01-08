import React, { useEffect } from 'react';
import NewsList from '../components/NewsList';
import useNewsActions from '../hooks/useNewsActions';
import { Box, Fab, makeStyles, Theme, createStyles } from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    }
  }),
);

const App: React.FC = () => {
  const { onUpdate } = useNewsActions();
  const classes = useStyles();

  useEffect(() => {
    onUpdate();
  });

  return (
    <Box display="flex" justifyContent="center">
      <Box display="flex" width={ 0.4 } justifyContent="center">
        <NewsList />
        <Fab className={ classes.fab } color='primary' onClick={ onUpdate }>
          <RefreshIcon />
        </Fab>
      </Box>
    </Box>
  );
};

export default App;
