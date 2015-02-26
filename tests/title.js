casper.test.begin('Title', function suite(test) {

    casper.start(casper.cli.options.host);
    casper.viewport(1280, 1024);

    casper.then(function() {
        test.assertTitle('Andrey Borovin', 'title is correct');
    });

    casper.run(function() {
        test.done();
    });

});