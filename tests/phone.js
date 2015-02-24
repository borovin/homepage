casper.test.begin('Phone', function suite(test) {

    casper.options.waitTimeout = 10000;

    casper.start(casper.cli.options.host);
    casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.111 Safari/537.36');
    casper.viewport(1280, 1024);

    casper.then(function() {
        this.waitForSelector('[test="phone"]', function(){
            test.assertSelectorHasText('[test="phone"]', '+79218902868');
        });
    });

    casper.run(function() {
        test.done();
    });
});