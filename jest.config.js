const { defaults } = require('jest-config');


module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  transformIgnorePatterns: ['<rootDir>/jest.global.js'],
  setupFiles: ["@babel/polyfill"],
  verbose: true,
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  }
};