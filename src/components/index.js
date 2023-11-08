import { React, useState } from 'react';
import ItemBox from './ItemBox';

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

  const onChange = (itemLevel, name) => {
    setData((localData) => ({ ...localData, [name]: itemLevel }));
    return;
  };

  console.log(data);

  let result = Object.values(data)
    .filter((value) => value != '')
    .map((value) => parseInt(value));

  let total = 0;

  for (const number of result) {
    total += number;
  }

  const average = total / itemSlots.length;

  return (
    <div>
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
      <p>Average: {average.toFixed(2)}</p>
    </div>
  );
};

export default AvgItemLevelCalcPage;
