casper.test.begin('Tests', function suite(test) {

    casper.start(casper.cli.options.host);
    casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.111 Safari/537.36');
    casper.viewport(1280, 1024);

    casper.waitForSelector('.page__headerTitle', function() {
        test.assertSelectorHasText('.page__headerTitle', 'Андрей Боровин');
    });

    casper.run(function() {
        test.done();
    }, 250);
});