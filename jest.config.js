module.exports = {
  verbose: true,
  preset: 'react-native',
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/jest.setup.js'],
  transformIgnorePatterns: ['/node_modules/*.js'],
  setupFilesAfterEnv: [
    '<rootDir>/__mocks__/react-navigation'
  ]
};
