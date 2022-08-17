import {BasePage} from "./BasePage";
import {By, until, WebDriver, WebElement} from "selenium-webdriver";
import {searchField} from "../tests/Locators";

export class HomePage extends BasePage {
    constructor(protected driver: WebDriver) {
        super(driver);
    }

    async findElementCss(locator: string) {
        await this.driver.wait(until.elementLocated(By.css(locator)), 5000);
        const elementCss: WebElement = await this.driver.findElement(By.css(locator));
        await elementCss.click();
    }

    async typeText(locator: string, type: string) {
        const elementCss: WebElement = await this.driver.findElement(By.css(locator));
        await this.driver.wait(until.elementLocated(By.css(locator)), 5000);
        await elementCss.sendKeys(type);

    }

    async findElLinkText(locator: string) {
        await this.driver.wait(until.elementLocated(By.linkText(locator)), 5000);
        const elementText: WebElement = await this.driver.findElement(By.linkText(locator));
        await elementText.click();
    }

    async jsClickCss (locator: string) {
        await this.driver.wait(until.elementLocated(By.css(locator)), 5000);
        const elementCss: WebElement = await this.driver.findElement(By.css(locator));
        await this.driver.executeScript("arguments[0].click()", elementCss);
    }

    async findElXpath(locator: string) {
        await this.driver.wait(until.elementLocated(By.xpath(locator)), 5000);
        const elementCss: WebElement = await this.driver.findElement(By.xpath(locator));
        await elementCss.click();
    }

    async jsClickXpath (locator: string) {
        await this.driver.wait(until.elementLocated(By.xpath(locator)), 5000);
        const elementCss: WebElement = await this.driver.findElement(By.xpath(locator));
        await this.driver.executeScript("arguments[0].click()", elementCss);
    }
}