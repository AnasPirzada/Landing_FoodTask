import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FoodList from "../components/FoodList";
import "@testing-library/jest-dom";
jest.mock("../hooks/useAllFoodData", () => ({
  useFoodData: jest.fn(),
}));

import { useFoodData } from "../hooks/useAllFoodData";

test("renders food list and handles see more click", async () => {
  const handleSeeMore = jest.fn();

  useFoodData.mockReturnValue({
    filteredData: [
      {
        id: "1",
        name: "Food 1",
        rating: 4.5,
        minCookTime: 10,
        maxCookTime: 20,
        imageUrl: "https://zen.wego.com/cdn-cgi/image/width=600/web/mock/exam/drink.jpg",
        isNew: true,
        promotion: "gift",
      },
      {
        id: "2",
        name: "Food 2",
        rating: 3.5,
        minCookTime: 15,
        maxCookTime: 25,
        imageUrl: "https://zen.wego.com/cdn-cgi/image/width=600/web/mock/exam/drink.jpg",
        isNew: false,
        promotion: "1+1",
      },
    ],
    visibleCount: 1,
    handleSeeMore,
  });

  render(<FoodList activeCategory="all" searchTerm="" />);

  const cards = await screen.findAllByRole("img");
  expect(cards).toHaveLength(1);

  fireEvent.click(screen.getByText("+ See More"));
  expect(handleSeeMore).toHaveBeenCalled();
});
