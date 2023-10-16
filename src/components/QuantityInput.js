import React from 'react';

const QuantityInput = ({ quantity, onQuantityChange }) => {
  return (
    <div>
      <label>Quantity Available:</label>
      <input type="number" value={quantity} onChange={onQuantityChange} />
    </div>
  );
};

export default QuantityInput;
