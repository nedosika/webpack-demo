module.exports = {
    setupFilesAfterEnv: [
        "@testing-library/jest-dom/extend-expect",
        '<rootDir>/src/setupTests.js'
    ],
    testEnvironment: 'jsdom',
    transform: {
        "^.+\\.(js|ts)$": "babel-jest",
        "^.+\\.css$": "jest-transform-css",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/fileTransformer.js"
    },
    modulePaths: ['<rootDir>/src'],
}