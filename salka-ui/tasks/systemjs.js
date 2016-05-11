module.exports = function (grunt, options) {
    return {
        options: {
            baseURL: "target/webapp",
            minify: true,
            sourceMaps: false,
            configFile: "target/webapp/system-config.js",
        },
        dist: {
            files: [
                {
                    src: "salka/main.js - [libs/**/*]",
                    dest: "target/webapp/app.js"
                },
                {
                    src: "salka/main.js - [salka/**/*]",
                    dest: "target/webapp/vendor.js"
                }
            ]
        }
    };
};
