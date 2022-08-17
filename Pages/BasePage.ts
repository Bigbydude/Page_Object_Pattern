import {Builder, WebDriver, WebElement} from "selenium-webdriver";
import {service} from "../tests/first_test.spec";

export class BasePage {

    constructor(protected driver: WebDriver) {}

    async openPage(url: string) {
        await this.driver.manage().window().maximize();
        await this.driver.get(url);
    }
    async closePage() {
        await this.driver.close();
    }

}