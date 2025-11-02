import { expect, Page, Locator } from "@playwright/test";
import { locators } from "./InventoryPageLocators";

export class InventoryPage {
    private readonly inventoryItemPrice: Locator;
    private readonly addToCartButton: Locator;
    private readonly shoppingCartLink: Locator;

    constructor(public page: Page) {
        this.inventoryItemPrice = page.locator(locators.inventoryItemPrice);
        this.addToCartButton = page.locator(locators.addToCartButton);
        this.shoppingCartLink = page.locator(locators.shoppingCartLink);
    }

    async navigateToInventoryPage() {
        await this.page.goto('/inventory.html/');
    }

    async getInventoryItemPrice(): Promise<string> {
        const firstPriceLocator = this.inventoryItemPrice.first();
        await expect(firstPriceLocator).toBeVisible();
        const priceText = await firstPriceLocator.innerText();
        return priceText.trim();
    }

    async addItemToCart(){
        await this.addToCartButton.click();
    }

    async goToShoppingCart(){
        await this.shoppingCartLink.click();
    }

    async verifyItemPriceInCart(expectedPrice: string){
        await expect(this.inventoryItemPrice).toHaveText(expectedPrice);
    }
}