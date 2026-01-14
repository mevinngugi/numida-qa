import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly pageStructure: Locator;
    readonly firstTimeLoanApplicationHeading: Locator;
    readonly welcomeText: Locator;
    readonly startApplicationButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageStructure = page.locator('#root');
        this.firstTimeLoanApplicationHeading = page.getByRole('heading', { name: 'First-Time Loan Application' });
        this.welcomeText = page.getByText('Welcome! Let\'s get you');
        this.startApplicationButton = page.getByRole('button', { name: 'Start Application' });
    }

    async homePageStructure() {
        await expect(this.pageStructure).toMatchAriaSnapshot(`
        - heading "First-Time Loan Application" [level=1]
        - paragraph: Welcome! Let's get you started with your loan application.
        - button "Start Application"
    `);
    }

    async clickStartApplication() {
        await this.startApplicationButton.click();
    }
}