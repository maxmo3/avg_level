import { React, useState } from 'react';

const ItemBox = (props) => {
  const [itemLevel, setItemLevel] = useState('');

  return (
    <div>
      <label>
        {props.title + ':'}
        <input
          value={itemLevel}
          onChange={(x) => setItemLevel(x.target.value)}
        ></input>
      </label>
    </div>
  );
};

export default ItemBox;
