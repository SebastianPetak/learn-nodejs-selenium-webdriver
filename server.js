require('chromedriver');
var webdriver = require('selenium-webdriver');
var By = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;

// open Chrome
var driver = new webdriver.Builder().forBrowser('chrome').build();
// maximize the window
driver.manage().window().maximize();
// delete all cookies
driver.manage().deleteAllCookies();

/* Count how many internal links are on the /wiki/Wiki page */

driver.get('http://en.wikipedia.org/wiki/Wiki').then(function() {
	console.log('find elements by css class');
	return driver.findElements(By.css('[href^="/wiki/"]'));
}).then(function(links) {
	console.log('Found', links.length, 'wiki links');
	driver.quit();
});
