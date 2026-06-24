import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
    <>
     <style>{`
  .product-details-loading {
    text-align: center;
    padding: 100px;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    letter-spacing: 2px;
    color: #1a1a1a;
  }

  .rhea-details-page {
    display: flex;
    gap: 60px;
    max-width: 1200px;
    margin: 70px auto 60px auto !important;
    padding: 0 20px;
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
  }

  .rhea-gallery-container {
    flex: 1.1;
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
  }

  .rhea-main-stage {
    width: 100%;
    height: 750px;
    background-color: #ffffff;
    overflow: hidden;
  }

  .rhea-main-stage img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .rhea-thumbnails-grid {
    display: flex;
    gap: 10px;
    overflow-x: auto;
    scrollbar-width: none;
  }

  .rhea-thumbnails-grid::-webkit-scrollbar {
    display: none;
  }

  .rhea-thumb-card {
    width: 80px;
    height: 110px;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    transition: border-color 0.3s ease;
    flex-shrink: 0;
  }

  .rhea-thumb-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .rhea-thumb-card.is-active-thumb {
    border-bottom-color: #000000;
    border-bottom-width: 2px;
  }

  .rhea-info-container {
    flex: 0.9;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .rhea-title {
    font-size: 22px;
    font-weight: 400;
    letter-spacing: 2px;
    margin: 0 0 12px 0;
    text-transform: uppercase;
    color: #1a1a1a;
    line-height: 1.4;
  }

  .rhea-price {
    font-size: 15px;
    color: #555555;
    font-weight: 500;
    margin-bottom: 25px;
    letter-spacing: 0.5px;
  }

  .rhea-section-label {
    font-size: 11px;
    letter-spacing: 1.5px;
    color: #777777;
    display: block;
    margin-bottom: 12px;
    text-transform: uppercase;
  }

  .rhea-color-section {
    margin-bottom: 30px;
    border-bottom: 1px solid #eeeeee;
    padding-bottom: 25px;
  }

  .rhea-colors-row {
    display: flex;
    gap: 12px;
  }

  .rhea-color-circle {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 1px solid #e0e0e0;
    cursor: pointer;
    transition: transform 0.2s ease;
    padding: 0;
  }

  .rhea-color-circle.active-color {
    transform: scale(1.05);
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 3.5px #1a1a1a;
  }

  .rhea-sizes-section {
    margin-bottom: 35px;
  }

  .rhea-sizes-row {
    display: flex;
    gap: 10px;
  }

  .rhea-size-btn {
    background: #ffffff;
    border: 1px solid #dddddd;
    padding: 12px 24px;
    font-size: 11px;
    letter-spacing: 1px;
    cursor: pointer;
    font-family: inherit;
    transition: all 0.2s ease;
    color: #333333;
  }

  .rhea-size-btn:hover, 
  .rhea-size-btn.active-size {
    border-color: #000000;
    background-color: #000000;
    color: #ffffff;
  }

  .rhea-add-to-cart-btn {
    width: 100%;
    background-color: #000000;
    color: #ffffff;
    border: none;
    padding: 16px 0;
    font-size: 11px;
    letter-spacing: 2px;
    font-weight: 500;
    cursor: pointer;
    margin-bottom: 45px;
    text-transform: uppercase;
    transition: background-color 0.3s ease;
  }

  .rhea-add-to-cart-btn:hover {
    background-color: #222222;
  }

  .rhea-description-box {
    border-top: 1px solid #eeeeee;
    padding-top: 25px;
    margin-bottom: 20px;
  }

  .rhea-description-box h3 {
    font-size: 12px;
    letter-spacing: 1px;
    margin-bottom: 12px;
    color: #1a1a1a;
    font-weight: 500;
  }

  .rhea-description-box p {
    font-size: 13px;
    line-height: 1.6;
    color: #555555;
    margin: 0;
  }

  .rhea-shipping-info-static p {
    font-size: 12px;
    color: #666666;
    margin: 8px 0;
    letter-spacing: 0.5px;
  }

  @media (max-width: 991px) {
    .rhea-details-page {
      gap: 40px;
      margin-top: 60px !important;
    }
    .rhea-main-stage {
      height: 600px;
    }
  }

  @media (max-width: 768px) {
    .rhea-details-page {
      flex-direction: column;
      gap: 30px;
      margin-top: 50px !important;
      padding: 0 15px;
    }
    
    .rhea-main-stage {
      height: 480px;
    }

    .rhea-title {
      font-size: 18px;
      margin-top: 10px;
    }

    .rhea-size-btn {
      flex: 1;
      padding: 12px 0;
      text-align: center;
    }
  }
`}</style>

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
    </>
  );
};

export default ProductDetails;