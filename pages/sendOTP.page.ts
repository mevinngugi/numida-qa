import { expect, type Locator, type Page } from '@playwright/test';

export class SendOtpPage {
    readonly page: Page;
    readonly pageStructure: Locator;
    readonly enterYourPhoneNumberHeading: Locator;
    readonly phoneNumberLabel: Locator;
    readonly phoneNumberInputField: Locator;
    readonly PhoneNumberErrorMessage: Locator;
    readonly sendOtpButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageStructure = page.locator('#root');
        this.enterYourPhoneNumberHeading = page.getByRole('heading', { name: 'Enter Your Phone Number' });
        this.phoneNumberLabel = page.getByText('Phone Number', { exact: true });
        this.phoneNumberInputField = page.getByRole('textbox', { name: 'Phone Number' });
        this.PhoneNumberErrorMessage = page.getByText('Invalid phone number format')
        this.sendOtpButton = page.getByRole('button', { name: 'Send OTP' });
    }

    async sendOtpPageStructure() {
        await expect(this.pageStructure).toMatchAriaSnapshot(`
    - heading "Enter Your Phone Number" [level=2]
    - text: Phone Number
    - textbox "Phone Number":
      - /placeholder: +256 700 000 000
    - button "Send OTP"
    `);
    }

    async fillValidPhoneNumber(validPhoneNumber = '+256700000000') {
        await this.phoneNumberInputField.fill(validPhoneNumber);
    }

    async fillNotValidPhoneNumber(notValidPhoneNumber = '+00') {
        await this.phoneNumberInputField.fill(notValidPhoneNumber);
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