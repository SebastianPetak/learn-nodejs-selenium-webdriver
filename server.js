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
// navigate to google.com
driver.get('http://www.google.com/').then(function() {
	console.log('Find google query input');
	return driver.findElement(By.name('q'));
}).then(function(q) {
	console.log('Type "webdriver" into google query input');
	return q.sendKeys('webdriver');
}).then(function() {
	console.log('Find google search submit button');
	return driver.findElement(By.name('btnG'));
}).then(function(btnG) {
	console.log('click google search submit button');
	return btnG.click();
}).then(function() {
	console.log('Wait until title of page is "webdriver - Google Search"');
	driver.wait(until.titleIs('webdriver - Google Search'), 1000);
}).then(function() {
	console.log('get title method');
	return driver.getTitle();
}).then(function(title) {
	console.log(title);
});
// close browser
driver.quit();
