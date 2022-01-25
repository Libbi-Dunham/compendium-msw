import React from 'react';

export default function CharacterList({ character }) {
  console.log('characters', character);
  return (
    <div className="list">
      {character.map((char) => (
        <p className="char" key={char.id}>
          {char.character}
          {/* <img src={char.url_image}></img> */}
          <br></br>
          Type: {char.type}
          <br></br>
          Status: {char.status}
        </p>
      ))}
    </div>
  );
}
