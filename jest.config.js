const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/services/(.*)$": "<rootDir>/services/$1",
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/localization/(.*)$": "<rootDir>/localization/$1",
    "^@/icons/(.*)$": "<rootDir>/public/assets/icons/$1",
    "^@/store/(.*)$": "<rootDir>/store/$1",
  },
};
module.exports = createJestConfig(customJestConfig);
