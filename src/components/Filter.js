// Filter.js
import React from 'react';

function Filter({ selectedCategory, onCategoryChange }) {
  return (
    <select value={selectedCategory} onChange={onCategoryChange}>
      <option value="All">All</option>
      {/* Add other categories as options */}
    </select>
  );
}

export default Filter;
