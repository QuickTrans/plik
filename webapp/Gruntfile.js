module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        clean: ['dist'],
        concat: {
            js : {
                src: [
                    'js/app.js',
                    'js/lib/*.js',
                    'js/ctrl/*.js',
                ],
                dest: 'dist/js/app.js'
            },
            css : {
                src: [
                    'css/*.css'
                ],
                dest: 'dist/css/app.css'
            },
            js_vendors: {
                src: [
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/bootstrap/dist/js/bootstrap.js',
                    'bower_components/angular/angular.js',
                    'bower_components/ng-file-upload/ng-file-upload-shim.js',
                    'bower_components/ng-file-upload/ng-file-upload.js',
                    'bower_components/angular-sanitize/angular-sanitize.min.js',
                    'bower_components/angular-route/angular-route.js',
                    'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
                    'bower_components/ng-clip/dest/ng-clip.min.js',
                    'bower_components/angular-markdown-directive/markdown.js',
                    'bower_components/underscore/underscore.js',
                    'bower_components/filesize/lib/filesize.js',
                    'bower_components/zeroclipboard/dist/ZeroClipboard.js',
                    'bower_components/angular-contenteditable/angular-contenteditable.js',
                    'bower_components/showdown/src/showdown.js'
                ],
                dest: 'dist/js/vendor.js'

            },
            css_vendors: {
                src: [
                    'css/vendor.css',
                ],
                dest: 'dist/css/vendor.css'
            }
        },
        copy: {
            index: {
                files: [{
                    src: [
                        'index.html',
                    ],
                    dest: 'dist/index.html',
                }]
            },
            favicon: {
                files: [{
                    src: [
                        'favicon.ico',
                    ],
                    dest: 'dist/favicon.ico',
                }]
            },
            partials: {
                files: [{
                    expand: true,
                    src: [
                        'partials/*',
                    ],
                    dest: 'dist/partials/',
                    flatten: true
                }]
            },
            images: {
                files: [{
                    expand: true,
                    src: [
                        'img/*',
                    ],
                    dest: 'dist/img/',
                    flatten: true
                }]
            },
            fonts: {
                files: [{
                    expand: true,
                    src: [
                        'bower_components/bootstrap/fonts/*',
                        'bower_components/fontawesome/fonts/*',
                        'fonts/*'
                    ],
                    dest: 'dist/fonts/',
                    flatten: true
                }]
            }
        },
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            all: {
                files: {
                    'dist/js/app.js': ['dist/js/app.js'],
                    'dist/js/vendor.js': ['dist/js/vendor.js']
                }
            }
        },
        uglify: {
            options: {
                mangle: true,
                compress: true,
                report: true,
                sourceMap: true
            },
            javascript: {
                files: {
                    'dist/js/app.js': ['dist/js/app.js'],
                    'dist/js/vendor.js': ['dist/js/vendor.js']
                }
            }

        },
        cssmin: {
            options: {
                keepSpecialComments: 0
            },
            combine: {
                files: {
                    'dist/css/vendor.css': ['dist/css/vendor.css']
                }
            }
        }
    });

    grunt.registerTask('default', ['clean', 'concat', 'copy', 'ngAnnotate', 'uglify', 'cssmin']);
};
