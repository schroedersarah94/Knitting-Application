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
    render(<PatternIcon patternName="Rainbow Winter Scarf" />);
    const patternTitle = screen.getByTestId('patternTitle');
    expect(patternTitle.innerHTML).toBe('Rainbow Winter Scarf');
  });

  it('should render with pattern author', () => {
    render(<PatternIcon patternAuthor="Hannah Rolambaj" />);
    const patternAuthor = screen.getByTestId('patternAuthor');
    expect(patternAuthor.innerHTML).toBe('Hannah Rolambaj');
  });

  it('should render with pattern main image', () => {
    render(<PatternIcon patternImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaTaR6kJMutknBAQLwQ4hzMd4hWt2X5YiOkw&usqp=CAU" />);
    const patternImage = screen.getByTestId('patternImage');
    expect(patternImage).toBeInTheDocument();
  });
});
