var webdriverio = require('webdriverio'),
    options = {
        desiredCapabilities: {
            browserName: 'phantomjs'
        }
    };

var browser = webdriverio
    .remote(options)
    .init()
    .windowHandlePosition(null, {
        x: 0,
        y: 0
    })
    .setViewportSize({
        width: 1280,
        height: 800
    })
    .timeoutsAsyncScript(5000);


after(function(done) {
    browser.end(done);
});

module.exports = browser;