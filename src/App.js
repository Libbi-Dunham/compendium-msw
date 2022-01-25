import { getCharacters } from './services/characters';
import { useEffect, useState } from 'react';
import Controls from './Components/Controls/Controls';
import './App.css';
import CharacterList from './Components/CharacterList/CharacterList';
import Header from './Header/Header';

function App() {
  const [character, setCharacter] = useState([]);
  const [query, setQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [loading, setLoading] = useState(true);
  // const [status, setStatus] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const charactersData = await getCharacters(query, selectedType);
      setCharacter(charactersData.results);
      setLoading(false);
    };
    2000;
    if (loading) {
      fetchData();
    }
  }, [query, selectedType, loading]);

  const filterCharacters = character.filter(
    (character) => character.name.toLowerCase().includes(query) || character.name.includes(query)
  );

  return (
    <div className="App">
      <Header />
      <Controls
        query={query}
        setQuery={setQuery}
        // status={status}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      <CharacterList character={character} filterCharacters={filterCharacters} />
    </div>
  );
}

export default App;
