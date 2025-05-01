import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./basePage";

export class LoginPage extends BasePage {
    
    readonly userName: Locator
    readonly passWord: Locator
    readonly loginButton: Locator
    readonly loginTitle: Locator

    constructor(page: Page) {
        super(page)
        this.userName = page.locator('#user-name')
        this.passWord = page.locator('#password')
        this.loginButton = page.locator('#login-button')
        this.loginTitle = page.locator('.login_logo')
    }    

    async checkLoginLocators() {
        await expect(this.loginTitle).toHaveText('Swag Labs')
        await expect(this.userName).toBeEnabled()
        await expect(this.loginButton).toBeVisible()
        await expect(this.passWord).toBeVisible()
    }

    async userLogin(user: string, pass: string = 'secret_sauce') {
        await this.writeOnFields(this.userName, user)
        await this.writeOnFields(this.passWord, pass)
        
        await this.clickButton(this.loginButton)
    }
} 
