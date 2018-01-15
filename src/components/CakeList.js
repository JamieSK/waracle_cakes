import React from 'react';
import Cake from './Cake';
import '../css/cakeList.css';

const CakeList = ({cakes, cakeDetails}) => {
  cakes = cakes.map((cake, index) => {
    return (
      <Cake
        name={cake.name}
        imageUrl={cake.imageUrl}
        key={cake.id}
        onClick={() => cakeDetails(index)}
      />
    )
  });

  return (
    <div className='cake-list'>
      {cakes}
    </div>
  )
}

export default CakeList;