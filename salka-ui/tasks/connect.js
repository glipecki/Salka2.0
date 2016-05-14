module.exports = function (grunt, options) {
    return {
        rules: [
            {
                from: "^/$",
                to: "/index.html"
            },
            // supports html5 mode with SPA using history.pushState api without # in uri
            {
                from: "^[^\\.]*$",
                to: "/index.html"
            }
        ],
        proxies: [
            {
                context: "/api",
                host: "127.0.0.1",
                port: 8080,
                rewrite: {
                    "^/api": "/api"
                }
            }
        ],
        server: {
            options: {
                port: "<%= devServer.connect.port %>",
                base: "<%= paths.target.webapp %>/",
                middleware: function (connect, options, defaultMiddleware) {
                    var serveStatic = require('serve-static');

                    if (!Array.isArray(options.base)) {
                        options.base = [options.base];
                    }

                    // Setup the proxy
                    var middlewares = [
                        require("grunt-connect-rewrite/lib/utils").rewriteRequest,
                        require("grunt-connect-proxy/lib/utils").proxyRequest
                    ];

                    // Serve static files.
                    options.base.forEach(function (base) {
                        middlewares.push(serveStatic(base));
                    });

                    // Make directory browse-able.
                    // var directory = options.directory || options.base[options.base.length - 1];
                    // middlewares.push(connect.directory(directory));

                    return middlewares;
                }
            }
        }
    };
};