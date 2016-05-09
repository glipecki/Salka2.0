module.exports = function (grunt, options) {
    return {
        default: {
            options: {
                fast: "never"
            },
            tsconfig: {
                tsconfig: "target/compile/",
                passThrough: true
            }
        }
    };
};
