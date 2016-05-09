// map tells the System loader where to look for things
var map = {
    "rxjs": "libs/rxjs",
    "@angular": "libs/@angular",
};

// packages tells the System loader how to load when no filename and/or no extension
var packages = {
    "salka": { defaultExtension: "js" },
    "rxjs": { defaultExtension: "js" },
};

var packageNames = [
    "@angular/core",
    "@angular/common",
    "@angular/compiler",
    "@angular/http",
    "@angular/platform-browser",
    "@angular/platform-browser-dynamic",
    "@angular/router"
];

// add package entries for angular packages in the form "@angular/common": { main: "index.js", defaultExtension: "js" }
packageNames.forEach(function(pkgName) {
    packages[pkgName] = { main: "index.js", defaultExtension: "js" };
});

var config = {
    map: map,
    packages: packages
}

declare var System: any;

//noinspection JSUnusedAssignment
System.config(config);