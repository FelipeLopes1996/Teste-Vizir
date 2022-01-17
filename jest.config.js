module.exports = {
  coverageDirectory: "coverage",
  collectCoverage: true,
  collectCoverageFrom: [
    "src/components/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/**/*mock*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/styles/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/components/Comments/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/utils/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/template/**/*.{js,jsx,ts,tsx}",
  ],

  testEnvironment: "jsdom",
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/", "/.out/", "/public/"],

  setupFilesAfterEnv: ["<rootDir>/.jest/setup-tests.js"],
};
