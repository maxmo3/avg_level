import { React, useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import './characterName.css'

const CharacterName = (props) => {
  const [charName, setCharName] = useState('');

  useEffect(() => {
    props.onChange(charName);
  }, [charName]);

  return (
    <div className='char-name'>
      <TextField
        id='filled-basic'
        label='Character name'
        variant='filled'
        value={charName}
        onChange={(x) => setCharName(x.target.value)}
      />
    </div>
  );
};

export default CharacterName;
