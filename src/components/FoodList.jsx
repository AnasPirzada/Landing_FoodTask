import React from "react";
import PropTypes from "prop-types";
import { useFoodData } from "../hooks/useAllFoodData";
import Card from "./Card";
import "./FoodList.css";

function FoodList({ activeCategory, searchTerm }) {
  const {
    filteredData = [],
    visibleCount,
    handleSeeMore,
  } = useFoodData(activeCategory, searchTerm);

  return (
    <>
      <div className="App" data-testid="food-list">
        <div className="card-container">
          {filteredData.slice(0, visibleCount).map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
      {visibleCount < filteredData.length && (
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
