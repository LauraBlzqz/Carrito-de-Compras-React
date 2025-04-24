import React from 'react';

const Cart = ({ cartItems, clearCart }) => {
  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 Tu carrito</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">El carrito está vacío</p>
      ) : (
        <div>
          <ul className="cart-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <img
                  src={item.image || 'https://via.placeholder.com/50'}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>
                </div>
              </li>
            ))}
          </ul>
          <button className="btn-clear" onClick={clearCart}>
            Vaciar carrito
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
