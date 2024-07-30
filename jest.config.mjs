export default {
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/mocks/StyleMock.jsx",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(your-module-to-transform|another-module-to-transform)/)",
  ],
  moduleFileExtensions: ["js", "jsx", "json", "node"],
};
