// Map configuration

const map: any = {
    "rxjs": "libs/rxjs",
    "@angular": "libs/@angular",
    "@angular2-material": "libs/@angular2-material",
    "text": "libs/systemjs-plugin-text/text.js",
    "salka/SalkaAppComponent": "salka/SalkaAppComponent.js"
};

// App packages
const packages: any = {
    "salka": {
        defaultExtension: "js"
    },
    "rxjs": { defaultExtension: "js" },
};

// Angular 2 packages
[
    "@angular/core",
    "@angular/common",
    "@angular/compiler",
    "@angular/http",
    "@angular/platform-browser",
    "@angular/platform-browser-dynamic",
    "@angular/router"

].forEach(function(pkgName: string) {
    packages[pkgName] = {
        main: 'index.js',
        defaultExtension: 'js'
    };
});

// Angular material 2 packages
[
    "@angular2-material/core",
    "@angular2-material/button",
    "@angular2-material/card",
    "@angular2-material/checkbox",
    "@angular2-material/input",
    "@angular2-material/icon"
].forEach(function(pkgName: string) {
    packages[pkgName] = {
        format: "cjs",
        defaultExtension: "js",
        main: pkgName.split("/")[1] + ".js"
    };
});

System.config({
    map,
    packages
});