// This script demonstrates a dropdown menu test 
// by doing the following:
// Open the website.
// Enter input box value and submit the value in the box
// by clickling the Shop Frontier Deals button.


// Required libraries
let assert = require('assert');


  // A test script block for zip code input box
  describe('Input box should work properly', function() {

    // Opens home page and enters value in zip field
    // Should pass user along to plans page 
    // but fails because the url does not match on the new page
  it('should take you to internet plans page', function () {
      browser.url('/');
      browser.element('#zip').setValue(28226);
      browser.click('#js-track-form-check-availability');
        

      let newPage = browser.getUrl();
      assert.equal(newPage, 'https://internet.frontier.com/plans-pricing.html');
    });
    
    // I would expect this test to fail with letters input
    // and incorrect title, but it passes anyway
    it('should not take you to internet plans page', function () {
      browser.url('/'); 
      browser.element('#zip').setValue('abcde');
      browser.click('#zip');

        let newPage = browser.getUrl();
        assert.equal(newPage, 'https://internet.frontier.com/plans-pricing.html');
    });

});