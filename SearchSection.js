import React from "react";

const SearchSection = ({
  searchTerm,
  onSearchChange,
  filterOption,
  onFilterChange,
  defaultSearchValue = "",
}) => {
  return (
    <div className="search-section">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search"
          value={defaultSearchValue || searchTerm}
          onChange={onSearchChange}
        />
      </div>
      <div className="filter-options">
        <label>
          <input
            type="radio"
            name="filter"
            value="title"
            checked={filterOption === "title"}
            onChange={onFilterChange}
          />{" "}
          Title
        </label>
        <label>
          <input
            type="radio"
            name="filter"
            value="author"
            checked={filterOption === "author"}
            onChange={onFilterChange}
          />{" "}
          Author
        </label>
        <label>
          <input
            type="radio"
            name="filter"
            value="publisher"
            checked={filterOption === "publisher"}
            onChange={onFilterChange}
          />{" "}
          Publisher
        </label>
        <label>
          <input
            type="radio"
            name="filter"
            value="titleYear"
            checked={filterOption === "titleYear"}
            onChange={onFilterChange}
          />{" "}
          Title & year
        </label>
        <label>
          <input
            type="radio"
            name="filter"
            value="year2018"
            checked={filterOption === "year2018"}
            onChange={onFilterChange}
          />{" "}
          2018
        </label>
      </div>
    </div>
  );
};

export default SearchSection;
