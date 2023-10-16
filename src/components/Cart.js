import React from 'react';

const Cart = ({ cart, onRemoveFromCart }) => {
  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <ul>
        {cart.map((product, index) => (
          <li key={index}>
            {product.medicineName}, Quantity: {product.quantity}, Price: {product.price}
            <button onClick={() => onRemoveFromCart(product)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        Total Quantity: {cart.reduce((total, product) => total + product.quantity, 0)}
        Total Price: {cart.reduce((total, product) => total + product.quantity * product.price, 0)}
      </div>
    </div>
  );
};

export default Cart;
