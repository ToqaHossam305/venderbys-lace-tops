import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoCloseOutline } from 'react-icons/io5';
import { VscTrash } from 'react-icons/vsc';
import '../Styles/CartBar.css';

export default function CartBar({ isOpen, onClose, cartItems = [], setCartItems }) {
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);
  const shippingCost = subtotal > 130 || subtotal === 0 ? 0 : 4.95;
  const total = subtotal + shippingCost;

  const totalQuantity = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);

  const updateQuantity = (id, size, color, amount) => {
    if (!setCartItems) return;
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id && item.size === size && item.color === color) {
          const newQty = (item.quantity || 1) + amount;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      })
    );
  };

  const removeItem = (id, size, color) => {
    if (!setCartItems) return;
    setCartItems((prevItems) =>
      prevItems.filter((item) => !(item.id === id && item.size === size && item.color === color))
    );
  };

  return (
    <>
      <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>

      <div className={`cart-drawer-container ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <span className="cart-title">CART ({totalQuantity})</span>
          <button className="cart-close-btn" onClick={onClose}>
            <IoCloseOutline />
          </button>
        </div>

        <div className="cart-body-content">
          <p className="empty-cart-msg">YOUR SELECTION</p>

          <div className="cart-quick-grid">
            <Link to="/news" className="cart-grid-btn" onClick={onClose}>NEWS</Link>
            <Link to="/most-wanted" className="cart-grid-btn" onClick={onClose}>MOST WANTED</Link>
            <Link to="/shop/lace-tops" className="cart-grid-btn" onClick={onClose}>LACE-TOP</Link>
            <Link to="/sale" className="cart-grid-btn" onClick={onClose}>SALE</Link>
          </div>

          <div className="cart-items-wrapper">
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <div key={`${item.id}-${item.size}-${item.color}-${index}`} className="cart-item-card">
                  <div className="cart-item-img-wrapper">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-item-details">
                    <h4 className="cart-item-title">{item.name}</h4>
                    <p className="cart-item-meta">COLOR: {item.color}</p>
                    <p className="cart-item-meta">SIZE: {item.size}</p>
                    
                    <div className="price-container">
                      <span className="price-current">
                        {`€${(item.price * (item.quantity || 1)).toFixed(2).replace('.', ',')} EUR`}
                      </span>
                    </div>

                    <div className="cart-actions-row">
                      <div className="quantity-controller">
                        <button className="qty-btn" onClick={() => updateQuantity(item.id, item.size, item.color, -1)}>-</button>
                        <span className="qty-number">{item.quantity || 1}</span>
                        <button className="qty-btn" onClick={() => updateQuantity(item.id, item.size, item.color, 1)}>+</button>
                      </div>

                      <button 
                        className="item-delete-btn" 
                        onClick={() => removeItem(item.id, item.size, item.color)}
                        title="Remove item"
                      >
                        <VscTrash />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p style={{ textAlign: 'center', fontSize: '12px', color: '#999', marginTop: '40px' }}>YOUR CART IS EMPTY</p>
            )}
          </div>

          <div className="cart-footer-summary">
            <div className="summary-row">
              <span>SUBTOTAL</span>
              <span>{`€${subtotal.toFixed(2).replace('.', ',')} EUR`}</span>
            </div>
            <div className="summary-row">
              <span>SHIPPING</span>
              <span>{shippingCost === 0 ? "FREE" : `€${shippingCost.toFixed(2).replace('.', ',')} EUR`}</span>
            </div>
            <div className="summary-row">
              <span>DELIVERY</span>
              <span>3–5 BUSINESS DAYS</span>
            </div>
            <div className="summary-row total-row">
              <span>TOTAL ORDER</span>
              <span>{`€${total.toFixed(2).replace('.', ',')} EUR`}</span>
            </div>
            
            <button className="luxury-buy-now-btn">BUY NOW</button>
          </div>
        </div>
      </div>
    </>
  );
}