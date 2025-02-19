const { defineConfig } = require('@playwright/test');
const config = require('./config/test_config');

module.exports = defineConfig({
  use: {
    baseURL: config.baseURL,
    trace: 'on',
    screenshot: 'only-on-failure',
    video: 'retry-with-video',
  },
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
  ],
});