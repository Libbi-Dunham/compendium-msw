import { render, screen } from '@testing-library/react';
import App from './App';

test.skip('renders the search bar', async () => {
  render(<App />);
  const search = await screen.findByRole(/Find a Character/i);
  expect(search).toBeInTheDocument();
});
