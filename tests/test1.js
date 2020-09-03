const browser = require('../lib/Browser');
const helper = require('../lib/helper');
const googleSearchPage = require('../pages/googleSearch');
const googleResultPage = require('../pages/googleResult');
const {Builder, By, Key, until} = require('selenium-webdriver');
var assert = require('chai').assert;


var driver = null;

describe('suite', function () {
	this.timeout(0);
	beforeEach(async function () {
		console.log("beforeEach");
		driver = await browser.openBrowser(driver);
	});

	afterEach(async function () {
		console.log("afterEach");
		driver = await browser.closeBrowser(driver);
		console.log("The end");
	});

	it('test1',async function () {
		try {
			console.log("start test");
			//go to google.com
			await driver.get(googleSearchPage.url);

			//type random word in the input and press the Enter
			let search = await driver.wait(until.elementLocated(googleSearchPage.searchInput), helper.timer);
			search.sendKeys(helper.randomWord);
			search.sendKeys(Key.ENTER);

			//search first header
			let header1 = await driver.wait(until.elementLocated(googleResultPage.firstHeader), helper.timer).getText();
			console.log("header1 - " + header1);

			//assetion that the first header is not empty
			assert(header1 !== null && header1 !== undefined && header1 !== "",  'header is empty the value is -- '+ header1);
			console.log("test finished");

		}catch (e) {
			console.log("something went wrong --->" + e);
			throw e
		}
	});
});