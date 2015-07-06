module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shell');
    grunt.initConfig({
        watch: {
            files: ['www/**/*'],
            tasks: ['shell:build_phonegap']
        },

        shell: {
            build_phonegap: {
                command: 'cordova build browser'
            }
        }
    });

    grunt.registerTask('default', ['watch']);
};
