require('chromedriver');
var webdriver = require('selenium-webdriver');
var By = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;
var fs = require('fs');

// open Chrome
var driver = new webdriver.Builder().forBrowser('chrome').build();
// maximize the window
driver.manage().window().maximize();
// delete all cookies
driver.manage().deleteAllCookies();

/* Take a screenshot of iolearn.com */

// navigate to iolearn.com
driver.get('http://iolearn.com');
// take screenshot
driver.takeScreenshot().then(function(data) {
	fs.writeFileSync('img.png', data, 'base64');
});
// close browser
driver.quit();
