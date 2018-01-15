import React from 'react';
import Cake from './Cake';
import '../css/cakeList.css';

const CakeList = ({cakes}) => {
  cakes = cakes.map(cake => {
    return <Cake name={cake.name} imageUrl={cake.imageUrl} key={cake.id} />
  });

  return (
    <div className='cake-list'>
      {cakes}
    </div>
  )
}

export default CakeList;