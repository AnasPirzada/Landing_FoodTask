# Food Delivery Landing Page

This project is a food delivery landing page built with React and Vite, leveraging custom hooks for API interactions. It includes features such as category selection, dynamic food data display, and a search bar for filtering food items. Code linting is enforced using ESLint, and Jest is used for unit testing.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Testing](#testing)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [Contributing](#contributing)
- [License](#license)

## Features

<ul>
  <li><strong>Category Selection:</strong> Users can filter food items by selecting different categories.</li>
  <li><strong>Food Data Display:</strong> Dynamically displays food items based on the selected category.</li>
  <li><strong>Search Bar:</strong> Allows users to search for food items by name.</li>
  <li><strong>Code Linting:</strong> Ensures code quality using ESLint.</li>
  <li><strong>Unit Testing:</strong> High test coverage with Jest.</li>
</ul>



## Installation

<ol>
  <li>Clone the repository:
    <pre><code>git clone https://github.com/AnasPirzada/Landing_FoodTask.git
cd Landing_FoodTask</code></pre>
  </li>
  <li>Install dependencies:
    <pre><code>npm install</code></pre>
  </li>
  <li>Run project:
    <pre><code>npm run dev</code></pre>
  </li>
  <li>Run test cases:
    <pre><code>npm run test</code></pre>
  </li>
</ol>

## Scripts

<ul>
  <li><code>dev</code>: Starts the Vite development server.</li>
  <li><code>build</code>: Builds the project for production.</li>
  <li><code>lint</code>: Lints the codebase using ESLint.</li>
  <li><code>preview</code>: Previews the production build.</li>
  <li><code>test</code>: Runs the test suite using Jest with coverage.</li>
</ul>

## Testing

<pre><code>----------------|---------|----------|---------|---------|-------------------
File            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------|---------|----------|---------|---------|-------------------
All files       |   91.42 |    73.68 |    87.5 |   91.42 |                   
mocks           |     100 |      100 |     100 |     100 |                   
  StyleMock.jsx |     100 |      100 |     100 |     100 |                   
src/components  |   88.46 |    70.58 |   84.61 |   88.46 |                   
  Card.jsx      |     100 |       75 |     100 |     100 | 30-33             
  FoodList.jsx  |     100 |    66.66 |     100 |     100 | 9                 
  Header.jsx    |   83.33 |    66.66 |   77.77 |   83.33 | 16-17,44          
  Loader.jsx    |     100 |      100 |     100 |     100 |                   
src/pages       |     100 |      100 |     100 |     100 |                   
  MainPage.jsx  |     100 |      100 |     100 |     100 |                   
----------------|---------|----------|---------|---------|-------------------
Test Suites: 4 passed, 4 total
Tests: 5 passed, 5 total
Snapshots: 0 total
Time: 3.733 s</code></pre>

## Dependencies

<ul>
  <li>node-fetch: ^3.3.2</li>
  <li>prop-types: ^15.8.1</li>
  <li>react: ^18.3.1</li>
  <li>react-dom: ^18.3.1</li>
</ul>

## Dev Dependencies

<ul>
  <li>@babel/preset-env: ^7.25.2</li>
  <li>@babel/preset-react: ^7.24.7</li>
  <li>@testing-library/jest-dom: ^6.4.8</li>
  <li>@testing-library/react: ^16.0.0</li>
  <li>@testing-library/user-event: ^14.5.2</li>
  <li>@types/react: ^18.3.3</li>
  <li>@types/react-dom: ^18.3.0</li>
  <li>@vitejs/plugin-react: ^4.3.1</li>
  <li>babel-jest: ^29.7.0</li>
  <li>eslint: ^8.57.0</li>
  <li>eslint-config-react-app: ^7.0.1</li>
  <li>eslint-plugin-react: ^7.34.3</li>
  <li>eslint-plugin-react-hooks: ^4.6.2</li>
  <li>eslint-plugin-react-refresh: ^0.4.7</li>
  <li>identity-obj-proxy: ^3.0.0</li>
  <li>jest: ^29.7.0</li
  <li>jest-css-modules-transform: ^4.4.2</li>
  <li>jest-environment-jsdom: ^29.7.0</li>
  <li>vite: ^5.3.4</li>
  <li>vite-plugin-eslint: ^1.8.1</li>
</ul>
