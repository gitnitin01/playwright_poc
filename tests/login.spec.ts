import { expect, test } from "@playwright/test";
import PracticeTestLoginPage from "../pages/PracticeTestLoginPage";
import LoginTestData from "../fixtures/LoginTestData";

// Positive Login Tests
test.describe('Positive Login Tests  @login @positive', async () => {
    // TC01 - Verify user is able to login with valid username and password
    test('TC01 - Verify user is able to login with valid username and password', async ({page}) => {
        const practiceTestLoginPage = new PracticeTestLoginPage(page);
        await practiceTestLoginPage.visit();

        // Perform login with valid username and password
        await practiceTestLoginPage.performLogin(LoginTestData.validUserName, LoginTestData.validPassword);

        // Assertion checks for successful login
        await expect(page.url()).toContain(LoginTestData.loggedInSuccessfullyUrl);
        await expect(practiceTestLoginPage.loggedInSuccessfullyComponent.loggedInSuccessFullyMsg).toBeVisible();
        await expect(practiceTestLoginPage.loggedInSuccessfullyComponent.loggedInSuccessFullyMsg).toHaveText(LoginTestData.loggedInSuccessfullyMsg);
        await expect(practiceTestLoginPage.loggedInSuccessfullyComponent.logOutBtn).toBeVisible();
    })
})

// Negative Login Tests
test.describe('Negative Login Tests @login @negative', async () => {
    // TC02 - Negative username test
    test('TC02 - Negative username test', async ({page}) => {
        const practiceTestLoginPage = new PracticeTestLoginPage(page);
        await practiceTestLoginPage.visit();

        // Perform login with invalid username and valid password
        await practiceTestLoginPage.performLogin(LoginTestData.invalidUserName, LoginTestData.validPassword);

        // Assertion checks for error message due to invalid username
        await expect(practiceTestLoginPage.errorMessage).toBeVisible();
        await expect(practiceTestLoginPage.errorMessage).toHaveText(LoginTestData.invalidUsernameErrorMsg);
    })

    // TC03 - Negative password test
    test('TC03 - Negative password test', async ({page}) => {
        const practiceTestLoginPage = new PracticeTestLoginPage(page);
        await practiceTestLoginPage.visit();

        // Perform login with valid username and incorrect password
        await practiceTestLoginPage.performLogin(LoginTestData.validUserName, LoginTestData.incorrectPassword);

        // Assertion checks for error message due to invalid password
        await expect(practiceTestLoginPage.errorMessage).toBeVisible();
        await expect(practiceTestLoginPage.errorMessage).toHaveText(LoginTestData.invalidPasswordErrorMsg);
    })

    // TC04 - Verify Login with Valid Password (Case Sensitivity)
    test('TC04 - Verify Login with Valid Password (Case Sensitivity)', async ({page}) => {
        const practiceTestLoginPage = new PracticeTestLoginPage(page);
        await practiceTestLoginPage.visit();

        // Perform login with valid username and password with different casing
        await practiceTestLoginPage.performLogin(LoginTestData.validUserName, LoginTestData.validPassword.toLowerCase());

        // Assertion checks for error message due to case sensitivity of password
        await expect(practiceTestLoginPage.errorMessage).toBeVisible();
        await expect(practiceTestLoginPage.errorMessage).toHaveText(LoginTestData.invalidPasswordErrorMsg);
    })

    // TC05 - Verify Login with Valid Username (Case Sensitivity)
    test('TC05 - Verify Login with Valid Username (Case Sensitivity)', async ({page}) => {
        const practiceTestLoginPage = new PracticeTestLoginPage(page);
        await practiceTestLoginPage.visit();

        // Perform login with valid username and username with different casing
        await practiceTestLoginPage.performLogin(LoginTestData.validUserName.toUpperCase(), LoginTestData.validPassword);

        // Assertion checks for error message due to case sensitivity of username
        await expect(practiceTestLoginPage.errorMessage).toBeVisible();
        await expect(practiceTestLoginPage.errorMessage).toHaveText(LoginTestData.invalidUsernameErrorMsg);
    })

    // TC06 - Verify Login with Valid Username and Valid Password (Case Sensitivity)
    test('TC06 - Verify Login with Valid Username and Valid Password (Case Sensitivity)', async ({page}) => {
        const practiceTestLoginPage = new PracticeTestLoginPage(page);
        await practiceTestLoginPage.visit();

        // Perform login with valid username and password with different casing
        await practiceTestLoginPage.performLogin(LoginTestData.validUserName.toUpperCase(), LoginTestData.validPassword.toUpperCase());

        // Assertion checks for error message due to case sensitivity of username and password
        await expect(practiceTestLoginPage.errorMessage).toBeVisible();
        await expect(practiceTestLoginPage.errorMessage).toHaveText(LoginTestData.invalidUsernameErrorMsg);
    })

    // TC07 - Enter a username with special characters and a valid password
    test('TC07 - Enter a username with special characters and a valid password', async ({page}) => {
        const practiceTestLoginPage = new PracticeTestLoginPage(page);
        await practiceTestLoginPage.visit();

        // Perform login with username containing special characters and valid password
        await practiceTestLoginPage.performLogin(LoginTestData.validUserNameWithSpecialChar, LoginTestData.validPassword);

        // Assertion checks for error message due to special characters in username
        await expect(practiceTestLoginPage.errorMessage).toBeVisible();
        await expect(practiceTestLoginPage.errorMessage).toHaveText(LoginTestData.invalidUsernameErrorMsg);
    })

    // TC08 - Attempt login with a valid username and an empty password field
    test('TC08 - Attempt login with a valid username and an empty password field', async ({page}) => {
        const practiceTestLoginPage = new PracticeTestLoginPage(page);
        await practiceTestLoginPage.visit();

        // Perform login with valid username and empty password
        await practiceTestLoginPage.performLogin(LoginTestData.validUserName, '');
        
        // Assertion checks for error message due to empty password
        await expect(practiceTestLoginPage.errorMessage).toBeVisible();
        await expect(practiceTestLoginPage.errorMessage).toHaveText(LoginTestData.invalidPasswordErrorMsg);
    })
})
