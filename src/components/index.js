import { React, useState } from 'react';
import ItemBox from './ItemBox';

const itemSlots = [
  { name: 'helmet', value: null },
  { name: 'amulet', value: null },
  { name: 'shoulders', value: null },
  { name: 'chest', value: null },
  { name: 'wrist', value: null },
  { name: 'hands', value: null },
  { name: 'waist', value: null },
  { name: 'boots', value: null },
  { name: 'ring1', value: null },
  { name: 'ring2', value: null },
  { name: 'trinket1', value: null },
  { name: 'trinket2', value: null },
];

const AvgItemLevelCalcPage = (props) => {
  const [itemLevel, setItemLevel] = useState('');

  return (
    <div>
      {itemSlots.map((i) => {
        return (
          <ItemBox
            key={Math.random()}
            title={i.name}
            value={i.value}
          ></ItemBox>
        );
      })}
      {console.log(itemLevel)}
    </div>
  );
};

export default AvgItemLevelCalcPage;
