import React, { useState, useEffect } from "react";
import "./Header.css";
function Header({ activeCategory, setActiveCategory, setSearchTerm }) {
  const [categories, setCategories] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [localSearchTerm, setLocalSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // fetching all categories api

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/wilson-wego/f7381fcead7a47a7df257a97a033456a/raw/aaffe99bfa0f5d46d17b3715a3c16a1d83527db1/categories.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setCategories([{ id: "all", name: "All" }, ...data]);
      })
      .catch((error) => console.error("Error fetching categories: ", error));
  }, []);

  // fetching all search items api for search bar

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/wilson-wego/8311b463cd331099e34a1f251dad4cbf/raw/ef4e1b48002e5017dd78bbb48a2adf8a97419529/food.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const restaurantData = data.foods.map((item) => ({
          name: item.restaurant,
        }));
        setRestaurants(restaurantData);
      })
      .catch((error) => console.error("Error fetching food data: ", error));
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setLocalSearchTerm(value);

    if (value) {
      const filteredSuggestions = restaurants
        .filter((restaurant) =>
          restaurant.name.toUpperCase().startsWith(value.toUpperCase())
        )
        .map((restaurant) => restaurant.name);

      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

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
    <header className="header">
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
          onChange={handleSearchChange}
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
