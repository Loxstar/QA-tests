// This page should demonstrate the expected functionality
// of the input box by doing the following:
// Open the website
// Enter input box value 


// Required assertion library
let expect = require('chai').expect;

// A test script block for input box
  describe('Zip code input field', function() {

  let zipArray = [
    {'zip': 28277},
    {'zip': 28226},
    {'zip': 28104},
    {'zip': 28105} 
];
    // loop through each item in the array 
  zipArray.forEach(function(x) {
    it('should enter zip codes and submit form', function() {
      return browser
      // Home page
      browser.url('/');
      browser.getTitle().then( function (title) {
      // verify title
      expect(title).to.equal('Frontier® Internet Service | 855-858-4802 | Frontier Communications');
      })
      
      browser.setValue('#zip', x.zip)
      browser.getValue('#zip').then( function (y) {
        expect(y).to.equal(x.zip);
      })
     
      // Submit the form
      browser.click('#zip').then( function() {
      })
      
      browser.waitForVisible('#zip', 7000).then(function () {
      })
      
      // Get text from url link
      browser.getText('head > link:nth-child(9)').then(function (link) {
      // Verify information match
      expect(link).to.equal('https://internet.frontier.com/plans-pricing.html');
      })
    })
  })
});