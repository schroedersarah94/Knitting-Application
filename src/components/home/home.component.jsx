import React, { useEffect } from 'react';
import PatternIcon from '../pattern-icon/pattern-icon.component';

function Home() {
  useEffect(() => {

  }, []);
  return (
    <div data-testid="homeContainer">
      <PatternIcon />
      <PatternIcon />
    </div>
  );
}

export default Home;
