({
    baseUrl: '../src/',

    mainConfigFile: '../src/require.config.js',
    dir: "../build",

    stubModules: ['ejs', 'amd-loader'],
    skipDirOptimize: true,
    optimizeAllPluginResources: true,
    removeCombined: true,

    preserveLicenseComments: false,
    optimizeCss: 'standard',

    modules: [
        {
            name: "main",
            exclude: ['jquery']
        }
    ]

})