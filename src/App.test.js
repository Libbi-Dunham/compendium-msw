import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

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
