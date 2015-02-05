module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-shell');

    grunt.config.init({
        config: {
            options: {
                clientVersion: '<%- grunt.option("clientVersion") || "' + Date.now() + '" %>'
            },
            init: {
            }
        },
        shell: {
            build: {
                command: 'rm -rf ./build && node ./tools/r.js -o ./tools/buildConfig.js'
            },
            develop: {
                command: 'rm -rf ./build && ln -snf ./src/ public'
            }
        }
    });

    grunt.registerTask('develop', ['config:init', 'shell:develop']);
    grunt.registerTask('production', ['config:init', 'shell:build']);

    grunt.registerMultiTask('config', 'Create config.js from template', function(){

        var template = grunt.file.read('src/config.template');

        var config = grunt.template.process(template, {
            data: this.options()
        });

        grunt.file.write('./src/config.js', config);
    });

};