module.exports = {
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    transformIgnorePatterns: ['/node_modules/(?!(module-to-transform|another-module-to-transform)/)'],
  };
  