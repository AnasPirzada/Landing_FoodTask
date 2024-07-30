import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import FoodList from "../components/FoodList";
import Loader from "../components/Loader";

const MainPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            setSearchTerm={setSearchTerm}
          />
          <FoodList activeCategory={activeCategory} searchTerm={searchTerm} />
        </>
      )}
    </div>
  );
};

export default MainPage;
