module.exports = function (grunt, options) {
    return {
        sourcesToCompile: {
            files: [
                {
                    expand: true,
                    dest: "target/compile",
                    cwd: "src/",
                    src: [
                        "**/*"
                    ]
                }
            ]
        },
        typingsToCompile: {
            files: [
                {
                    expand: true,
                    dest: "target/compile",
                    src: [
                        "typings/**/*"
                    ]
                }
            ]
        },
        libsToDest: {
            files: [
                {
                    expand: true,
                    dest: "<%= paths.target.libs %>",
                    cwd: "node_modules",
                    src: [
                        "es6-shim/es6-shim.js",
                        "zone.js/dist/*.js",
                        "reflect-metadata/*.js",
                        "systemjs/dist/system.src.js",
                        "systemjs/dist/system-polyfills.js",
                        "rxjs/**/*.js",
                        "@angular/**/*.js"
                    ]
                }
            ]
        },
        compiledToDest: {
            files: [
                {
                    expand: true,
                    dest: "<%= paths.target.root %>",
                    cwd: "target/compile/",
                    src: [
                        "**/*"
                    ]
                }
            ]
        }
    };
};
