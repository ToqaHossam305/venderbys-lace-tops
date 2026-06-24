import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


import Navbar from '../Components/Navbar'; 
import BestSellerSlider from '../Components/BestSellerSlider';
import CategoriesSection from '../Components/CategoriesSection';
import CustomerReviews from '../Components/CustomerReviews';
import VideoCommunity from '../Components/VideoCommunity'; 
import Footer from '../Components/Footer'; 

const ProductDetailsPage = ({ products = [], onProductAdd }) => {
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
      <>
        <Navbar />
        <div style={{ textAlign: 'center', padding: '200px 0', fontFamily: 'Montserrat', fontSize: '14px', letterSpacing: '2px', color: '#1a1a1a' }}>
          LOADING PRODUCT DETAILS...
        </div>
        <Footer />
      </>
    );
  }

  
  const productImagesAlbum = [currentProduct.image, currentProduct.hoverImage].filter(Boolean);

  const handleColorChange = (colorCode) => {
    setSelectedColor(prev => ({ ...prev, code: colorCode }));
    setMainImage(currentProduct.image); 
  };

  const handleAddToBag = () => {
    if (onProductAdd) {
    
      const colorText = selectedColor?.code === "#000000" ? "BLACK" : selectedColor?.code === "#FFFFFF" ? "WHITE" : "SELECTED COLOR";
      
      onProductAdd({
        id: currentProduct.id,
        name: currentProduct.name,
        price: currentProduct.price,
        color: colorText,
        size: selectedSize,
        image: mainImage 
      });
    }
  };

  return (
    <div className="product-page-global-holder" style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      
    
      <Navbar />

     

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
          <p className="rhea-price">{currentProduct.price.toFixed(2).replace('.', ',')} EUR</p>

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
              Beautiful luxury garment crafted from premium selected fabrics. This piece features our signature tailored fit, detailed finishing, and elegant silhouette that adapts perfectly to the body.
            </p>
          </div>

          <div className="rhea-shipping-info-static">
            <p>✓ Free shipping over 130€ in EU</p>
            <p>✓ Delivery in 3–5 business days</p>
          </div>
        </div>
      </div>
      
      <BestSellerSlider />
      <CategoriesSection />
      <CustomerReviews />
      <VideoCommunity />
      
   
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;