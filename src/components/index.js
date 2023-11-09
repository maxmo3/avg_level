import { React, useState } from 'react';
import ItemBox from './ItemBox';
import CharacterName from './CharacterName';

const itemSlots = [
  'helmet',
  'amulet',
  'shoulders',
  'chest',
  'wrist',
  'hands',
  'waist',
  'boots',
  'ring1',
  'ring2',
  'trinket1',
  'trinket2',
  'weapon',
];
let total = 0;

const AvgItemLevelCalcPage = () => {
  const [data, setData] = useState({});
  const [charName, setCharName] = useState('');

  const onChange = (itemLevel, name) => {
    setData((localData) => ({ ...localData, [name]: itemLevel }));
    return;
  };

  const getCharName = (name) => {
    setCharName(name);
  };

  let result = Object.values(data)
    .filter((value) => value !== '')
    .map((value) => parseInt(value));

  for (const number of result) {
    total += number;
  }

  const average = total / itemSlots.length;

  return (
    <div>
      <CharacterName
        value={charName}
        onChange={getCharName}
      />
      {itemSlots.map((name) => {
        return (
          <ItemBox
            title={name}
            onChange={(itemLevel) => {
              onChange(itemLevel, name);
            }}
          ></ItemBox>
        );
      })}

      <p>Total: {total}</p>
      <p>{`${charName}'s average = ${average.toFixed(2)}`}</p>
    </div>
  );
};

export default AvgItemLevelCalcPage;
