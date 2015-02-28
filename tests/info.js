casper.test.begin('Info block', function (test) {

    casper.waitForSelector('.resume__top', function () {
        phantomcss.screenshot('.resume__top', 'info');
    });

    casper.then(function () {
        phantomcss.compareAll();
    });

    casper.run(function () {
        test.done();
    });

});