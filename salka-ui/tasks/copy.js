module.exports = function (grunt, options) {
    return {
        libs: {
            files: [{
                expand: true,
                dest: "<%= paths.target.libs %>",
                flatten: true,
                src: [
                    "node_modules/es6-shim/es6-shim.min.js",
                    "node_modules/systemjs/dist/system-polyfills.js",
                    "node_modules/angular2/es6/dev/src/testing/shims_for_IE.js",
                    "node_modules/angular2/bundles/angular2-polyfills.js",
                    "node_modules/systemjs/dist/system.src.js",
                    "node_modules/rxjs/bundles/Rx.js",
                    "node_modules/angular2/bundles/angular2.dev.js",
                    "node_modules/angular2/bundles/router.dev.js"
                ]
            }]
        },
        resources: {
            files: [{
                expand: true,
                cwd: "src/",
                dest: "<%= paths.target.root %>",
                src: [
                    "**/*"
                ]
            }]
        }
    };
};
