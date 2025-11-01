import { test, expect } from '@playwright/test';

test('test one', async ({ page }) => {
  await page.locator('[data-test="inventory-item-description"]').first().click();
  await page.locator('[data-test="item-4-title-link"]').click();
  await page.locator('[data-test="inventory-item-desc"]').click();
  await page.locator('[data-test="inventory-item-price"]').click();
  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="inventory-item-price"]').click();
});

test('test two', async ({ page }) => {
  await page.locator('[data-test="inventory-item-description"]').first().click();
  await page.locator('[data-test="item-4-title-link"]').click();
  await page.locator('[data-test="inventory-item-desc"]').click();
  await page.locator('[data-test="inventory-item-price"]').click();
  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="inventory-item-price"]').click();
});