/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  setupFiles: ['./src/core/shared/config/inversify.config.ts'],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/index.ts',
    '!src/core/**/dtos/**/*.ts',
    '!src/core/**/config/**/*.ts',
    '!src/core/**/config/*.ts',
    '!src/core/**/constants/**/*.ts',
    '!src/core/**/constants/*.ts',
    '!src/core/**/views/**/*.ts',
    '!src/core/**/views/*.ts',
    '!src/core/**/domain/usecases/**/*.ts',
    '!src/core/**/data/models/**/*.ts',
    '!src/core/**/data/models/*.ts',
    '!src/core/**/enums/**/*.ts',
    '!src/core/**/types/**/*.ts',
    '!src/core/**/contracts/**/*.ts',
    '!src/main/**/config/**/*.ts',
    '!src/main/**/config/*.ts',
    '!src/main/**/constants/**/*.ts',
    '!src/main/**/constants/*.ts',
    '!src/main/**/enums/**/*.ts',
    '!src/main/**/types/**/*.ts',
    '!src/main/server.ts',
    '!src/main/routes/**/*.ts',
    '!src/main/routes/*.ts'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/requirements/',
    '/dist/'
  ],
  moduleNameMapper: {
    '^@core/(.*)$': '<rootDir>/src/core/$1',
    '^@main/(.*)$': '<rootDir>/src/main/$1'
  },
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
};
