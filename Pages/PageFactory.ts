import {WebDriver} from "selenium-webdriver";
import {BasePage} from "./BasePage";
import {HomePage} from "./HomePage";

export class PageFactory {
    static getPage(driver: WebDriver, pageName: string) {
        switch (pageName) {
            case "BasePage":
                return new BasePage(driver);
            case "HomePage":
                return new HomePage(driver);
            default:
                return new BasePage(driver);
        }
    }
}