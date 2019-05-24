module.exports = {
    verbose: true,
    notify: true,
    // testMatch: ['**/*.+(test).js'],
    coverageDirectory: 'test/results/coverage/jest',
    coverageReporters: ['html'],
    collectCoverageFrom: [
        'src/**/*.{js,jsx}',
        '!**/node_modules/**',
        '!**/*.test.js'
    ],
    coverageThreshold: {
        global: {
            statements: 90,
            branches: 90,
            lines: 90,
            functions: 90
        }
    },
    setupFiles: []
    // moduleNameMapper: {
    //     '^@/(.*)$': '<rootDir>/src/$1'
    // },
    // transformIgnorePatterns: [
    //     '/node_modules/(?!@pikselpalette/sequoia-js-client-sdk).+\\.(js|jsx)$'
    // ]
};
