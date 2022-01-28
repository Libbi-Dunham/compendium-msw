import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { characters } from './data/data';
import userEvent from '@testing-library/user-event';
import App from './App';

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    return res(ctx.json({ results: characters }));
  })
);

beforeAll(() => server.listen());

afterAll(() => server.close());

test('renders the search bar', async () => {
  render(<App />);
  const searchBar = await screen.findByRole('textbox');
  const characterName = 'Rick';

  userEvent.type(searchBar, characterName);
  const characterElement = await screen.findByAltText(/Rick Sanchez/i);

  expect(searchBar).toBeInTheDocument();
  expect(characterElement).toBeInTheDocument();
});
