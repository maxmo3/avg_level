import { React, useState, useEffect } from 'react';

const CharacterName = (props) => {
  const [charName, setCharName] = useState('');

  useEffect(() => {
    props.onChange(charName);
  }, [charName]);

  return (
    <div>
      <label>
        Character name:
        <input
          value={charName}
          onChange={(x) => setCharName(x.target.value)}
        ></input>
      </label>
    </div>
  );
};

export default CharacterName;
