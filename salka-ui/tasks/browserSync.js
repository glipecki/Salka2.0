module.exports = function (grunt, options) {
    return {
        dev: {
            bsFiles: {
                src: 'target/**/*'
            },
            options: {
                port: 9100,
                proxy: "http://localhost:9101/",
                debugInfo: true,
                watchTask: true,
                reloadDelay: 500,
                ghostMode: false
            }
        }
    };
};