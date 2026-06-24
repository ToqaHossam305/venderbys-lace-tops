import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/ProductGrid.css';

const ProductGridTops = ({ products = [], onQuickAdd }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const [selectedCardColors, setSelectedCardColors] = useState({});

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [products]);

  const itemsPerPage = isMobile ? 12 : 16;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => {
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

      {totalPages > 1 && (
        <div className="luxury-pagination-box">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`luxury-page-digit ${currentPage === page ? 'is-active' : ''}`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
          
          <button 
            className="luxury-next-label"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductGridTops;