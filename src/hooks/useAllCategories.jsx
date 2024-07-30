import { useState, useEffect } from "react";
export const useCategories = () => {
  const [categories, setCategories] = useState([]);

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

  return categories;
};
