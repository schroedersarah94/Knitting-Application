import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import PatternIcon from './pattern-icon.component';

describe('pattern icon test suite', () => {
  it('renders pattern container element', () => {
    render(<PatternIcon />);
    const patternContainer = screen.getByTestId('patternContainer');
    expect(patternContainer).toBeInTheDocument();
  });

  it('should render with pattern title', () => {
    render(<PatternIcon />);
    const patternTitle = screen.getByTestId('patternTitle');
    expect(patternTitle).toBeInTheDocument();
  });

  it('should render with pattern author', () => {
    render(<PatternIcon />);
    const patternAuthor = screen.getByTestId('patternAuthor');
    expect(patternAuthor).toBeInTheDocument();
  });

  it('should render with pattern main image', () => {
    render(<PatternIcon />);
    const patternImage = screen.getByTestId('patternImage');
    expect(patternImage).toBeInTheDocument();
  });
});
