export async function getCharacters() {
  const response = await fetch(`https://rickandmortyapi.com/api/character`);
  const charactersData = await response.json();
  return charactersData;
}
