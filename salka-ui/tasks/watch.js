module.exports = function (grunt, options) {
    return {
        options: {
            spawn: false
        },
        resources: {
            files: ["src/**/*"],
            tasks: ["after-resources-watch"]
        }
    };
};
