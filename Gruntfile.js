// requirejs

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        requirejs: {
            compile: {
                options: {
                    baseUrl: "./js/requirejs/",
                    name: "main",
                    out: "./js/requirejs/optimized.js"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.registerTask('default', ['requirejs']);
};