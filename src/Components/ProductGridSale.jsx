import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/ProductGrid.css';

const ProductGridSale = ({ products = [], onQuickAdd }) => {
  const navigate = useNavigate();
  const [selectedCardColors, setSelectedCardColors] = useState({});

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleQuickAddClick = (e, product) => {
    e.stopPropagation(); 
    
    if (onQuickAdd) {
      const activeColorHex = selectedCardColors[product.id] || product.colors[0];
      
      onQuickAdd({
        id: product.id,
        name: product.name,
        price: product.price,
        color: activeColorHex === "#000000" ? "BLACK" : activeColorHex === "#FFFFFF" ? "WHITE" : "SELECTED COLOR", 
        size: product.size || "XS/S", 
        image: product.image
      });
    }
  };

  return (
    <div className="products-luxury-section">
      <div className="products-seamless-grid">
        {products.length > 0 ? (
          products.map((product) => {
            const isRedBadge = ["SALE", "SOLD OUT", "LIMITED STOCK"].includes(product.badge);
            const activeColor = selectedCardColors[product.id] || product.colors[0];

            return (
              <div key={product.id} className="product-luxury-card">
                <div className="product-image-container" onClick={() => handleProductClick(product.id)}>
                  {product.badge && (
                    <span className={`luxury-badge ${isRedBadge ? 'sale-style' : ''}`}>
                      {product.badge}
                    </span>
                  )}
                  
                  <img src={product.image} alt={product.name} className="product-luxury-img main-img" />
                  <img src={product.hoverImage} alt={`${product.name} Hover`} className="product-luxury-img hover-img" />
                  
                  <button 
                    className="luxury-quick-add-btn"
                    onClick={(e) => handleQuickAddClick(e, product)}
                  >
                    QUICK ADD
                  </button>
                </div>

                <div className="product-luxury-info">
                  <h3 className="product-luxury-title" onClick={() => handleProductClick(product.id)}>
                    {product.name}
                  </h3>
                  <p className="product-luxury-price">
                    {typeof product.price === 'number' ? `${product.price.toFixed(2).replace('.', ',')} EUR` : product.price}
                  </p>
                  
                  <div className="product-card-colors-row">
                    {product.colors && product.colors.map((color, index) => (
                      <span 
                        key={index} 
                        className={`card-color-dot ${activeColor === color ? 'is-active' : ''}`} 
                        style={{ backgroundColor: color }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCardColors(prev => ({ ...prev, [product.id]: color }));
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="no-results-luxury">NO PRODUCTS MATCH THE SELECTED FILTERS.</div>
        )}
      </div>
    </div>
  );
};

export default ProductGridSale;