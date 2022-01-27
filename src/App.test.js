import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { user } from './data/data';
import userEvent from '@testing-library/user-event';
import App from './App';

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character/rest/v1/users', (req, res, ctx) => {
    const select = req.url.searchParams.get('select');
    if (select === '*') {
      return res(ctx.json([user]));
    }
    return res(ctx.status(500));
  })
);

beforeAll(() => server.listen());

afterAll(() => server.close());

test('renders the search bar', async () => {
  render(<App />);
  const searchBar = await screen.findByRole('textbox');
  const characterName = 'Rick';

  userEvent.type(searchBar, characterName);

  const character = await screen.findAllByText(characterName, { exact: false });
  const response = character.map((item) => item.textContent);
  const handleCheck = (name) => name.toLowerCase().includes(characterName);
  const checkName = response.every(handleCheck);

  expect(checkName).toBe(false);
});
