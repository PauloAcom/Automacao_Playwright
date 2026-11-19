
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './',

  testMatch: '**/*.spec.js',

  fullyParallel: false,

  reporter: 'list',

  use: {
    trace: 'on',
    ignoreHTTPSErrors: true
  }
});
