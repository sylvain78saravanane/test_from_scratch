// packages/react-app/jest.config.js
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    roots: ['<rootDir>/src'],
    setupFiles: ['<rootDir>/jest.setup.js'],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    moduleNameMapper: {
      "\\.(css|less|sass|scss)$": "<rootDir>/src/__mocks__/styleMock.js",
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/__mocks__/fileMock.js"
    },
    transform: {
      "^.+\\.(ts|tsx)$": ["ts-jest", {}]
    },
    moduleDirectories: ['node_modules', '../../node_modules'],
    transformIgnorePatterns: [
      "/node_modules/(?!msw)/"
    ]
  };