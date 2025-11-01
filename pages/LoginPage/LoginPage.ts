import { expect, Page, Locator } from "@playwright/test";
import { locators } from "./LoginPageLocators";

export class LoginPage {
    private readonly userNameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly signInButton: Locator;

    constructor(public page: Page) {
        this.userNameInput = page.locator(locators.userName);
        this.passwordInput = page.locator(locators.password);
        this.signInButton = page.locator(locators.loginButton);
    }

    async navigateToLoginPage() {
        await this.page.goto('/');
    }
    
    async loginToApplication(username: string, password: string) {
        await this.userNameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.signInButton.click();
        await this.page.waitForLoadState("networkidle");
    }

    async verifyLoginSuccessful() {
        await expect(this.page).toHaveURL(/inventory.html/);
    }

    


}