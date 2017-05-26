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
driver.get('http://www.google.com/');
// search webdriver in google
driver.findElement(By.name('q')).sendKeys('webdriver');
// click on search button
driver.findElement(By.name('btnG')).click();
// wait for page title
driver.wait(until.titleIs('webdriver - Google Search'), 1000);

var promise = driver.getTitle();

promise.then(function(title) {
	console.log('Title is: ' + title);
})

driver.getTitle()
.then(function(title) {
	console.log('Title is still ' + title);
})

// close browser
driver.quit();
