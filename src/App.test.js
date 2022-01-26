import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders the search bar', async () => {
  render(<App />);
  const searchBar = await screen.findByRole('textbox');
  const characterName = 'Rick Sanchez';

  userEvent.type(searchBar, characterName);

  const character = await screen.findAllByText(characterName, { exact: false });
  const response = character.map((item) => item.textContent);
  const handleName = (name) => name.toLowerCase().includes(characterName);
  const sameName = response.every(handleName);

  expect(sameName).toBe(true);
});
