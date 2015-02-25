module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-gitinfo');

    grunt.config.init({
        config: {
            options: {
                clientVersion: '<%- grunt.option("clientVersion") || "' + Date.now() + '" %>',
                apiHost: '<%- process.env.API_HOST || "http://api.borovin.com" %>'
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
                command: 'git push dokku@borovin.com:<%- grunt.option("host") %> <%- grunt.option("branch") || gitinfo.local.branch.current.name %>:master'
            },
            removeApp: {
                command: 'ssh -t deploy@borovin.com rm -rf apps/<%- grunt.option("app") %>'
            },
            cloneApp: {
                command: function(){
                    return 'ssh -t deploy@borovin.com "git clone git@github.com:borovin/homepage.git --branch' + (grunt.option("branch") || grunt.gitinfo.local.branch.current.name) + '--single-branch apps/' + grunt.option("app") + '"';
                }
            },
            buildApp: {
                command: function(app){
                    return 'ssh -t deploy@borovin.com "cd apps/' + grunt.option('app') + ' && npm install && npm run build"'
                }
            }
        }
    });

    grunt.registerTask('destroy', ['shell:destroy']);
    grunt.registerTask('develop', ['config:init', 'shell:linkSrc']);
    grunt.registerTask('build', ['config:init', 'shell:build', 'shell:linkBuild']);
    grunt.registerTask('start', ['build', 'shell:nodeStart']);

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