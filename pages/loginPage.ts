import { Page } from "@playwright/test";

export class LoginPage {
    constructor(private page: Page) {
        
    }
    get userName() {
        return this.page.locator('[data-test="username"]');
    }

        get password() {
        return this.page.locator('[data-test="password"]');
    }

            get loginButton() {
        return this.page.locator('[data-test="login-button"]');
    }

    async loginAsStandardUser (userName: string, password: string) {
        await this.userName.fill(userName);
        await this.password.fill(password);
           await this.loginButton.click();
    }
}