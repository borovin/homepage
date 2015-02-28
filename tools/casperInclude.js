var fs = require('fs');
var path = fs.absolute(fs.workingDirectory + '/node_modules/phantomcss/phantomcss.js');
var phantomcss = require(path);

phantomcss.init({
    rebase: casper.cli.get("rebase"),
    libraryRoot: fs.absolute(fs.workingDirectory + '/node_modules/phantomcss'),
    screenshotRoot: fs.absolute(fs.workingDirectory + '/tests/screenshots'),
    failedComparisonsRoot: fs.absolute(fs.workingDirectory + '/tests/failures'),
    comparisonResultRoot: fs.absolute(fs.workingDirectory + '/tests/results'),
    addLabelToFailedImage: false
});

casper.start(casper.cli.options.host);
casper.viewport(1280, 1024);