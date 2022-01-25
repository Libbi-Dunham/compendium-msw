import React from 'react';

export default function Controls({ query, setQuery }) {
  return (
    <div className="textfield">
      <input
        type="text"
        placeholder="Find a Character"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
    </div>
  );
}
