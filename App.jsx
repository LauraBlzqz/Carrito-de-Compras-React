import React, { useState } from 'react';
import Product from './components/Product';
import Cart from './components/Cart';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const products = [
    {
      name: 'Zapatos Modernos',
      description: 'Cómodos y con estilo para cualquier ocasión.',
      price: 59.99,
      image: 'https://images.unsplash.com/photo-1600180758890-6ecb5c579a3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60',
    },
    {
      name: 'Camiseta Básica',
      description: 'Ideal para el verano, 100% algodón.',
      price: 19.99,
      image: 'https://images.unsplash.com/photo-1585386959984-a4155224c28a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60',
    },
    {
      name: 'Mochila Urbana',
      description: 'Ligera, práctica y con mucho estilo.',
      price: 39.99,
      image: 'https://images.unsplash.com/photo-1580910051073-ea1c8853d925?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60',
    },
  ];
  
  

  const addToCart = (product) => setCart([...cart, product]);
  const clearCart = () => setCart([]);

  return (
    <div className="App fade-in">
      <h1 className="title">🛍️ Mi Tienda React</h1>
      <div className="products">
        {products.map((product, i) => (
          <Product key={i} product={product} addToCart={addToCart} />
        ))}
      </div>
      <Cart cartItems={cart} clearCart={clearCart} />
    </div>
  );
};

export default App;
