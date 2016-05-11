module.exports = function (grunt, options) {
    return {
        dev: {
            bsFiles: {
                src: "<%= paths.target.webapp %>/**/*"
            },
            options: {
                port: "<%= devServer.browserSync.port %>",
                proxy: "<%= devServer.browserSync.proxyUrl %>",
                debugInfo: true,
                watchTask: true,
                reloadDelay: 500,
                ghostMode: false
            }
        }
    };
};