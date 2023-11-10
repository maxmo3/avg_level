import { React, useState } from 'react';
import ItemBox from './ItemBox';
import CharacterName from './CharacterName';
import './avgLevel.css';

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

  let total = 0;

  for (const number of result) {
    total += number;
  }

  const average = total / itemSlots.length;

  return (
    <div className='div-center'>
      <div>
        <CharacterName
          value={charName}
          onChange={getCharName}
        />
      </div>

      <div className='item-slots'>
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
      </div>
      <div className='avg-value'>{`${charName} average item level = ${average.toFixed(2)}`}</div>
    </div>
  );
};

export default AvgItemLevelCalcPage;
