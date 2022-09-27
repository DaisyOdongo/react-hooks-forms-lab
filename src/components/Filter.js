import React from "react";

function Filter({ onCategoryChange, entry, onSearchChange }) {
  return (
    <div className="Filter">
      <input 
      type="text" 
      name="search" 
      placeholder="Search..."  
      value={entry} onChange={(e) =>onSearchChange(e.currentTarget.value)}/>
      <select name="filter" onChange={onSearchChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
