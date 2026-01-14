import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly firstTimeLoanApplicationHeading: Locator;
    readonly welcomeText: Locator;
    readonly startApplicationButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstTimeLoanApplicationHeading = page.getByRole('heading', { name: 'First-Time Loan Application' });
        this.welcomeText = page.getByText('Welcome! Let\'s get you');
        this.startApplicationButton = page.getByRole('button', { name: 'Start Application' });
    }

    async clickSendOtp() {
        await this.startApplicationButton.click();
    }
}