const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './Automacao',
    use: {
        headless: false,
        locale: 'pt-BR',
        launchOptions: {
            slowMo: 2000,
        },
    },
});