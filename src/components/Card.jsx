import React from 'react';
import PropTypes from "prop-types";
import "./Card.css";

function Card({
  name,
  rating,
  minCookTime,
  maxCookTime,
  imageUrl,
  isNew,
  promotion,
}) {
  return (
    <div className="card">
      {/* main image */}
      <div
        className="headimage"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {/* icon on top left corner */}
        <div>
          {promotion === "gift" && (
            <img
              className="card-left-icon"
              src="/gift-svgrepo-com.svg"
              alt="icon-top-left-corner"
            />
          )}
          {promotion === "1+1" && (
            <span className="card-left-one-icon">1 + 1</span>
          )}
          {promotion === "discount" && (
            <span className="card-left-one-icon">%</span>
          )}
        </div>
      </div>

      <div className="card-details">
        <h2>{name}</h2>

        <div className="tags">
          {/* star with rating */}
          <span className="star-rating">
            <img
              src="/star-rate-svgrepo-com.svg"
              className="star-rating-img"
              alt=""
            />{" "}
            {rating}
          </span>
          {/* min and max cook time */}
          <p className="tag-time">
            {minCookTime} - {maxCookTime} min
          </p>
          {/* new tag */}
          <p className="">{isNew && <span className="tag-new">New</span>}</p>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  minCookTime: PropTypes.number.isRequired,
  maxCookTime: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  isNew: PropTypes.bool,
  promotion: PropTypes.string,
};

export default Card;
