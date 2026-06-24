import React from 'react';
import Navbar from '../Components/Navbar'; 
import ProductDetails from '../Components/ProductDetails'; 
import BestSellerSlider from '../Components/BestSellerSlider';
import CategoriesSection from '../Components/CategoriesSection';
import CustomerReviews from '../Components/CustomerReviews';
import VideoCommunity from '../Components/VideoCommunity'; 
import Footer from '../Components/Footer'; 

const ProductDetailsPage = ({ products = [], onProductAdd }) => {
  return (
    <div className="product-page-global-holder" style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <Navbar />

      <ProductDetails products={products} onProductAdd={onProductAdd} />
      
      <BestSellerSlider />
      <CategoriesSection />
      <CustomerReviews />
      <VideoCommunity />
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;