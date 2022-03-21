module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  verbose: true,
  testMatch: ['<rootDir>/**/*(*.)+(test).+(tsx|ts)'],
  setupFilesAfterEnv: ['<rootDir>src/setup-tests.ts'],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  collectCoverage: true,
  coverageDirectory: 'target/coverage',
  collectCoverageFrom: ['src/**/*.tsx'],
};
