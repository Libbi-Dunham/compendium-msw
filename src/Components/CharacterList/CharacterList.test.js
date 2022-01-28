import { render, screen } from '@testing-library/react';
// import { rest } from 'msw';
// import { setupServer } from 'msw/lib/types/node';
// import { user } from '../../data/data';
import App from '../../App';
//comment

// const server = setupServer(
//   'https://rickandmortyapi.com/api/character/rest/v1/users',
//   (req, res, ctx) => {
//     const select = req.url.searchParams.get('select');
//     if (select === '*') {
//       return res(ctx.json([user]));
//     }
//     return res(ctx.status(500));
//   }
// );
test('should render the characterList', async () => {
  render(<App />);

  const header = await screen.findByText(/Rick and Morty/i);
  const image = screen.getByAltText(/Rick Sanchez/i);
  const species = screen.getByText(/name: rick sanchezspecies: humangender: malestatus: alive/i);

  expect(header).toBeInTheDocument();
  expect(image).toBeInTheDocument();
  expect(species).toBeInTheDocument();
});
