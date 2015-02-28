casper.test.begin('Info block', function (test) {

    casper.waitWhileSelector('#page.loading', function () {
        test.assertSelectorHasText('[test="phone"]', '+79218902868');
        test.assertSelectorHasText('[test="email"]', 'a@borovin.com');
    });

    casper.run(function () {
        test.done();
    });

});