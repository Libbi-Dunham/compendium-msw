export async function getCharacters(query, selectedType) {
  const params = new URLSearchParams();
  params.set('character', query);

  if (selectedType !== 'all') {
    params.set('species', selectedType);
  }
  const response = await fetch(`https://rickandmortyapi.com/api/character`);
  const charactersData = await response.json();
  console.log('DATA', charactersData);
  return charactersData;
}
