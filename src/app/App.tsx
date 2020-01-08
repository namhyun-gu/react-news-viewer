import React, { useEffect } from 'react';
import NewsList from '../components/NewsList';
import useNewsActions from '../hooks/useNewsActions';

const App: React.FC = () => {
  const { onUpdate } = useNewsActions();

  useEffect(() => {
    onUpdate();
  });

  return (
    <div>
      <NewsList />
    </div>
  );
};

export default App;
