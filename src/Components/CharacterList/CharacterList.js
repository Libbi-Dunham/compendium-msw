import React from 'react';

export default function CharacterList({ character }) {
  return (
    <div className="list">
      {character.map((char) => (
        <p className="char" key={char.id}>
          {char.character}
        </p>
      ))}
    </div>
  );
}
