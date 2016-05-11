module.exports = function (grunt, options) {
    return {
        options: {
            spawn: false
        },
        resources: {
            files: ["<%= paths.src.root %>/**/*"],
            tasks: ["after-resources-watch"]
        }
    };
};
