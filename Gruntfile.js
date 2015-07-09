module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.initConfig({
        watch: {
            files: ['www/**/*'],
            tasks: ['shell:build_phonegap']
        },

        shell: {
            build_phonegap: {
                command: 'cordova build browser'
            }
        },

        replace: {
            handlebars: {
                src: ['www/index.html'],
                overwrite: true,
                replacements: [{
                    from: /<!-- Handlebars[\s\S]+-->[\s\S]+[\s\S]+-->/,
                    to: function(matchedWord, index, fullText, regexMatches) {
                        var HTML = grunt.file.read('www/js/app/templates/all.html');
                        return "<!-- Handlebars Templates -->\n\n" + HTML + "\n\t<!-- /Handlebars Templates -->"
                    }
                }]

            }
        },

        concat: {
            options: {
                separator: '\n\n',
            },
            dist: {
                src: ['www/js/app/templates/*.html', 'www/js/app/templates/**/*.html'],
                dest: 'www/js/app/templates/all.html',
            }
        }
    });

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('handlebars', ['concat', 'replace:handlebars']);
};
