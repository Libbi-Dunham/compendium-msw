import { getCharacters } from './services/characters';
import { useEffect, useState } from 'react';
import Controls from './Components/Controls/Controls';
import './App.css';
import CharacterList from './Components/CharacterList/CharacterList';
import Header from './Header/Header';

function App() {
  const [character, setCharacter] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const charactersData = await getCharacters(query);
      setCharacter(charactersData.results);
      setLoading(false);
    };
    {
      fetchData();
    }
  }, [query]);

  if (loading) return <p> Loading </p>;

  const filterCharacters = character.filter(
    (character) => character.name.toLowerCase().includes(query) || character.name.includes(query)
  );

  return (
    <div className="App">
      <Header />
      <Controls query={query} setQuery={setQuery} />
      <CharacterList character={character} filterCharacters={filterCharacters} />
    </div>
  );
}

export default App;
