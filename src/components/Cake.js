import React from 'react';
import '../css/cake.css';

const Cake = ({name, imageUrl}) => {
  return (
    <div>
      <h3>{name}</h3>
      <img src={imageUrl} alt={`${name}`} className="cake-image"/>
    </div>
  )
}

export default Cake;