import React from 'react';
import Navbar from '../Components/Navbar'; 
import HeroSection  from '../Components/HeroSection'; 
import StatsSection  from '../Components/StatsSection'; 
import BestSellerSlider  from '../Components/BestSellerSlider'; 
import NewsVideoSection from '../Components/NewsVideoSection'; 
import CategoriesSection from '../Components/CategoriesSection'; 
import FeaturesSection from '../Components/FeaturesSection'; 

import CustomerReviews from '../Components/CustomerReviews'; 
import VideoCommunity from '../Components/VideoCommunity'; 
import Footer from '../Components/Footer'; 

export default function LandingPage() {
  return (
    <div className="landing-page" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    
      <Navbar />
      
      
      <HeroSection />
      <StatsSection />
      <BestSellerSlider />
      <NewsVideoSection />
      <CategoriesSection />
      <FeaturesSection />
      <CustomerReviews />
      <VideoCommunity />
    
      <Footer />
    </div>
  );
}