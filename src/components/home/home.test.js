import { render, screen } from '@testing-library/react';
import Home from './home.component';

test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByTestId('homeContainer');
  expect(linkElement).toBeInTheDocument();
});

test('', () => {
  // given

  // when

  // then
});
