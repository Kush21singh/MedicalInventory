import React, { useState } from 'react';
import MedicineName from './components/MedicineName';
import Description from './components/Description';
import PriceInput from './components/PriceInput';
import QuantityInput from './components/QuantityInput';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

function App() {
  const [medicineName, setMedicineName] = useState('');
  const [selectedDescription, setSelectedDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddProductToCart = (product) => {
    const existingProduct = cart.find((p) => p.medicineName === product.medicineName);

    if (existingProduct) {
      setCart(
        cart.map((p) =>
          p.medicineName === product.medicineName
            ? { ...p, quantity: p.quantity + 1 }
            : p
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    setProducts(
      products.map((p) =>
        p.medicineName === product.medicineName
          ? { ...p, quantity: p.quantity - 1 }
          : p
      )
    );
  };

  const handleAddProduct = () => {
    const newProduct = {
      medicineName,
      selectedDescription,
      price,
      quantity,
    };
    setProducts([...products, newProduct]);
    setMedicineName('');
    setSelectedDescription('');
    setPrice(0);
    setQuantity(0);
  };

  const handleRemoveFromCart = (product) => {
    const existingProduct = cart.find((p) => p.medicineName === product.medicineName);
  
    if (existingProduct) {
      if (existingProduct.quantity > 1) {
        // If the quantity is more than 1, reduce it by 1
        setCart(
          cart.map((p) =>
            p.medicineName === product.medicineName
              ? { ...p, quantity: p.quantity - 1 }
              : p
          )
        );
      } else {
        // If the quantity is 1, remove the item from the cart
        setCart(cart.filter((p) => p.medicineName !== product.medicineName));
      }
  
      // Update the product list by restoring the removed quantity
      setProducts(
        products.map((p) =>
          p.medicineName === product.medicineName
            ? { ...p, quantity: p.quantity + 1 }
            : p
        )
      );
    }
  };
  

  return (
    <div className="container">
      <div className="header">
        <h1>Medicine Inventory Management</h1>
        <button className="cart-button" onClick={() => setShowCart(!showCart)}>
          Cart ({cart.length})
        </button>
      </div>
      <div className="form">
        <MedicineName medicineName={medicineName} onSelectMedicine={e => setMedicineName(e.target.value)} />
        <Description selectedDescription={selectedDescription} onSelectDescription={e => setSelectedDescription(e.target.value)} />
        <PriceInput price={price} onPriceChange={e => setPrice(e.target.value)} />
        <QuantityInput quantity={quantity} onQuantityChange={e => setQuantity(e.target.value)} />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
      {showCart && <Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} />}
      <ProductList products={products} onAddProductToCart={handleAddProductToCart} />
    </div>
  );
}

export default App;
