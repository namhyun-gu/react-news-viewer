import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import NewsList from '../components/NewsList';
import NewsHeader from '../components/NewsHeader';
import NewsLoadingProgress from '../components/NewsLoadingProgress';
import NewsRefreshFab from '../components/NewsRefreshFab';
import useNewsActions from '../hooks/useNewsActions';
import NewsCategoryFilter from '../components/NewsCategoryFilter';

const App: React.FC = () => {
  const { requestFetch } = useNewsActions();

  useEffect(() => {
    requestFetch();
  });

  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <NewsHeader />
        <NewsCategoryFilter />
        <NewsList />
      </Container>
      <NewsLoadingProgress />
      <NewsRefreshFab />
    </React.Fragment>
  );
};

export default App;
