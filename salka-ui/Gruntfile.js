module.exports = function (grunt) {
    require("time-grunt")(grunt);
    require("load-grunt-config")(grunt, {
        configPath: require("path").join(process.cwd(), "tasks"),
        config: {
            paths: {
                src: {
                    root: "src"
                },
                target: {
                    compile: "target/compile",
                    webapp: "target/webapp",
                    libs: "target/webapp/libs"
                }
            },
            devServer: {
                browserSync: {
                    port: 9100,
                    proxyUrl: "http://localhost:9101/"
                },
                connect: {
                    port: 9101,
                }
            },
            vendorLibs: [
                "es6-shim/es6-shim.js",
                "zone.js/dist/*.js",
                "reflect-metadata/*.js",
                "systemjs/dist/system.src.js",
                "systemjs/dist/system-polyfills.js",
                "rxjs/**/*.js",
                "@angular/**/*.js",
                "systemjs-plugin-text/text.js"
            ]
        },
        jitGrunt: {
            staticMappings: {
                configureRewriteRules: "grunt-connect-rewrite",
                configureProxies: "grunt-connect-proxy",
                systemjs: "grunt-systemjs-builder"
            }
        }
    });
}