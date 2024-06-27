import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const linkElement = screen.getByText(/welcome to our shop/i);
  expect(linkElement).toBeInTheDocument();
});

