({
    baseUrl: '../src/',

    mainConfigFile: '../src/require.config.js',
    dir: "../build",

    stubModules: ['ejs', 'amd-loader'],
    skipDirOptimize: true,
    optimizeAllPluginResources: true,
    removeCombined: false,

    preserveLicenseComments: false,
    optimizeCss: 'standard',
    optimize: 'uglify2',

    uglify2: {
        //Example of a specialized config. If you are fine
        //with the default options, no need to specify
        //any of these properties.
        output: {
            beautify: false
        },
        compress: {
            sequences: true,
            drop_debugger: true,
            drop_console: true
        },
        warnings: false,
        comments: false
    },

    modules: [
        {
            name: "require.config",
            include: ['require.config.production']
        },
        {
            name: "app",
            exclude: ['jquery']
        },
        {
            name: "routes/unauthorized",
            exclude: ['app', 'jquery']
        },
        {
            name: "routes/authorized",
            exclude: ['app', 'jquery']
        }
    ]

})