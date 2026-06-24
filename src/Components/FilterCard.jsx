import React, { useState } from 'react';
import '../Styles/FilterCard.css';

const FilterCard = ({ onSortChange, onFilterChange, totalItems = 0 }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Featured');
  
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  const sortOptions = [
    'Featured',
    'Most relevant',
    'Best selling',
    'Alphabetically, A-Z',
    'Alphabetically, Z-A',
    'Price, low to high',
    'Price, high to low',
    'Date, old to new',
    'Date, new to old'
  ];

  const sizeOptions = ['XS/S', 'S/M', 'M/L'];
  
  const colorOptions = [
    { name: 'Bordeaux', hex: '#6b1d2f' },
    { name: 'Sort', hex: '#000000' },
    { name: 'Leopard', isPattern: true },
    { name: 'Black', hex: '#000000' },
    { name: 'Brown', hex: '#964B00' },
    { name: 'Burgundy', hex: '#800020' },
    { name: 'Cream', hex: '#fdfbf7' },
    { name: 'Light green', hex: '#90ee90' },
    { name: 'Light yellow', hex: '#ffffe0' }
  ];

  const handleSortSelect = (option) => {
    setSelectedSort(option);
    setIsSortOpen(false);
    if (onSortChange) onSortChange(option);
  };

  const handleSizeToggle = (size) => {
    const updated = selectedSizes.includes(size)
      ? selectedSizes.filter(s => s !== size)
      : [...selectedSizes, size];
    setSelectedSizes(updated);
    if (onFilterChange) onFilterChange({ sizes: updated, colors: selectedColors });
  };

  const handleColorToggle = (colorName) => {
    const updated = selectedColors.includes(colorName)
      ? selectedColors.filter(c => c !== colorName)
      : [...selectedColors, colorName];
    setSelectedColors(updated);
    if (onFilterChange) onFilterChange({ sizes: selectedSizes, colors: updated });
  };

  return (
    <div className="luxury-filter-sticky-nav">
      {/* شريط الفلتر المينيمال */}
      <div className="filter-left-trigger" onClick={() => setIsFilterOpen(true)}>
        <div className="filter-icon-minimal">
          <span></span>
          <span></span>
        </div>
        <span className="filter-trigger-text">Filters</span>
        {totalItems > 0 && <span className="products-total-count-label">{totalItems} products</span>}
      </div>

      <div className="sort-right-dropdown-wrapper">
        <button className="sort-trigger-btn" onClick={() => setIsSortOpen(!isSortOpen)}>
          <span>Sort by</span>
          <svg className="sort-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>

        {isSortOpen && (
          <div className="sort-dropdown-menu-list">
            {sortOptions.map((option, index) => (
              <button 
                key={index} 
                className="sort-menu-item-btn"
                onClick={() => handleSortSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* القائمة الجانبية للفلتر والـ Backdrop */}
      {isFilterOpen && <div className="filter-drawer-backdrop-blur" onClick={() => setIsFilterOpen(false)} />}
      
      <div className={`filter-sidebar-drawer ${isFilterOpen ? 'is-active' : ''}`}>
        <div className="filter-drawer-top-header">
          <h2 className="filter-drawer-main-title">Filters</h2>
          <button className="filter-drawer-close-x" onClick={() => setIsFilterOpen(false)}>✕</button>
        </div>

        <div className="filter-drawer-scrollable-body">
          {/* Size */}
          <div className="filter-block-section">
            <div className="filter-block-header-row">
              <span className="filter-block-label-title">Size</span>
              <div className="filter-block-toggle-line-icon"></div>
            </div>
            <div className="filter-options-vertical-list">
              {sizeOptions.map((size, index) => (
                <label key={index} className="filter-option-checkbox-row">
                  <input 
                    type="checkbox" 
                    className="minimal-native-checkbox"
                    checked={selectedSizes.includes(size)}
                    onChange={() => handleSizeToggle(size)}
                  />
                  <span>{size}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Color */}
          <div className="filter-block-section" style={{ borderBottom: 'none' }}>
            <div className="filter-block-header-row">
              <span className="filter-block-label-title">Color</span>
              <div className="filter-block-toggle-line-icon"></div>
            </div>
            <div className="filter-options-vertical-list">
              {colorOptions.map((color, index) => (
                <label key={index} className="filter-option-checkbox-row">
                  <input 
                    type="checkbox" 
                    className="minimal-native-checkbox"
                    checked={selectedColors.includes(color.name)}
                    onChange={() => handleColorToggle(color.name)}
                  />
                  {color.hex && (
                    <span 
                      className="color-preview-mini-circle" 
                      style={{ backgroundColor: color.hex }}
                    />
                  )}
                  <span>{color.name}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="filter-drawer-bottom-sticky-bar">
          <button className="filter-submit-view-btn" onClick={() => setIsFilterOpen(false)}>
            View items
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterCard;