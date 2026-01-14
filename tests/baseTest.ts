import { test as baseTest } from '@playwright/test';

export const TestSetup = baseTest.extend({
  page: async ({ page }, use) => {
    // beforeEach equivalent: Navigate to baseURL
    await page.goto('');
    await use(page);
    // afterAll equivalent: Close page after tests in this file
    await page.close();
  },
});