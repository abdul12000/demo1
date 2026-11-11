import { Page, expect } from "@playwright/test";

export class ProductsPage {
    constructor(private page: Page) {
        
    }
    get backpack() {
        return this.page.locator('[data-test="item-4-title-link"] [data-test="inventory-item-name"]');
    }

        get addToCartBackpack() {
        return this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    }


    async getBackpackLabel () {
        return await this.backpack.textContent();

    }

        async addBackpackToBassket () {
           await this.addToCartBackpack.click();
    }
     
    async verifyLoginSuccess() {
        await expect(this.page).toHaveURL(/inventory.html/);
    }
}
