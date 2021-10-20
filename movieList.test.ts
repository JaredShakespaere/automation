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
    
    await driver.findElement(By.xpath('//input')).sendKeys('Now You See Me\n')

    await driver.sleep(2000)

    await driver.findElement(By.xpath('//input')).sendKeys('Shutter Island\n')

    await driver.sleep(2000)

    await driver.findElement(By.xpath('//input')).sendKeys('Inception\n')

    await driver.sleep(2000)

    await driver.findElement(By.id('ShutterIsland')).

    await driver.sleep(2000)



})

