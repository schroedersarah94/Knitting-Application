import React from 'react';
import { Link } from 'react-router-dom';
import sweaterImage from '../../assets/img/sweater.jpg';
import PropTypes from 'prop-types';

export default function PatternIcon(props) {
  const { name, id, author } = props;
  return (
    <Link to={{ pathname: "/pattern-details"}}>
      <div data-testid="patternContainer" class={id}>      
        <div data-testid="patternTitle">{name}</div>
        <div data-testid="patternAuthor">{author}</div>
        <img data-testid="patternImage" src={sweaterImage} alt="main pattern" />
      </div>
    </Link>
  );
}

PatternIcon.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number.isRequired,
  author: PropTypes.string,
}

PatternIcon.defaultProps = {
  name: '',
  author: '',
}