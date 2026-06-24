import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import FilterCard from '../Components/FilterCard';
import ProductGridLaceTops from '../Components/ProductGridLaceTops';
import SeoFooter from '../Components/SeoFooter';
import Footer from '../Components/Footer';


export default function Tops({ products = [], onQuickAdd }) {
  
  const [currentSort, setCurrentSort] = useState('Featured');
  const [activeFilters, setActiveFilters] = useState({ sizes: [] });

  
  const filteredProducts = products.filter(product => {
    if (!activeFilters.sizes || activeFilters.sizes.length === 0) return true;
    
   
    return activeFilters.sizes.includes(product.size || "XS/S"); 
  });


  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (currentSort === 'Price, low to high') return a.price - b.price;
    if (currentSort === 'Price, high to low') return b.price - a.price;
    if (currentSort === 'Alphabetically, A-Z') return a.name.localeCompare(b.name);
    if (currentSort === 'Alphabetically, Z-A') return b.name.localeCompare(a.name);
    return 0; //
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '60vh', backgroundColor: '#ffffff' }}>
      
    
      <Navbar />
      
     
<header style={{ 
  padding: '60px 20px 40px 20px', 
  textAlign: 'center',
  background: '#ffffff',
  display: 'flex',
  justifyContent: 'center',     
  alignItems: 'center'
}}>
  <h1 style={{
    fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
    fontSize: '34px',
    fontWeight: '300',
    letterSpacing: '12px',
    color: '#1a1a1a',
    margin: '0',
    textTransform: 'uppercase',
    paddingLeft: '12px' 
  }}>
    LaceTOPS
  </h1>
</header>

      <main style={{ flex: '1', position: 'relative' }}>
        <FilterCard 
          onSortChange={setCurrentSort} 
          onFilterChange={setActiveFilters}
          totalItems={sortedProducts.length}
        />
        
      
        <ProductGridLaceTops products={sortedProducts} onQuickAdd={onQuickAdd} />
      </main>
      
      
      <SeoFooter />
      <Footer />
      
    </div>
  );
}