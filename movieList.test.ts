import { Builder, Capabilities, By, WebDriver} from "selenium-webdriver";




const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()



beforeAll(async () => {
    await driver.get('http://127.0.0.1:5501/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('I can add a movie to a page', async () => {
    
    let searchBar = await driver.findElement(By.xpath('//input')).getText()
    
    await driver.findElement(By.xpath('//input')).sendKeys('Now You See Me\n')

    // await searchBar.sendKeys('Houston Astros\n')

    await driver.sleep(2000)
})

