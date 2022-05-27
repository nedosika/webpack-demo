module.exports = {
    moduleDirectories: [
        'node_modules',
        // +   // add the directory with the test-utils.js file, for example:
        //     +   'utils', // a utility folder
        // +    __dirname, // the root directory
    ],
    // ... other options ...
    //setupFilesAfterEnv: ['<rootDir>/setUpTests.js'],
    "setupFilesAfterEnv": [ "@testing-library/jest-dom/extend-expect" ],
    testEnvironment: 'jsdom'
}