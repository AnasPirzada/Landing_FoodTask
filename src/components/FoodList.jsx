import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import "./FoodList.css";

function FoodList({ activeCategory, searchTerm }) {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  // fetching api data

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/wilson-wego/8311b463cd331099e34a1f251dad4cbf/raw/f1b04f9afe0fcc0c9270cb486b927641b7d27436/food.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data.foods);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const filteredData = data.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.categoryId === activeCategory;
    const matchesSearchTerm = item.restaurant
      .toUpperCase()
      .startsWith(searchTerm.toUpperCase());

    return matchesCategory && matchesSearchTerm;
  });

  const handleSeeMore = () => {
    setShowAll(true);
  };

  return (
    <>
      <div className="App">
        <div className="card-container">
          {filteredData
            .slice(0, showAll ? filteredData.length : 6)
            .map((item) => (
              <Card key={item.id} {...item} />
            ))}
        </div>
      </div>
      {!showAll && filteredData.length > 6 && (
        <div className="See-Button">
          <button className="SeeMore" onClick={handleSeeMore}>
            + See More
          </button>
        </div>
      )}
    </>
  );
}

FoodList.propTypes = {
  activeCategory: PropTypes.string.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default FoodList;
