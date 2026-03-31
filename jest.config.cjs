/** @type {import('jest').Config} */
const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/e2e/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    // Redirect kittens constants (uses import.meta.env) to a CJS mock
    '^../constants$': '<rootDir>/src/packages/kittens/__mocks__/constants.cjs',
  },
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: {
          verbatimModuleSyntax: false,
          module: 'CommonJS',
          resolveJsonModule: true,
          esModuleInterop: true,
        },
        diagnostics: false,
      },
    ],
  },
};

module.exports = config;
