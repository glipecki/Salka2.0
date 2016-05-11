module.exports = function (grunt, options) {
    return {
        sourcesToCompile: {
            files: [
                {
                    expand: true,
                    dest: "<%= paths.target.compile %>",
                    cwd: "<%= paths.src.root %>",
                    src: [
                        "**/*"
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
                    src: "<%= vendorLibs %>"
                }
            ]
        },
        compiledToDest: {
            files: [
                {
                    expand: true,
                    dest: "<%= paths.target.webapp %>",
                    cwd: "target/compile/",
                    src: [
                        "**/*"
                    ]
                }
            ]
        }
    };
};
