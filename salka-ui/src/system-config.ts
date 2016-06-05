let angular2 = () => {
    let packages:any = {};
    [   "@angular/core",
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
    return {
        packages
    };
};

let angular2_material = () => {
    let packages:any = {};
    [   "@angular2-material/core",
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
    return {
        packages
    };
};

System.config({
    map: {
        "rxjs": "libs/rxjs",
        "@angular": "libs/@angular",
        "@angular2-material": "libs/@angular2-material",
        "text": "libs/systemjs-test-loader.js",
        "salka/SalkaAppComponent": "salka/SalkaAppComponent.js"
    }
});
System.config(angular2());
System.config(angular2_material());
System.config({
    packages: {
        "rxjs": { defaultExtension: "js" },
        "salka": { defaultExtension: "js" }
    }
});
