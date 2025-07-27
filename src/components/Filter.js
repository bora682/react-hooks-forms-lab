import React, { useState } from "react";

function Filter({ search, onSearchChange, selectedCategory, onCategoryChange }) {
  const [localSearch, setLocalSearch] = useState("");
  const [localCategory, setLocalCategory] = useState("All");

  const isControlledSearch = search !== undefined && onSearchChange !== undefined;
  const isControlledCategory = selectedCategory !== undefined && onCategoryChange !== undefined;

  function handleSearchChange(e) {
    const value = e.target.value;
    if (isControlledSearch) {
      onSearchChange(value);
    } else {
      setLocalSearch(value);
    }
  }

  function handleCategoryChange(e) {
    const value = e.target.value;
    if (isControlledCategory) {
      onCategoryChange(value);
    } else {
      setLocalCategory(value);
    }
  }

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={isControlledSearch ? search : localSearch}
        onChange={handleSearchChange}
      />
      <select
        name="filter"
        value={isControlledCategory ? selectedCategory : localCategory}
        onChange={handleCategoryChange}
      >
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
