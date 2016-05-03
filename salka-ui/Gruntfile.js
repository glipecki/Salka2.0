module.exports = function (grunt) {
    require("time-grunt")(grunt);
    require("load-grunt-config")(grunt, {
        configPath: require("path").join(process.cwd(), "tasks"),
        config: {
            paths: {
                target: {
                    root: "target",
                    libs: "target/libs"
                }
            }
        },
        jitGrunt: {
            staticMappings: {
                configureRewriteRules: "grunt-connect-rewrite",
                configureProxies: "grunt-connect-proxy"
            }
        }
    });
}