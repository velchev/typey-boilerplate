module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|scss|less|png)$': 'identity-obj-proxy',
    '\\^(.*)$': '<rootDir>/src/$1',
    '^\\^images(.*)$': '<rootDir>/static/images/$1',
  },
  modulePaths: ['<rootDir>'],
  verbose: true,
  testMatch: ['<rootDir>/**/*(*.)+(test).+(tsx|ts)'],
  setupFilesAfterEnv: ['<rootDir>/src/helpers/setup-tests.ts'],
  moduleFileExtensions: ['js', 'ts', 'tsx', ''],
  roots: ['<rootDir>'],
  moduleDirectories: ['.', 'node_modules'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  coveragePathIgnorePatterns: [
    'node_modules',
    '<rootDir>/src/helpers',
    '<rootDir>/src/@types',
  ],
};
