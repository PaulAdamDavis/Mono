var configureGrunt;

configureGrunt = function (grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        compress: {
            main: {
                options: {
                    archive: 'build/pad_mono_<%= pkg.version %>_.zip',
                    mode: 'zip',
                    pretty: true
                },
                expand: true,
                cwd: './',
                src: ['**/*', '!**/build/**', '!**/node_modules/**', '!**/assets/styles/scss/**', '!npm-debug.log', '!.gitignore', '!Gruntfile.js'],
                dest: ''
            }
        },

        sass: {
            dist: {
                options: {
                    outputStyle: 'nested', // TODO: Set back to 'compressed' working correctly with our dependencies
                    sourceMap: true
                },
                files: {
                    'assets/styles/css/main.css': 'assets/styles/scss/main.scss'
                }
            }
        },

        autoprefixer: {
            options: {
                silent: false, // suppress logging
                map: true, // Use and update the sourcemap
                browsers: ['last 2 versions', '> 1%', 'Explorer 10']
            },
            files: {
                src: 'assets/styles/css/main.css',
                dest: 'assets/styles/css/main.css'
            }
        },

        watch: {
            styles: {
                files: 'assets/styles/scss/**/*.scss',
                tasks: ['sass', 'autoprefixer'],
            },
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-compress');

    grunt.registerTask('styles', ['watch']);
    grunt.registerTask('makezip', ['compress']);
};

module.exports = configureGrunt;