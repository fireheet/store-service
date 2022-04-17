/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  clearMocks: true,
  passWithNoTests: false,
  coverageProvider: 'v8',
  testEnvironment: 'node',
  maxWorkers: '50%',
  setupFiles: ['./src/core/shared/config/inversify.config.ts'],
  moduleNameMapper: {
    '^@core/(.*)$': '<rootDir>/src/core/$1',
    '^@domain/(.*)$': '<rootDir>/src/core/domain/$1',
    '^@data/(.*)$': '<rootDir>/src/core/data/$1',
    '^@presentation/(.*)$': '<rootDir>/src/core/presentation/$1',
    '^@infra/(.*)$': '<rootDir>/src/core/infra/$1',
    '^@main/(.*)$': '<rootDir>/src/main/$1',
    '^@constants/(.*)$': '<rootDir>/src/core/config/constants/$1',
    '^@config/(.*)$': '<rootDir>/src/core/config/$1'
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
