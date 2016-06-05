module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    var vendorLibs = [
        'es6-shim/es6-shim.js',
        'zone.js/dist/*.js',
        'reflect-metadata/*.js',
        'systemjs/dist/system.src.js',
        'systemjs/dist/system-polyfills.js',
        'rxjs/**/*.js',
        '@angular/**/*.js',
        '@angular2-material/**/*.js',
    ];

    grunt.initConfig({
        config: {
            paths: {
                source: 'src',
                target: {
                    compile: 'target/compile',
                    webapp: 'target/webapp',
                    libs: 'target/webapp/libs'
                }
            }
        },
        pkg: grunt.file.readJSON('package.json'),
        clean: [
            '<%= config.paths.target.compile %>',
            '<%= config.paths.target.webapp %>'
        ],
        ts: {
            default: {
                options: {
                    fast: 'never'
                },
                tsconfig: {
                    passThrough: true
                }
            }
        },
        copy: {
            sourcesToCompile: {
                files: [
                    {
                        expand: true,
                        dest: '<%= config.paths.target.compile %>',
                        cwd: '<%= config.paths.source %>',
                        src: [
                            '**/*'
                        ]
                    }
                ]
            },
            libsToDest: {
                files: [
                    {
                        expand: true,
                        dest: '<%= config.paths.target.libs %>',
                        cwd: 'node_modules',
                        src: vendorLibs
                    }
                ]
            },
            compiledToDest: {
                files: [
                    {
                        expand: true,
                        dest: '<%= config.paths.target.webapp %>',
                        cwd: '<%= config.paths.target.compile %>',
                        src: [
                            '**/*'
                        ]
                    }
                ]
            }
        },
        connect: {
            rules: [
                {
                    from: '^/$',
                    to: '/index.html'
                },
                // supports html5 mode with SPA using history.pushState api without # in uri
                {
                    from: '^[^\\.]*$',
                    to: '/index.html'
                }
            ],
            proxies: [
                {
                    context: '/api',
                    host: '127.0.0.1',
                    port: 8080,
                    rewrite: {
                        '^/api': '/api'
                    }
                }
            ],
            server: {
                options: {
                    port: 9101,
                    base: '<%= config.paths.target.webapp %>',
                    middleware: function (connect, options, defaultMiddleware) {
                        var serveStatic = require('serve-static');

                        if (!Array.isArray(options.base)) {
                            options.base = [options.base];
                        }

                        // Setup the proxy
                        var middlewares = [
                            require('grunt-connect-rewrite/lib/utils').rewriteRequest,
                            require('grunt-connect-proxy/lib/utils').proxyRequest,
                            require('connect-livereload')()
                        ];

                        // Serve static files.
                        options.base.forEach(function (base) {
                            middlewares.push(serveStatic(base));
                        });

                        // Make directory browse-able.
                        // var directory = options.directory || options.base[options.base.length - 1];
                        // middlewares.push(connect.directory(directory));

                        return middlewares;
                    }
                }
            }
        },
        systemjs: {
            options: {
                baseURL: '<%= config.paths.target.webapp %>',
                minify: true,
                sourceMaps: false,
                configFile: '<%= config.paths.target.webapp %>/system-config.js',
            },
            dist: {
                files: [
                    {
                        src: 'salka/main.js - [libs/**/*]',
                        dest: 'target/webapp/app.js'
                    },
                    {
                        src: 'salka/main.js - [salka/**/*]',
                        dest: 'target/webapp/vendor.js'
                    }
                ]
            }
        },
        watch: {
            options: {
                spawn: false,
                livereload: true
            },
            resources: {
                files: ['<%= config.paths.source %>/**/*'],
                tasks: ['after-resources-watch']
            }
        }
    });

    grunt.registerTask('default', ['build', 'devmode']);
    grunt.registerTask('build', ['clean', 'copy:sourcesToCompile', 'compile', 'copy:libsToDest', 'copy:compiledToDest']);
    grunt.registerTask('build-prod', ['build', 'systemjs']);
    grunt.registerTask('compile', ['ts']);
    grunt.registerTask('devmode', ['configureRewriteRules', 'configureProxies:server', 'connect:server', 'watch']);
    grunt.registerTask('after-resources-watch', ['newer:copy:sourcesToCompile', 'compile', 'newer:copy:compiledToDest']);

};