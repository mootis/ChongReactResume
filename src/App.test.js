import { render, screen } from '@testing-library/react';
import App from './App';

test('renders name', () => {
  render(<App />);
  const linkElement = screen.getByText(/David Chong/i);
  expect(linkElement).toBeInTheDocument();
});
