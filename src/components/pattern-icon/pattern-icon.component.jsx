import React from 'react';
import { Router, Link } from 'react-router-dom';
import sweaterImage from '../../assets/img/sweater.jpg';

function PatternIcon() {
  return (
    <div data-testid="patternContainer">
      <Router basename="/">
        <Link to="/pattern-details">
          Pattern Link
        </Link>
      </Router>
      <div data-testid="patternTitle">Pattern Title</div>
      <div data-testid="patternAuthor">Author</div>
      <img data-testid="patternImage" src={sweaterImage} alt="main pattern" />
    </div>
  );
}

export default PatternIcon;
