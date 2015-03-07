casper.test.begin('Resume', function (test) {

    casper.then(function () {
        casper.evaluate(function () {

            window.history.replaceState({}, document.title, '/');

            requirejs({
                shim: {
                    main: ['resources/info/mocks/get']
                }
            }, ['main']);

        });
    });

    casper
        .waitForSelector('#page[data-status="loaded"]')
        .then(function () {
            test.assertSelectorHasText('[locator="name"]', 'Андрей Боровин');
        })
        .then(function () {
            test.assertSelectorHasText('[locator="phone"]', '+79218902868');
        })
        .then(function () {
            test.assertSelectorHasText('[locator="email"]', 'a@borovin.com');
        })
        .then(function () {
            test.assertSelectorHasText('[locator="skype"]', 'andrew.borovin');
        })
        .then(function () {
            test.assertEquals(casper.getElementAttribute('[locator="githubLink"]', 'href'), 'https://github.com/borovin', 'github link href is ok');
        });

    casper.run(function () {
        test.done();
    });

});