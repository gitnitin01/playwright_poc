import { Locator, Page } from "@playwright/test";

export default class LoggedInSuccessfullyComponent {
    public readonly loggedInSuccessFullyMsg: Locator;
    public readonly logOutBtn: Locator;

    constructor(page: Page) {
        this.loggedInSuccessFullyMsg = page.locator('h1.post-title')
        this.logOutBtn =  page.getByRole('link', { name: 'Log out' })
    }

    public async userLogOut() {
        await this.logOutBtn.click();
    }
}