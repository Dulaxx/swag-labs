import {test as setup, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage/LoginPage';
import path from 'path';

const username = process.env.VALID_USERNAME;
const password = process.env.VALID_PASSWORD;
const authFile = path.join(__dirname, '../playwright/.auth/user.json');

if (!username || !password) {
    throw new Error('VALID_USERNAME and VALID_PASSWORD must be set in environment variables');
}

setup('authentication', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.loginToApplication(username, password);
    await loginPage.verifyLoginSuccessful();
    await page.context().storageState({ path: authFile });
})