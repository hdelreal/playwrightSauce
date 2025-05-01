import { test } from '../test-options';
import { MainPage } from '../utils/mainPage';


test.only('Login test', async ({ page, StandardUserLogin,  VisualUserLogin}) => {
    const mainPage = new MainPage(page)

    console.log('Check elements in page')
    
    await mainPage.checkMainPage()
});