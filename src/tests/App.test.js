import { render, screen } from '@testing-library/react';
import App from '../App';

test('All pages renders', () => {
  render(<App />);
  const linkElement = screen.getByText(/Enter Origin/i);
  expect(linkElement).toBeInTheDocument();
});
