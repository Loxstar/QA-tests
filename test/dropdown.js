// This script demonstrates a dropdown menu test 
// by doing the following:
// Open the website.
// Check and verify text.
// Check and verify the menu dropdown items.

// Required assertion library
let expect = require('chai').expect;
// Variable for comparing dropdown links
let dropLink = browser.getTitle();

// A test script block for Plans & Pricing dropdown menus
describe('Plans and Pricing dropdown menu', function () {

  it('should contain Plans and Pricing text', function () {
    // Open Frontier homepage
    browser.url('/');
    // Select Plans and Pricing dropdown
    browser.click('#menu-item-4313');
    // Select text from element
    let planText = browser.getText('#menu-item-4313');
    // Compare text
    expect(planText === 'Plans and Pricing');
  });

  it('should contain link to All Plans page', function () {
    // Open Frontier homepage
    browser.url('/');
    // Select Plans and Pricing dropdown
    browser.click('#menu-item-4313');
    // Click All Plans link
    browser.click('=All Plans');
    // Create variable for page title
    
    // Verify url link to new page and that title matches
    expect(dropLink === 'Frontier Internet Plans | 1-855-860-9937 | Frontier Communications');
  });

  //Repeat steps for other menu options
  it('should link to the correct page for each menu item', function () {
    browser.url('/');
    browser.click('#menu-item-4313');
    browser.click('=Bundles');
    
    expect(dropLink === 'Frontier Bundles | 855-848-1767 | Internet, TV, & Phone');
  });

  it('should link to the correct page for each menu item', function () {
    browser.url('/');
    browser.click('#menu-item-4313');
    browser.click('=Frontier FiOS Bundles');
    
    expect(dropLink === 'Frontier FiOS Bundles | 855-848-1767 | New Customer Offers');
  });

  it('should link to the correct page for each menu item', function () {
    browser.url('/');
    browser.click('#menu-item-4313');
    browser.click('=Frontier Secure');
    
    expect(dropLink === 'Frontier Secure | 855-858-2984 | Computer Security');
  });
});