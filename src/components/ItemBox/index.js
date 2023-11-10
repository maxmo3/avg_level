import { React, useState, useEffect } from 'react';
import { TextField } from '@mui/material';

const ItemBox = (props) => {
  const [itemLevel, setItemLevel] = useState('');

  useEffect(() => {
    props.onChange(itemLevel);
  }, [itemLevel]);

  return (
    <div>
      <TextField
        id='filled-basic'
        label={props.title + ':'}
        variant='filled'
        type='number'
        value={itemLevel}
        onChange={(x) => setItemLevel(x.target.value)}
      />
    </div>
  );
};

export default ItemBox;
