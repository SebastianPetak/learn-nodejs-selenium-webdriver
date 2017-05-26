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
// close browser
driver.quite();
