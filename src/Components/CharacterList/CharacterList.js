import React from 'react';

export default function CharacterList({ filterCharacters }) {
  return (
    <div className="list">
      {filterCharacters.map((char) => (
        <p className="char" key={char.id}>
          {char.character}
          <img alt={char.name} src={char.image}></img>
          <br></br>
          Name: {char.name}
          <br></br>
          Species: {char.species}
          <br></br>
          Gender: {char.gender}
          <br></br>
          Status: {char.status}
        </p>
      ))}
    </div>
  );
}
