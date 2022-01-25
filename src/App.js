import { getCharacters, getStatus } from './services/characters';
import { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import Controls from './Components/Controls/Controls';
import './App.css';
import CharacterList from './Components/CharacterList/CharacterList';

function App() {
  const [character, setCharacter] = useState([]);
  const [query, setQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [status, setStatus] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const charactersData = await getCharacters(query, selectedType);
      setCharacter(charactersData.results);
    };
    fetchData();
  }, [query, selectedType]);

  useEffect(() => {
    const fetchData = async () => {
      const charactersData = await getStatus();
      setStatus(charactersData);
    };
    fetchData();
  });

  return (
    <div className="App">
      <Header />
      <Controls
        query={setQuery}
        setQuery={setQuery}
        status={status}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      <CharacterList character={character} />
    </div>
  );
}

export default App;
