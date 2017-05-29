require('chromedriver');
var webdriver = require('selenium-webdriver');
var By = require('selenium-webdriver').By;

// test count
var count = 0;

// open Chrome
var driver = new webdriver.Builder().forBrowser('chrome').build();
// maximize the window
driver.manage().window().maximize();
// delete all cookies
driver.manage().deleteAllCookies();

/*
	AUTOMATION DESCRIPTION
	Go to node.js website. See what the lastest version of node.js is.
*/

describe('NodeJS website test', function() {
	it('Check page title', function(done) {
		var pageTitle = driver.findElement(By.tagName('title'));
		pageTitle.getAttribute('innerHTML').then(function(title) {
			expect(title).toBe('Node.js');
			done();
		});
	});

	it('Check NodeJS version', function() {
		var button = driver.findElement(By.className('home-downloadbutton'));
		button.getAttribute('title').then(function(title) {
			expect(title).toContain('v6.10');
			done();
		});
	});
});

beforeEach(function() {
	count++;
	console.log('Test number: ' + count);
});

beforeAll(function(done) {
	// go to nodejs.org
	driver.get('https://nodejs.org/en/').then(function() {
		done();
	});
});
