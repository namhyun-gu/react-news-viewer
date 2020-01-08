import React from 'react';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

function NewsHeader() {
  return (
    <Box mt={ 4 } mb={ 2 } fontWeight={ 300 }>
      <Typography variant="h3">
        News
      </Typography>
    </Box>
  );
}

export default NewsHeader;