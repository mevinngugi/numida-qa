import { expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { SendOtpPage } from '../pages/sendOTP.page';
import { TestSetup as test } from './baseTest';  // Import the extended baseTest

test('Page has title', async ({ page }) => {
    //const homePage = new HomePage(page);
    //await homePage.goto();
    // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Numida - First-Time Loan Application');
});

//Check that all UI elements are visible
test('UI elements on homepage are visible @UI', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.homePageStructure();
});

//Verify that clicking on the start application button redirects the user to the Send OTP page
test('Start Application button navigates to Send OTP page @critical', async ({ page }) => {
  const homePage = new HomePage(page);
  const sendOtpPage = new SendOtpPage(page);
  await homePage.clickSendOtp();
  await sendOtpPage.sendOtpPageStructure();
});