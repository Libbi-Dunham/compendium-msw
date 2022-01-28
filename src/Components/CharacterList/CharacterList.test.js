import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { user } from '../../data/data';
import App from '../../App';

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    return res(ctx.json({ results: user }));
  })
);

beforeAll(() => server.listen());

afterAll(() => server.close());

test('should render the characterList', async () => {
  render(<App />);

  const header = await screen.findByText(/Rick and Morty/i);
  const image = screen.getByAltText(/Rick Sanchez/i);
  const species = screen.getByText(/name: rick sanchezspecies: humangender: malestatus: alive/i);

  expect(header).toBeInTheDocument();
  expect(image).toBeInTheDocument();
  expect(species).toBeInTheDocument();
});
