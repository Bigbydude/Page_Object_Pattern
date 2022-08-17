import { Builder, By, until, WebDriver, WebElement } from "selenium-webdriver";
import Chrome from "selenium-webdriver/chrome"
import { path } from "chromedriver"
import {afterEach, beforeEach} from "mocha";
import {
    addTv,
    authForm,
    autor,
    bucket1,
    bucket2,
    catalogElectronic,
    checkBoxTv, city, city1,
    findTv,
    log1,
    pass,
    pogoda,
    samsUrl,
    searchClose,
    searchField
} from "./Locators";
import { BasePage } from "../Pages/BasePage";
import {PageFactory} from "../Pages/PageFactory";
import {HomePage} from "../Pages/HomePage";

export const service = new Chrome.ServiceBuilder(path);
let driver: WebDriver;

describe("My first suite", async () =>{

    beforeEach(async  () => {
        driver = await new Builder().forBrowser("chrome").setChromeService(service).build();
        await PageFactory.getPage(driver, "BasePage").openPage("https://onliner.by")
    })

    afterEach(async () => {
        await PageFactory.getPage(driver, "BasePage").closePage();
    });


    it("First test", async () => {

        const samsung = await PageFactory.getPage(driver, "HomePage") as HomePage;
        await samsung.findElementCss(searchField);
        await samsung.typeText(searchField, "samsung")
        await driver.switchTo().frame(1)
        await samsung.findElementCss(searchClose);
    })
    it("Second test", async () =>{

        const search = await PageFactory.getPage(driver, "HomePage") as HomePage;
        await search.findElementCss(searchField);
        await search.typeText(searchField, "samsung")
        await driver.switchTo().frame(1);
        await search.findElementCss(samsUrl);
        await search.findElementCss(bucket1);
        await search.findElementCss(bucket2);



    })

    it("Third test", async () =>{

        const catalog = await PageFactory.getPage(driver, "HomePage") as HomePage;
        await catalog.findElLinkText("Каталог")
        await catalog.jsClickCss(catalogElectronic);
        await catalog.findElXpath(findTv);
        await catalog.findElementCss(addTv);
        await catalog.jsClickXpath(checkBoxTv);


    })

    it("Fourth test", async () =>{

        const authorization = await PageFactory.getPage(driver, "HomePage") as HomePage;
        await authorization.findElementCss(autor);
        await authorization.findElementCss(log1)
        await authorization.typeText(log1,"panko.alexander@gmail.com")
        await authorization.findElementCss(pass);
        await authorization.typeText(pass, "123456");
        await authorization.findElementCss(authForm);
    })

    it("Fifth test", async () =>{

        const weather = await PageFactory.getPage(driver, "HomePage") as HomePage;
        await weather.jsClickCss(pogoda);
        await weather.findElementCss(city);
        await weather.findElXpath(city1);

})

})

