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
    optimize: 'none',

    modules: [
        {
            name: "main",
            exclude: ['jquery']
        }
    ]

})