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

/* search for, find, and click, iolearn.com */

driver.get('http://google.com').then(function() {
	console.log('find search bar');
	return driver.findElement(By.name('q'));
}).then(function(q) {
	console.log('type iolearn.com Video Tutorials into google search');
	q.sendKeys('iolearn.com Video Tutorials');
}).then(function() {
	console.log('find the search submit button');
	return driver.findElement(By.name('btnG'));
}).then(function(btnG) {
	console.log('click the submit button for the google search');
	btnG.click();
}).then(function() {
	console.log('wait for title to be "iolearn.com Video Tutorials - Google Search"');
	driver.wait(until.titleIs('iolearn.com Video Tutorials - Google Search'), 1000);
}).then(function() {
	console.log('Find link to iolearn.com');
	return driver.findElements(By.css('[href="https://iolearn.com/"]'));
}).then(function(results) {
	console.log('return the first result of findElements')
	return results[0];
}).then(function(link) {
	console.log('click link');
	link.click();
}).then(function() {
	console.log('Wait for title: "Online video tutorials and trainings | iolearn.com"');
	driver.wait(until.titleIs('Online video tutorials and trainings | iolearn.com'), 3000);
}).then(function() {
	console.log('Get title method');
	return driver.getTitle();
}).then(function(title) {
	console.log('The title is : ' + title);
}).then(function() {
	driver.quit();
});
