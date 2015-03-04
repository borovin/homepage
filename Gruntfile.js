var os = require('os');

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-gitinfo');

    grunt.config.init({
        repositoryUrl: 'git@github.com:borovin/homepage.git',
        shell: {
            build: {
                command: 'rm -rf ./build && node ./tools/r.js -o ./tools/buildConfig.js && ln -snf ./build/ public'
            },
            test: {
                command: 'casperjs test tests/<%- grunt.option("suite") || "*" %>.js --host=<%- grunt.option("host") || "http://localhost:8080" %>/test.html --includes=./tools/casperInclude.js --platform=' + os.platform()
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
                    return 'ssh -t deploy@borovin.com "cd ~/apps/' + grunt.option('app') + ' && npm install --production && grunt build"'
                }
            }
        }
    });

    grunt.registerTask('build', ['config', 'shell:build']);
    grunt.registerTask('test', ['shell:test']);

    grunt.registerTask('deploy', 'deploy app to remote host', function(){

        if (!grunt.option('app')){
            grunt.fail.warn('specify --app=NAME');
        }

        grunt.task.run(['gitinfo', 'shell:removeApp', 'shell:cloneApp', 'shell:buildApp']);
    });

    grunt.registerTask('config', 'Create config.js from template', function () {

        var template = grunt.file.read('src/config.template'),
            config = grunt.template.process(template);

        grunt.file.write('./src/config.js', config);
    });

};