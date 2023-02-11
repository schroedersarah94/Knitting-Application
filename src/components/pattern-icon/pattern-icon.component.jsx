import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PatternIcon(props) {
  const { patternName, patternAuthor, patternImage } = props;
  return (
    <div data-testid="patternContainer">
      <div data-testid="patternTitle">{patternName}</div>
      <div data-testid="patternAuthor">{patternAuthor}</div>
      <img data-testid="patternImage" src={patternImage} alt="main pattern" />
    </div>
  );
}

PatternIcon.propTypes = {
  patternName: PropTypes.string,
  patternAuthor: PropTypes.string,
  patternImage: PropTypes.string,
};

PatternIcon.defaultProps = {
  patternName: '',
  patternAuthor: '',
  patternImage: 'https://play-lh.googleusercontent.com/yPtnkXQAn6yEahOurxuYZL576FDXWn3CqewVcEWJsXlega_nSiavBvmaXwfTGktGlQ',
};
