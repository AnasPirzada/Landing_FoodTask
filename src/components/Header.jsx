import React, { useState } from "react";
import { useCategories } from "../hooks/useAllCategories";
import { useFoodData } from "../hooks/useAllFoodData";
import "./Header.css";

function Header({ activeCategory, setActiveCategory, setSearchTerm }) {
  const categories = useCategories();
  const { suggestions, handleSearchChange, setSuggestions } = useFoodData(
    activeCategory,
    ""
  );

  const [localSearchTerm, setLocalSearchTerm] = useState("");

  const handleSearchSubmit = () => {
    setSearchTerm(localSearchTerm);
    setSuggestions([]);
  };

  const handleSuggestionClick = (suggestion) => {
    setLocalSearchTerm(suggestion);
    setSearchTerm(suggestion);
    setSuggestions([]);
  };

  return (
    <header className="header" data-testid="header">
      <div className="search-bar">
        <img
          src="/search-alt-1-svgrepo-com.svg"
          className="search-icon"
          alt="Search"
          onClick={handleSearchSubmit}
        />
        <input
          type="text"
          placeholder="Enter restaurant name..."
          className="inside-search"
          value={localSearchTerm}
          onChange={(e) => {
            setLocalSearchTerm(e.target.value);
            handleSearchChange(e.target.value);
          }}
          onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit()}
        />
        {suggestions.length > 0 && (
          <div className="suggestions-list">
            {suggestions.map((suggestion, index) => (
              <p
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="suggestion-item"
              >
                {suggestion}
              </p>
            ))}
          </div>
        )}
      </div>

      <div className="categories">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category ${
              activeCategory === category.id ? "category-active" : ""
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </header>
  );
}

export default Header;
