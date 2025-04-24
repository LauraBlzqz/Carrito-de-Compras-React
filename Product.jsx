import React from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <button className="btn-add-to-cart" onClick={() => addToCart(product)}>Añadir al carrito</button>
      </div>
    </div>
  );
};

export default Product;
