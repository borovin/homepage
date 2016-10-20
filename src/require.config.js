require.config({
    baseUrl: '/src/',
    paths: {
        jquery: 'bower_components/jquery/dist/jquery.min'
    },
    map: {
        "*": {
            tpl: 'bower_components/block/templateLoader',
            underscore: 'bower_components/lodash/lodash'
        }
    }
});