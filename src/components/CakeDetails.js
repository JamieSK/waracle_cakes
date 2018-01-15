import React from 'react';
import Cake from './Cake';

const CakeDetails = ({cake, goToAllCakes}) => {
  return (
    <div>
      <Cake {...cake} />
      <h4>{cake.comment}</h4>
      <button onClick={goToAllCakes}>Back to cakes.</button>
    </div>
  );
};

export default CakeDetails;