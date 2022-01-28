import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { user } from './data/data';
import userEvent from '@testing-library/user-event';
import App from './App';

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    return res(ctx.json({ results: user }));
  })
);

beforeAll(() => server.listen());

afterAll(() => server.close());

test.only('renders the search bar', async () => {
  render(<App />);
  const searchBar = await screen.findByRole('textbox');

  const characterName = 'Rick';

  userEvent.type(searchBar, characterName);
});
