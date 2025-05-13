module.exports = {
    preset: 'ts-jest', // transforme TS en JS
    testEnvironment: 'node', // tests sur Node, pas dans un navigateur
    collectCoverage: true, // activer la couverture
    coverageDirectory: 'coverage',
    coverageThreshold: {
        global: { // seuils minimaux
            lines: 90,
            statements: 90,
            branches: 45,
            functions: 70
        }
    },
    testMatch: ["**/__tests__/**/*.test.ts"], // où trouver les tests
};