export default {
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  preset: 'react-native',
  coverageDirectory: 'coverage',
  testMatch: ['**/*.spec.ts', '**/*/.test.ts'],
  moduleNameMapper: {
    '~/tests/(.+)': '<rootDir>/tests/$1',
    '~/(.+)': '<rootDir>/src/$1',
    '~/public/(.+)': '<rootDir>/public/$1',
  },
  clearMocks: true,
};
