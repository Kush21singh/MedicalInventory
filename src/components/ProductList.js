import React from 'react';
import './ProductList.css'; // Import your CSS file

const ProductList = ({ products, onAddProductToCart }) => {
  return (
    <div className="product-list-container">
      <h2>Product List</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <span>{product.medicineName}</span>
            <span>{product.selectedDescription}</span>
            <span>Price: {product.price}</span>
            <span>Quantity: {product.quantity}</span>
            <button
              onClick={() => {
                if (product.quantity > 0) {
                  onAddProductToCart(product);
                }
              }}
              disabled={product.quantity <= 0}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
