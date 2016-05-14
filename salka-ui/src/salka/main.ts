import {bootstrap} from "@angular/platform-browser-dynamic";
import {SalkaRootComponent} from "salka/root/SalkaRootComponent";
import {ROUTER_PROVIDERS} from "@angular/router";
// import {enableProdMode} from '@angular/core';

// enableProdMode();
bootstrap(SalkaRootComponent, [ROUTER_PROVIDERS]);