import { render, screen } from '@testing-library/react';
import App from '../../App';

test('should render the characterList', async () => {
  render(<App />);

  const header = await screen.findByText(/Rick and Morty/i);
  const image = screen.getByAltText(/Rick Sanchez/i);
  const species = screen.getByText(/name: rick sanchezspecies: humangender: malestatus: alive/i);

  expect(header).toBeInTheDocument();
  expect(image).toBeInTheDocument();
  expect(species).toBeInTheDocument();
});
