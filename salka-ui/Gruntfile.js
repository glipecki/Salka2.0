module.exports = function (grunt) {
    require("time-grunt")(grunt);
    require("load-grunt-config")(grunt, {
        configPath: require("path").join(process.cwd(), "tasks"),
        config: {
            paths: {
                target: {
                    root: "target/webapp",
                    libs: "target/webapp/libs"
                }
            }
        },
        jitGrunt: {
            staticMappings: {
                configureRewriteRules: "grunt-connect-rewrite",
                configureProxies: "grunt-connect-proxy",
                systemjs: "grunt-systemjs-builder"
            }
        }
    });
}