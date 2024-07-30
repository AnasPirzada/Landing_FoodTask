import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom"; // Import jest-dom matchers
import MainPage from "../pages/MainPage";

// Mock the hooks used in the MainPage component
jest.mock("../hooks/useAllCategories", () => ({
  useCategories: () => [
    { id: "6288a89f1f0152b8c2cd512b", name: "Sushi" },
    { id: "6288a89f7338764f2071a8a8", name: "Pizza" },
    { id: "6288a89f70dc8cf93b71609b", name: "Hot Meals" },
    { id: "6288a89fe6c2fe0b758360fe", name: "Desserts" },
    { id: "6288a89fac9e970731bfaa7b", name: "Drinks" },
  ],
}));

jest.mock("../hooks/useAllFoodData", () => ({
  useFoodData: () => ({
    filteredData: [
      {
        id: "628b5decc94a27754f30e6f1",
        index: 0,
        rating: 3.9508,
        promotion: "gift",
        isNew: false,
        categoryId: "6288a89fac9e970731bfaa7b",
        minCookTime: 80,
        maxCookTime: 100,
        restaurant: "Niquent",
        name: "Niquent Drinks",
        imageUrl:
          "https://zen.wego.com/cdn-cgi/image/width=600/web/mock/exam/drink.jpg",
      },
      {
        id: "628b5decf39bcc4e982fc88a",
        index: 1,
        rating: 4.9874,
        promotion: "1+1",
        isNew: false,
        categoryId: "6288a89f1f0152b8c2cd512b",
        minCookTime: 120,
        maxCookTime: 140,
        restaurant: "Boilicon",
        name: "Boilicon Shushi",
        imageUrl:
          "https://zen.wego.com/cdn-cgi/image/width=600/web/mock/exam/sushi.jpg",
      },
    ],
    visibleCount: 2,
    handleSeeMore: jest.fn(),
    suggestions: [],
    handleSearchChange: jest.fn(),
    setSuggestions: jest.fn(),
  }),
}));

test("renders loader and then main content", async () => {
  render(<MainPage />);

  // Initially, loader should be present
  expect(screen.getByTestId("loader")).toBeInTheDocument();

  // Wait for the loading state to change
  await waitFor(
    () => {
      expect(screen.queryByTestId("loader")).not.toBeInTheDocument();
    },
    { timeout: 3000 }
  ); // Adjust the timeout to ensure enough time for state transition

  // Now the header and food list should be present
  expect(screen.getByTestId("header")).toBeInTheDocument();
  expect(screen.getByTestId("food-list")).toBeInTheDocument();
});
