System.config({
    map: {
        "rxjs": "libs/rxjs",
        "@angular": "libs/@angular",
        "text": "libs/systemjs-plugin-text/text.js",
        "salka/SalkaAppComponent": "salka/SalkaAppComponent.js"
    },
    packages: {
        "salka": {
            main: "main.js",
            defaultExtension: "js"
        },
        "rxjs": { defaultExtension: "js" },
        "@angular/core": { main: "index.js", defaultExtension: "js" },
        "@angular/common": { main: "index.js", defaultExtension: "js" },
        "@angular/compiler": { main: "index.js", defaultExtension: "js" },
        "@angular/http": { main: "index.js", defaultExtension: "js" },
        "@angular/platform-browser": { main: "index.js", defaultExtension: "js" },
        "@angular/platform-browser-dynamic": { main: "index.js", defaultExtension: "js" },
        "@angular/router": { main: "index.js", defaultExtension: "js" },
    }
});