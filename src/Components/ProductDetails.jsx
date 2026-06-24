import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/ProductDetails.css';

const ProductDetails = ({ products = [], onProductAdd }) => {
  const { id } = useParams();

  const currentProduct = products.find(p => p.id === id);

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState("XS/S");
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    if (currentProduct) {
      const defaultColorCode = currentProduct.colors && currentProduct.colors[0] ? currentProduct.colors[0] : "#000000";
      setSelectedColor({
        name: "COLOR",
        code: defaultColorCode
      });
      setMainImage(currentProduct.image);
    }
  }, [currentProduct, id]);

  if (!currentProduct) {
    return (
      <div className="product-details-loading">
        LOADING PRODUCT DETAILS...
      </div>
    );
  }

  const productImagesAlbum = [currentProduct.image, currentProduct.hoverImage].filter(Boolean);

  const handleColorChange = (colorCode) => {
    setSelectedColor(prev => ({ ...prev, code: colorCode }));
    setMainImage(currentProduct.image); 
  };

  const handleAddToBag = () => {
    if (onProductAdd) {
      onProductAdd({
        id: currentProduct.id,
        name: currentProduct.name,
        price: currentProduct.price,
        color: selectedColor?.code === "#000000" ? "BLACK" : selectedColor?.code === "#FFFFFF" ? "WHITE" : "SELECTED COLOR",
        size: selectedSize,
        image: mainImage
      });
    }
  };

  return (
    <div className="rhea-details-page">
      <div className="rhea-gallery-container">
        <div className="rhea-main-stage">
          <img src={mainImage} alt={currentProduct.name} />
        </div>
        
        <div className="rhea-thumbnails-grid">
          {productImagesAlbum.map((img, idx) => (
            <div 
              key={idx} 
              className={`rhea-thumb-card ${mainImage === img ? 'is-active-thumb' : ''}`}
              onClick={() => setMainImage(img)}
            >
              <img src={img} alt={`thumb-${idx}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="rhea-info-container">
        <h1 className="rhea-title">{currentProduct.name}</h1>
        <p className="rhea-price">€{currentProduct.price.toFixed(2).replace('.', ',')} EUR</p>

        <div className="rhea-color-section">
          <span className="rhea-section-label">COLOR:</span>
          <div className="rhea-colors-row">
            {currentProduct.colors && currentProduct.colors.map((colorCode, idx) => (
              <button
                key={idx}
                className={`rhea-color-circle ${selectedColor?.code === colorCode ? 'active-color' : ''}`}
                style={{ backgroundColor: colorCode }}
                onClick={() => handleColorChange(colorCode)}
              />
            ))}
          </div>
        </div>

        <div className="rhea-sizes-section">
          <span className="rhea-section-label">SIZE:</span>
          <div className="rhea-sizes-row">
            {["XS/S", "S/M", "M/L"].map((size) => (
              <button 
                key={size}
                className={`rhea-size-btn ${selectedSize === size ? 'active-size' : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button className="rhea-add-to-cart-btn" onClick={handleAddToBag}>
          ADD TO CART
        </button>

        <div className="rhea-description-box">
          <h3>DESCRIPTION</h3>
          <p>
            Beautiful lace top made from the softest lace fabric. The top features an open back and ties at the back. 
            It has stretch, long sleeves, and fits beautifully to the body. The top is transparent, and the model is wearing a stick-on bra underneath.
          </p>
        </div>

        <div className="rhea-shipping-info-static">
          <p>✓ Free shipping over 130€ in EU</p>
          <p>✓ Delivery in 3–5 business days</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;