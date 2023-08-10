import React, { useState } from 'react';

const CategoriesPage = () => {
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <div className="categories-page">
      <header className="page-header">
        <h1>Categories</h1>
        <div className="search-icon" onClick={toggleSearch}>
          <i className="fas fa-search"></i>
        </div>
        {searchVisible && (
          <div className="search-input">
            <input type="text" placeholder="Search..." />
          </div>
        )}
      </header>
      {/* Rest of your categories content */}
    </div>
  );
};

export default CategoriesPage;
