import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../components/Header";

// Mock functions
const mockSetActiveCategory = jest.fn();
const mockSetSearchTerm = jest.fn();

jest.mock("../hooks/useAllCategories", () => ({
  useCategories: () => [
    { id: "1", name: "Category 1" },
    { id: "2", name: "Category 2" },
  ],
}));

jest.mock("../hooks/useAllFoodData", () => ({
  useFoodData: () => ({
    suggestions: ["Suggestion 1", "Suggestion 2"],
    handleSearchChange: jest.fn(),
    setSuggestions: jest.fn(),
  }),
}));

test("renders header and handles category click", () => {
  render(
    <Header
      activeCategory="1"
      setActiveCategory={mockSetActiveCategory}
      setSearchTerm={mockSetSearchTerm}
    />
  );

  const categoryButtons = screen.getAllByRole("button");
  expect(categoryButtons).toHaveLength(2);

  fireEvent.click(categoryButtons[1]);
  expect(mockSetActiveCategory).toHaveBeenCalledWith("2");
});

test("handles search input and suggestion click", () => {
  render(
    <Header
      activeCategory="1"
      setActiveCategory={mockSetActiveCategory}
      setSearchTerm={mockSetSearchTerm}
    />
  );

  const searchInput = screen.getByPlaceholderText("Enter restaurant name...");
  fireEvent.change(searchInput, { target: { value: "Sugg" } });

  const suggestions = screen.getAllByText(/Suggestion/);
  expect(suggestions).toHaveLength(2);

  fireEvent.click(suggestions[0]);
  expect(mockSetSearchTerm).toHaveBeenCalledWith("Suggestion 1");
});
