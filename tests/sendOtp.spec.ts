import { expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { SendOtpPage } from '../pages/sendOTP.page';
import { TestSetup as test } from './baseTest';  // Import the extended baseTest

test('Key in a valid phone number @critical', async ({ page }) => { 
    const homePage = new HomePage(page);
    const sendOtpPage = new SendOtpPage(page);
    await homePage.clickStartApplication();
    await sendOtpPage.fillValidPhoneNumber();
    await expect(sendOtpPage.phoneNumberInputField).toHaveValue('+256700000000');
});

test('Key in an invalid phone number', async ({ page }) => {
    const homePage = new HomePage(page);
    const sendOtpPage = new SendOtpPage(page);
    await homePage.clickStartApplication();
    await sendOtpPage.fillNotValidPhoneNumber();
    await sendOtpPage.clickSendOtp();
    await expect(sendOtpPage.PhoneNumberErrorMessage).toBeVisible();
});

test.fixme('Accessibility test @accessibility', async ({ page }) => { 
    const homePage = new HomePage(page);
    const sendOtpPage = new SendOtpPage(page);
    await homePage.clickStartApplication();
    await sendOtpPage.fillValidPhoneNumber();
    //const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    //expect(accessibilityScanResults.violations).toEqual([]);
});

