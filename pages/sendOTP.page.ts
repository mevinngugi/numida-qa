import { expect, type Locator, type Page } from '@playwright/test';

export class SendOtpPage {
    readonly page: Page;
    readonly enterYourPhoneNumberHeading: Locator;
    readonly phoneNumberLabel: Locator;
    readonly phoneNumberInputField: Locator;
    readonly sendOtpButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.enterYourPhoneNumberHeading = page.getByRole('heading', { name: 'Enter Your Phone Number' });
        this.phoneNumberLabel = page.getByText('Phone Number', { exact: true });
        this.phoneNumberInputField = page.getByRole('textbox', { name: 'Phone Number' });
        this.sendOtpButton = page.getByRole('button', { name: 'Send OTP' });
    }

    async fillPhoneNumber(phoneNumber: string) {
        await this.phoneNumberInputField.fill(phoneNumber);
    }
    
    async clickSendOtp() {
        await this.sendOtpButton.click();
    }

    // async getStarted() {
    //     await this.getStartedLink.first().click();
    //     await expect(this.gettingStartedHeader).toBeVisible();
    // }

    // async pageObjectModel() {
    //     await this.getStarted();
    //     await this.pomLink.click();
    // }
}