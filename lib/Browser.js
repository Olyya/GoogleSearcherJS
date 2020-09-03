// Load dependecies
const {Builder} = require('selenium-webdriver');

async function openBrowser(driver) {

	try {
		driver = await new Builder().forBrowser('chrome').build();
		await driver.manage().window().maximize();
		console.log('Browser is started' + '\n');
		return driver;
	} catch (e) {
		throw e
	}
}

async function closeBrowser(driver) {
	try {
		await driver.quit();
		console.log('driver is closed!');
	} catch (e) {
		console.log('cannot close the browser in - closeBrowser()' + '\n' + e + '\n' + driver);
	}
}

module.exports.openBrowser = openBrowser;
module.exports.closeBrowser = closeBrowser;

