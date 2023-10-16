import React from 'react';

const PriceInput = ({ price, onPriceChange }) => {
  return (
    <div>
      <label>Price:</label>
      <input type="number" value={price} onChange={onPriceChange} />
    </div>
  );
};

export default PriceInput;
