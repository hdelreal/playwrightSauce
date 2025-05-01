import { Locator, Page, expect } from "@playwright/test";

export class BasePage {

    constructor (page: Page) {

    }

    async writeOnFields(locator: Locator, word: string) {
        await expect(locator).toBeEditable()
        await locator.clear()
        await locator.fill(word)
    }

    async clickButton(locator: Locator) {
        await expect(locator).toBeEnabled()
        await this.clickElements(locator)
    }

    async checkElements(locator: Locator) {
        await expect(locator).toBeVisible()
    }

    async clickElements(locator: Locator) {
        await expect(locator).toBeVisible()
        await locator.click()
    }
}