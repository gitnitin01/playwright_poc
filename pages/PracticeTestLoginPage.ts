import { Locator, Page } from "@playwright/test";
import LoggedInSuccessfullyComponent from "./components/LoggedInSuccessfullyComponent";

export default class PracticeTestLoginPage {
    private page: Page;

    public readonly loggedInSuccessfullyComponent: LoggedInSuccessfullyComponent;

    public readonly usernameInputField: Locator;
    public readonly passwordInputField: Locator;
    public readonly loginBtn: Locator;
    public readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInputField = page.getByLabel('Username');
        this.passwordInputField = page.getByLabel('Password');
        this.loginBtn = page.getByRole('button', { name: 'Submit' });
        this.errorMessage = page.locator('#error');
        
        this.loggedInSuccessfullyComponent = new LoggedInSuccessfullyComponent(page);
    }
    public async visit() {
        await this.page.goto('/practice-test-login/');
    }

    public async performLogin(username: string, password: string) {
        await this.usernameInputField.fill(username);
        await this.passwordInputField.fill(password);
        await this.loginBtn.click();
    }
}