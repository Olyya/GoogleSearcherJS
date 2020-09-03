const {By} = require('selenium-webdriver');

module.exports = {
	url: "https://www.google.com/",
	searchInput: By.xpath("//input[@name='q']")
};