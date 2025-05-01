import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class MainPage extends BasePage{
    readonly mainTitle: Locator
    readonly hamburgerMenu: Locator
    readonly cartIcon: Locator

    constructor(page: Page) {
        super(page)
        this.mainTitle = page.locator('.app_logo')
        this.hamburgerMenu = page.locator('.bm-burger-button')
        this.cartIcon = page.locator('#shopping_cart_container')
    }

    async checkMainPage() {
        console.log('Check Main Page')
        await this.checkElements(this.mainTitle)
        await this.checkElements(this.hamburgerMenu)
        await this.checkElements(this.cartIcon)
    }
}