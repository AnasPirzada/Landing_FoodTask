import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom"; // Import jest-dom matchers
import MainPage from "../pages/MainPage";

// Mock the hooks used in the MainPage component
jest.mock("../hooks/useAllCategories", () => ({
  useCategories: () => [
    { id: 1, name: "Category 1" },
    { id: 2, name: "Category 2" },
  ],
}));

jest.mock("../hooks/useAllFoodData", () => ({
  useFoodData: () => ({
    filteredData: [
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
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
