import { test as base, Page } from '@playwright/test'
import { LoginPage } from './utils/loginPage'

export type TestOptions = {
    StandardUserLogin: string
    LockedOutUserLogin: string
    VisualUserLogin: string
}

async function performUILogin(page: Page, user: string) {
    await page.reload();
    const loginPage = new LoginPage(page);
    await loginPage.userLogin(user)
    await page.waitForLoadState('networkidle')
}

export const test = base.extend<TestOptions>({
    
    StandardUserLogin: async({page}, use) => {
        try {
            await page.goto('/')
            await performUILogin(page, 'standard_user')
            await use('')
        } catch(error) {
            console.error('Error during standard user login: ', error);
            throw error;
        }
    },
    LockedOutUserLogin: async({page}, use) => {
        try {
            await page.goto('/')
            await performUILogin(page, 'locked_out_user')
            await use('')
        } catch(error) {
            console.error('Error during locked out user login: ', error);
            throw error;
        }
    },
    VisualUserLogin: async({page}, use) => {
        try {
            await page.goto('/')
            await performUILogin(page, 'visual_user')
            await use('')
        } catch(error) {
            console.error('Error during visual user login: ', error);
            throw error;
        }
    }
})