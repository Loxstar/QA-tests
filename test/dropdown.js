// This script demonstrates a dropdown menu test 
// by doing the following:
// Open the website.
// Check and verify the menu dropdown items.



let assert = require('assert');
// let title = browser.getTitle();

// A test script block for Plans & Pricing dropdown menus
describe('Plans and Pricing dropdown menu', function() {

  it('should link to the correct page for each menu item', function () {
    // Open Frontier homepage
    browser.url('/');
    // Select Plans and Pricing dropdown
    browser.click('#menu-item-4313');
    // Select All Plans option
    browser.click('=All Plans');
    // Create variable for page title
    let title = browser.getTitle();
    // Verify link to new page and that title matches
    assert.equal(title, 'Frontier Internet Plans | 1-855-860-9937 | Frontier Communications');
  });
    //Repeat steps for other menu options
  it('should link to the correct page for each menu item', function () {
    browser.url('/');
    browser.click('#menu-item-4313');
    browser.click('=Bundles');
    
    let title = browser.getTitle();
    assert.equal(title, 'Frontier Bundles | 855-848-1767 | Internet, TV, & Phone');
  });

  it('should link to the correct page for each menu item', function () {
    browser.url('/');
    browser.click('#menu-item-4313');
    browser.click('=Frontier FiOS Bundles');
    
    let title = browser.getTitle();
    assert.equal(title, 'Frontier FiOS Bundles | 855-848-1767 | New Customer Offers');
  });

  it('should link to the correct page for each menu item', function () {
    browser.url('/');
    browser.click('#menu-item-4313');
    browser.click('=Frontier Secure');
    
    let title = browser.getTitle();
    assert.equal(title, 'Frontier Secure | 855-858-2984 | Computer Security');
  });
 
});  