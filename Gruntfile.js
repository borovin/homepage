module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-gitinfo');

    grunt.config.init({
        repositoryUrl: 'git@github.com:borovin/homepage.git',
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
            linkBuild: {
                command: 'ln -snf ./build/ public'
            },

            //Deploy commands
            removeApp: {
                command: function(){
                    return 'ssh -t deploy@borovin.com "rm -rf apps/' + grunt.option("app") + '"';
                }
            },
            cloneApp: {
                command: function(){
                    return 'ssh -t deploy@borovin.com "git clone ' + grunt.config('repositoryUrl') + ' --branch ' + (grunt.option("branch") || grunt.config('gitinfo').local.branch.current.name) + ' --single-branch apps/' + grunt.option("app") + '"';
                }
            },
            buildApp: {
                command: function(app){
                    return 'ssh -t deploy@borovin.com "cd ~/apps/' + grunt.option('app') + ' && npm install && npm run build"'
                }
            }
        }
    });

    grunt.registerTask('build', ['config:init', 'shell:build', 'shell:linkBuild']);

    grunt.registerTask('deploy', 'deploy app to remote host', function(){

        if (!grunt.option('app')){
            grunt.fail.warn('specify --app=NAME');
        }

        grunt.task.run(['gitinfo', 'shell:removeApp', 'shell:cloneApp', 'shell:buildApp']);
    });

    grunt.registerMultiTask('config', 'Create config.js from template', function(){

        var template = grunt.file.read('src/config.template');

        var config = grunt.template.process(template, {
            data: this.options()
        });

        grunt.file.write('./src/config.js', config);
    });

};