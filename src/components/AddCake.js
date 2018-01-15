import React from 'react';
import '../css/addCake.css'

const AddCake = ({saveCake, handleInputChange, newCake}) => {
  return (
    <div className='add-cake'>
      <form onSubmit={saveCake}>
        <label htmlFor="cake-name">Name:</label>
        <input
          id="cake-name"
          type="text"
          name="name"
          value={newCake.name}
          onChange={handleInputChange}
        />
        <br/>
        <label htmlFor="cake-comment">Comment:</label>
        <input
          id="cake-comment"
          type="text"
          name="comment"
          value={newCake.comment}
          onChange={handleInputChange}
        />
        <br/>
        <label htmlFor="cake-image">Image:</label>
        <input
          id="cake-image"
          type="text"
          name="imageUrl"
          value={newCake.imageUrl}
          onChange={handleInputChange}
        />
        <br/>
        <label htmlFor="cake-rating">Yum Factor:</label>
        <select
          name="yumFactor"
          id="cake-rating"
          value={newCake.yumFactor}
          onChange={handleInputChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br/>
        <input type="submit" value="Save"/>
      </form>
    </div>
  )
}

export default AddCake;