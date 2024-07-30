import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "../components/Card";
import "@testing-library/jest-dom";
test("renders card with correct data", () => {
  const cardData = {
    name: "Test Food",
    rating: 4.5,
    minCookTime: 10,
    maxCookTime: 20,
    imageUrl:
      "https://zen.wego.com/cdn-cgi/image/width=600/web/mock/exam/drink.jpg",
    isNew: true,
    promotion: "gift",
  };

  render(<Card {...cardData} />);

  expect(screen.getByText("Test Food")).toBeInTheDocument();
  expect(screen.getByText("4.5")).toBeInTheDocument();
  expect(screen.getByText("10 - 20 min")).toBeInTheDocument();
  expect(screen.getByText("New")).toBeInTheDocument();
  expect(screen.getByAltText("icon-top-left-corner")).toBeInTheDocument();
});
