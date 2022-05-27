module.exports = {
    moduleDirectories: [
        'node_modules',
        // +   // add the directory with the test-utils.js file, for example:
        //     +   'utils', // a utility folder
        // +    __dirname, // the root directory
    ],
    // ... other options ...
    setupFilesAfterEnv: [
        "@testing-library/jest-dom/extend-expect",
        '<rootDir>/setUpTests.js'
    ],
    testEnvironment: 'jsdom',
    transform: {
        "^.+\\.(js|ts)$": "babel-jest",
        "^.+\\.css$": "jest-transform-css",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/fileTransformer.js"
    },
}