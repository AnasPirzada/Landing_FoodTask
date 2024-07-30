import { useState, useEffect } from "react";
export const useFoodData = (activeCategory, searchTerm) => {
  const [data, setData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [suggestions, setSuggestions] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Fetch the food data from the provided URL
    fetch(
      "https://gist.githubusercontent.com/wilson-wego/8311b463cd331099e34a1f251dad4cbf/raw/f1b04f9afe0fcc0c9270cb486b927641b7d27436/food.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data.foods);
        // Extract restaurant names for search suggestions
        const restaurantData = data.foods.map((item) => ({
          name: item.restaurant,
        }));
        setRestaurants(restaurantData);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);
  // Filter the data based on active category and search term
  const filteredData = data.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.categoryId === activeCategory;
    const matchesSearchTerm = item.restaurant
      .toUpperCase()
      .startsWith(searchTerm.toUpperCase());

    return matchesCategory && matchesSearchTerm;
  });

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };
  // Function to handle changes in the search input and update suggestions
  const handleSearchChange = (value) => {
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

  return {
    filteredData,
    visibleCount,
    handleSeeMore,
    suggestions,
    handleSearchChange,
    setSuggestions,
  };
};
