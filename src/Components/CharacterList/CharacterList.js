import React from 'react';

export default function CharacterList({ filterCharacters }) {
  console.log('characters', filterCharacters);
  return (
    <div className="list">
      {filterCharacters.map((char) => (
        <p className="char" key={char.id}>
          {char.character}
          {/* <img src={char.url_image}></img> */}
          Name: {char.name}
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
