casper.test.begin('Info block', function (test) {

    casper.waitForSelector('#page[data-status="loaded"]', function () {
        test.assertSelectorHasText('[locator="phone"]', '+79218902868');
        test.assertSelectorHasText('[locator="email"]', 'a@borovin.com');
        test.assertSelectorHasText('[locator="skype"]', 'andrew.borovin');
        test.assertEquals(casper.getElementAttribute('[locator="githubLink"]', 'href'), 'https://github.com/borovin');
    });

    casper.run(function () {
        test.done();
    });

});