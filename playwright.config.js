const { defineConfig, devices } = require('@playwright/test');
const { defineBddConfig } = require('playwright-bdd');

const testDir = defineBddConfig({
    features: './Automacao/GCONF/Feature/**/*.feature',
    steps: './Automacao/GCONF/Steps/**/*.steps.js',
});

module.exports = defineConfig({
    testDir,
    timeout: 40000,
    use: {
        headless: false,
        locale: 'pt-BR',
        launchOptions: {
            slowMo: 2000,
        },
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ],
});