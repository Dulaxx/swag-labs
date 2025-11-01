import {test as setup, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage/LoginPage';
import path from 'path';

const username = process.env.VALID_USERNAME as string;
const password = process.env.VALID_PASSWORD as string;
const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('authentication', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.loginToApplication(username, password);
    console.log(username, password);
    await loginPage.verifyLoginSuccessful();
    await page.context().storageState({ path: authFile });
})