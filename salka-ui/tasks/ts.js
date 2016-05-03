module.exports = function (grunt, options) {
    return {
        default: {
            options: {
                fast: "never"
            },
            tsconfig: {
                passThrough: true
            }
        }
    };
};
