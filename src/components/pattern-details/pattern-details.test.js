import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import PatternDetails from './pattern-details.component';

describe('pattern icon test suite', () => {
  it('renders pattern container element', () => {
    render(<PatternDetails />);
    const patternContainer = screen.getByTestId('patternDetailsContainer');
    expect(patternContainer).toBeInTheDocument();
  });
});
