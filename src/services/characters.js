export async function getCharacters(query, selectedType) {
  const params = new URLSearchParams();
  params.set('character', query);

  if (selectedType !== 'all') {
    params.set('species', selectedType);
  }
  const response = await fetch(`https://rickandmortyapi.com/api/character`);
  const charactersData = await response.json();
  console.log(charactersData);
  return charactersData;
}

export async function getStatus() {
  const response = await fetch(`https://rickandmortyapi.com/api/character`);
  const charactersData = await response.json();
  const CharacterList = charactersData.results;
  return CharacterList.map((item) => item.status);
}
