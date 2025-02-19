const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { chromium } = require('playwright');
const LoginPage = require('../../page_objects/loginpage');
const config = require('../../config/test_config');

let browser;
let page;
let loginPage;

Given('the user navigates to the login page', async () => {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  loginPage = new LoginPage(page);
  await loginPage.navigate(config.baseURL);
});

When('the user enters valid credentials', async () => {
  await loginPage.login(config.username, config.password);
});

When('clicks the login button', async () => {
});

Then('the user should be redirected to the dashboard', async () => {
  await page.waitForURL(/dashboard/);
  expect(page.url()).toContain('dashboard');
  await browser.close();
});