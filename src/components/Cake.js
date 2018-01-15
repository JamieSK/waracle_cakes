import React from 'react';
import '../css/cake.css';

const Cake = ({name, imageUrl, onClick}) => {
  return (
    <div className='cake-div' onClick={onClick}>
      <h3>{name}</h3>
      <img src={imageUrl} alt={name} className="cake-image"/>
    </div>
  )
}

export default Cake;