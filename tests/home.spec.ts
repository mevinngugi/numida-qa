import { expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { TestSetup as test } from './baseTest';  // Import the extended baseTest

test('Page has title', async ({ page }) => {
    const homePage = new HomePage(page);
    //await homePage.goto();
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle('Numida - First-Time Loan Application');
});

test('UI elements on homepage are visible @UI', async ({ page }) => {
  await expect(page.locator('#root')).toMatchAriaSnapshot(`
    - heading "First-Time Loan Application" [level=1]
    - paragraph: Welcome! Let's get you started with your loan application.
    - button "Start Application"
    `);
});