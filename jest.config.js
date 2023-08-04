module.exports = {
    transform: {
        '^.+\\.(t|j)sx?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.json' }],
    },
    transformIgnorePatterns: [
      'node_modules/(?!(@storybook))',
    ],
    moduleDirectories: [
        '<rootDir>/node_modules',
        '<rootDir>',
      ],    
  };
  