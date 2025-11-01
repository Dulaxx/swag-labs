import {test as setup, expect} from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('authentication', async ({page}) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="title"]').click();
  await page.locator('[data-test="title"]').click();
  //await page.waitForResponse('https://www.saucedemo.com/?/inventory.html');
  await page.waitForURL('https://www.saucedemo.com/inventory.html');
  await page.context().storageState({ path: authFile });
})