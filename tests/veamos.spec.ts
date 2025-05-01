import {test, Page} from '@playwright/test';
import { LoginPage } from '../utils/loginPage';
import { MainPage } from '../utils/mainPage';


test.only('Login test', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const mainPage = new MainPage(page)

    console.log('Check elements in page')
    await page.goto('/')
    
    await loginPage.checkLoginLocators()
    await loginPage.userLogin('standard_user')
    await mainPage.checkMainPage()
});