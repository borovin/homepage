module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-gitinfo');

    grunt.config.init({
        config: {
            options: {
                clientVersion: '<%- grunt.option("clientVersion") || "' + Date.now() + '" %>',
                apiHost: '<%- grunt.option("apiHost") || "http://api.borovin.com" %>'
            },
            init: {
            }
        },
        shell: {
            build: {
                command: 'rm -rf ./build && node ./tools/r.js -o ./tools/buildConfig.js'
            },
            linkSrc: {
                command: 'ln -snf ./src/ public'
            },
            linkBuild: {
                command: 'ln -snf ./build/ public'
            },
            nodeStart: {
                command: 'node ./server.js'
            },
            deploy: {
                command: 'git push dokku@borovin.com:<%- grunt.option("host") || "test" %> <%- grunt.option("branch") || gitinfo.local.branch.current.name %>:master'
            },
            destroy: {
                command: 'ssh -t dokku@borovin.com -- --force apps:destroy <%- grunt.option("host") || "test" %>'
            }
        }
    });

    grunt.registerTask('destroy', ['shell:destroy']);
    grunt.registerTask('develop', ['config:init', 'shell:linkSrc']);
    grunt.registerTask('production', ['config:init', 'shell:build', 'shell:linkBuild']);
    grunt.registerTask('start', ['production', 'shell:nodeStart']);

    grunt.registerTask('deploy', 'deploy app to remote host', function(){

        if (!grunt.option('host')){
            grunt.fail.warn('specify --host=HOSTNAME');
        }

        grunt.task.run(['gitinfo', 'shell:deploy']);
    });

    grunt.registerMultiTask('config', 'Create config.js from template', function(){

        var template = grunt.file.read('src/config.template');

        var config = grunt.template.process(template, {
            data: this.options()
        });

        grunt.file.write('./src/config.js', config);
    });

};