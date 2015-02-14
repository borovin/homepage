require.config({
    baseUrl: '/',
    paths: {
        jquery: 'bower_components/jquery/dist/jquery.min'
    },
    map: {
        "*": {
            ejs: 'bower_components/ejsLoader/ejsLoader',
            underscore: 'bower_components/lodash/lodash'
        }
    }
});

if (CONFIG.clientVersion) {
    require.config({
        urlArgs: 'version=' + CONFIG.clientVersion
    });
}

