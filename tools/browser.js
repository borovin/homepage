var webdriverio = require('webdriverio'),
    options = {
        desiredCapabilities: {
            browserName: 'chrome',
            version: '27',
            platform: 'XP',
            tags: ['examples'],
            name: 'This is an example test'
        },
        host: 'ondemand.saucelabs.com',
        port: 80,
        user: 'borovin',
        key: '223a5e32-8d3b-4a00-be76-e6293985be75',
        logLevel: 'silent'
    };

var browser = webdriverio
    .remote(options)
    .init()
    .timeoutsAsyncScript(5000);


after(function(done) {
    browser.end(done);
});

module.exports = browser;