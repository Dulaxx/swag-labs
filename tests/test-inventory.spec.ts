import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage/InventoryPage';

test.beforeEach(async ({ page }) => {
  await page.goto('/inventory.html/');
});

test('Verify the item price after adding to cart', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  const extractedPrice = await inventoryPage.getInventoryItemPrice();
  expect(extractedPrice).not.toBe('');
  await inventoryPage.addItemToCart();
  await inventoryPage.goToShoppingCart();
  await inventoryPage.verifyItemPriceInCart(extractedPrice);
});

/*test('test two', async ({ page }) => {
  await page.locator('[data-test="inventory-item-description"]').first().click();
  await page.locator('[data-test="item-4-title-link"]').click();
  await page.locator('[data-test="inventory-item-desc"]').click();
  await page.locator('[data-test="inventory-item-price"]').click();
  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="inventory-item-price"]').click();
});*/